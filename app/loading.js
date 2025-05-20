import Image from "next/image";

import Icon from "/app/icon.svg";

import { NavbarHeader, ContentFooter } from "/app/layout.js";

export default function Loading() {
    return (
        <>
            <NavbarHeader />

            <div id="content">
                <main>
                    <section className="flexcenter" id="loading" style={{padding: "64px 0"}}>
                        <div className="row center">
                            <div className="column-80 center">
                                <div className="h1 hfont br-bottom">now loading...</div>
                                <p className="italics br-bottom">thanks for visiting tou café!</p>
                                <Image src={Icon} alt="icon" className="br-top spin" style={{width: "128px"}} />
                            </div>
                        </div>
                    </section>
                </main>

                <ContentFooter />
            </div>
        </>
    );
};