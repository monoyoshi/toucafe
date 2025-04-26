import Link from "next/link";
import Image from "next/image";

import Icon from "/src/app/icon.svg";

import { HRBreak } from "/src/app/layout.js";

export default function Home() {
    return (
        <>
            <section className="flexcenter bgimage" style={{height: "288px", backgroundImage: "linear-gradient(var(--glow)), url(/stock/01.png)"}}>
                <script dangerouslySetInnerHTML={{ __html: '<!-- image used and altered from lina kivaka from pexels: https://www.pexels.com/photo/black-and-white-ceramic-mug-1813466 -->' }} />
                <Image src={Icon} alt="icon" style={{position: "relative", bottom: "-80px", width: "256px", marginLeft: "72px"}} />
            </section>

            <section style={{padding: "64px 0"}}>
                <div className="row center">
                    <div className="column-40 center">
                        <div className="hfont h1 br-top">"Swords? In <i>my</i> café?"</div>
                        <div className="hfont h3 br-bottom">It's more likely than you think.</div>
                        <p className="br-bottom">Conceptualized in 2018 and maintained by a blade-loving dragon and their partner, <b>tou café</b> is a passion project whose goal is to store recipes in a cool and presentable manner.</p>
                        <div className="buttons flexcenter br-bottom">
                            <Link className="button" href="menu">see the menu!</Link>
                            <Link className="button" href="about">learn more!</Link>
                        </div>
                    </div>
                </div>
            </section>

            <HRBreak />

            <section style={{padding: "64px 0"}}>
                <div className="row center">
                    <div className="column-30">
                        <Image className="br-bottom" src="/stock/02.png" alt="" width="1920" height="1080" style={{width: "100%"}}/>
                        <script dangerouslySetInnerHTML={{ __html: '<!-- /* image used and altered from from unsplash: https://unsplash.com/photos/shallow-focus-photography-of-coffee-late-in-mug-on-table-zUNs99PGDg0 */ -->' }} />
                    </div>
                    <div className="column-5" />
                    <div className="column-45">
                        <div>
                            <div className="hfont h2 br-bottom">Fueled by swords, coding, and banana bread</div>
                            <p className="br-bottom">From the depths of the infinite void, rises another strange and seemingly random project... *evil chuc—I mean, woah! Doesn't this website look cool? Please say it does I worked really hard on it 🥺</p>
                            <p>All stock photos used on this site are attributed within the comments in the page's code. Those without credit are original pictures made by yours truly and their cool phone camera.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};