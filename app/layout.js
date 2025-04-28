"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import "/app/_css/colors.css";

import { RocknRoll_One, Mochiy_Pop_One } from "next/font/google";
import "/app/_css/fonts.css";

const tfont = RocknRoll_One({
    subsets: ["latin", "latin-ext"],
    weight: "400",
    variable: "--font-rocknroll_one"
});

const hfont = Mochiy_Pop_One({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-mochiy_pop_one"
});

import "/app/_css/styles.css";

import SiteLogo from "/public/logo.svg";
import HBOpen from "/public/_hamburger/yesburger.svg";
import HBClose from "/public/_hamburger/noburger.svg";

export function HRBreak({ paddingtop = 0, paddingbottom = paddingtop }) {
    return (
        <section className="hrbreak" style={{padding: `${paddingtop} 0 ${paddingbottom}`}}>
            <hr style={{"width": "64px"}} />
        </section>
    );
};

function Burgerbox() {
    const [isClosed, setIsClosed] = useState(false);

    function toggle() {
        setIsClosed(!isClosed);
    };

    return (
        <div className="flexcenter" id="burgerbox">
            <button className="flexcenter" onClick={toggle}>
                <Image src={isClosed ? HBClose : HBOpen} alt="hbmenu" />
            </button>
        </div>
    );
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${tfont.variable} ${hfont.variable}`}>
        <body>
            <header>
                <nav className="flexcenter">
                    <div className="flexcenter" id="navlogo">
                        <Link href="/">
                            <Image src={SiteLogo} alt="home" style={{height: "48px"}} />
                        </Link>
                    </div>
                    <div className="flexcenter">
                        <Link href="/menu">menu</Link>
                    </div>
                    <div className="flexcenter">
                        <Link href="/about">about</Link>
                    </div>
                    <div className="flexcenter">
                        <Link href="/shop">shop</Link>
                    </div>
                    <div className="flexcenter">
                        <Link href="https://bsky.app/profile/bladewyrm.dev" target="_blank" rel="noopener noreferrer">contact</Link>
                    </div>
                    <Burgerbox />
                </nav>
            </header>

            <main>{children}</main>

            <HRBreak paddingtop="64px" paddingbottom="0" />
            <section id="mainfooter">
                <Link href="https://bladewyrm.dev" target="_blank" rel="noopener noreferrer">
                    <Image src="https://cdn.bladewyrm.dev/images/logo.svg" width={1536} height={640} alt="bladewyrm logo" style={{height: "64px"}} />
                </Link>
            </section>

            <footer className="flexcenter">
                <p>made with love and pure hyperfixation from <b>kyu(ren)</b></p>
                <Image src="https://cdn.bladewyrm.dev/images/kyurem/sprite-animated_kyurem.png" width={32} height={32} alt=":)" unoptimized style={{height: "32px"}} />
            </footer>
        </body>
        </html>
    );
};