import Link from "next/link";
import Image from "next/image";

import Icon from "/app/icon.svg";

import { HRBreak } from "/app/layout.js";

export async function generateMetadata({ params }) {
    return {
        title: "tou café | bladewyrm.dev"
    };
};

export default function Home() {
    return (
        <>
            <section className="flexcenter bgimage" style={{height: "288px", backgroundImage: "linear-gradient(var(--glow)), url(/stock/01.png)"}}>
                <script>/* Image used and altered from Lina Kivaka from Pexels: https://www.pexels.com/photo/black-and-white-ceramic-mug-1813466 */</script>
                <Image src={Icon} alt="tou café icon" style={{position: "relative", bottom: "-72px", width: "256px", marginLeft: "72px"}} />
            </section>

            <section style={{padding: "64px 0"}}>
                <div className="row center">
                    <div className="column-40 center">
                        <div className="hfont h1 br-top">"swords? in <i>my</i> café?"</div>
                        <div className="hfont h3 br-bottom">it's more likely than you think.</div>
                        <p className="br-bottom">Conceptualized in 2018 and maintained by a blade-loving dragon and their partner, <b>tou café</b> is a passion project whose goal is to store recipes in a cool and accessible manner.</p>
                        <div className="buttons flexcenter">
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
                        <Image className="br-top br-bottom" src="/stock/02.png" alt="coffee!" width="1920" height="1080" style={{width: "100%"}} />
                        <script>/* Image used and altered from Nathan Dumlao from Unsplash: https://unsplash.com/photos/shallow-focus-photography-of-coffee-late-in-mug-on-table-zUNs99PGDg0 */</script>
                    </div>
                    <div className="column-5" />
                    <div className="column-45">
                        <div className="hfont h2 br-bottom">fueled by swords, coding, and banana bread</div>
                        <p className="br-bottom">From the depths of the infinite void, rises another strange and seemingly random project... muahahaha... MWAHAHAHAH—</p>
                        <p className="br-bottom">Driven by a desire to fill the <Link href="/about">SFK</Link>-shaped hole in their heart, tou café fuses art, code, and food into a website that at a glance looks like the official website of a modern coffee shop, but is actually a database for cool and yummy AND NUT-FREE recipes a certain being of draconic origin (and their very human girlfriend!) came across.</p>
                        <p>All stock photos used on this site are attributed within the comments in the page's source code. Those without credit are original pictures taken by yours truly and their cool phone camera (Samsung Galaxy S22 Ultra).</p>
                    </div>
                </div>
            </section>
        </>
    );
};