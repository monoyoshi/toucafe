"use client";

import { useRef, useState } from "react";

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
import HBOpen from "/public/hamburger/yesburger.svg";
import HBClose from "/public/hamburger/noburger.svg";

export function HRBreak({ width = "64px", paddingtop = 0, paddingbottom = paddingtop }) {
    return (
        <section className="hrbreak" style={{paddingTop: paddingtop, paddingBottom: paddingbottom}}>
            <hr style={{width: width}} />
        </section>
    );
};

function Cursor() {
    return;
};

function NavbarHeader() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleHBM(state = !isOpen) {
        setIsOpen(state);

        if (state) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";
    };

    return (
        <header>
            <nav className="flexcenter">
                <div className="flexcenter" id="navlogo">
                    <Link href="/" onClick={() => {toggleHBM(false)}}>
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
                    <Link href="https://twitter.com/bladewyrm" target="_blank" rel="noopener noreferrer">contact</Link>
                </div>
                <div className="flexcenter" id="burgerbox">
                    <button className="flexcenter" onClick={() => {toggleHBM()}}>
                        <Image src={isOpen ? HBClose : HBOpen} alt="hbmenu" />
                    </button>
                </div>
            </nav>
            <div className={isOpen ? "active" : null} id="hbmenu">
                <Link href="/menu" onClick={() => {toggleHBM(false)}}>menu</Link>
                <Link href="/about" onClick={() => {toggleHBM(false)}}>about</Link>
                <Link href="/shop" onClick={() => {toggleHBM(false)}}>shop</Link>
                <Link href="https://bsky.app/profile/bladewyrm.dev" target="_blank" rel="noopener noreferrer" onClick={() => {toggleHBM(false)}}>contact</Link>
            </div>
            <div className={isOpen ? "active" : null} id="hbmshadow" />
        </header>
    );
};

export default function RootLayout({ children }) {
    const cursorArea = useRef();

    return (
        <html lang="en" className={`${tfont.variable} ${hfont.variable}`}>
        <body>
            <Cursor ref={cursorArea} />

            <NavbarHeader />

            <article>
                <main>{children}</main>

                <HRBreak />

                <section id="articlefooter">
                    <Link href="https://bladewyrm.dev" target="_blank" rel="noopener noreferrer"><Image src="https://cdn.bladewyrm.dev/images/logo.svg" width={1536} height={640} alt="bladewyrm logo" style={{height: "64px"}} /></Link>
                </section>
            </article>

            <footer>
                <div className="flexcenter">
                    <p>made with love and pure hyperfixation from <b>kyu(ren)</b></p>
                    <Image src="https://cdn.bladewyrm.dev/images/kyurem/sprite-animated_kyurem.png" width={32} height={32} alt=":)" unoptimized style={{height: "32px"}} />
                </div>
            </footer>
        </body>
        </html>
    );
};