import Link from "next/link";
import Image from "next/image";

import NextjsLogo from "/public/nextjs.svg";

import { HRBreak } from "/app/layout.js";

export async function generateMetadata({ params }) {
    return {
        title: "about | tou café | bladewyrm.dev"
    };
};

export default function Home() {
    return (
        <>
            <section className="flexcenter" style={{padding: "64px 0 32px"}}>
                <div className="row center">
                    <div className="column-2 center">
                        <div className="hfont h1">about</div>
                    </div>
                </div>
            </section>

            <HRBreak />

            <section style={{padding: "32px 0 32px"}}>
                <div className="row center">
                    <div className="column-40 center">
                        <div className="hfont h1">the internet is my repository</div>
                        <div className="hfont h3 br-bottom">and I like to fork.</div>
                        <p className="br-bottom">None of these recipes are 100% original. They've all been taken and modified from somewhere on the web, like on the first page of a search engine. Or the second, if I'm being adventurous.</p>
                        <p>After all, tou café's first and foremost mission is to be a recipe database that satisfies ME and MY craving for food and drink I can never consume otherwise because they were made in a place that can't guarantee my continued living.</p>
                    </div>
                </div>
            </section>

            <HRBreak />

            <section style={{padding: "32px 0 32px"}}>
                <div className="row center">
                    <div className="column-40 center">
                        <div className="hfont h1">the meaning of "SFK"</div>
                        <div className="hfont h3 br-bottom">tou café is dedicated to being 100% nut-free*.</div>
                        <p className="br-bottom"><b>SFK</b> is an acronym that stands for "<b>S</b>afe <b>F</b>or <b>K</b>yu" (Kyu being, well, the guy who made this website). Conversely, <b>NSFK</b> stands for "<b>N</b>ot <b>S</b>afe <b>F</b>or <b>K</b>yu" (Kyu also being, well, the guy who made this website).</p>
                        <p className="br-bottom">It's used to describe food they can eat without dying, so essentially SFK is a label for anything that doesn't contain nuts (or poison) (or anything inedible, really). It started off as a joke Kyu, the guy who made this website, made with their friends, but then they ended up using it more and then it stuck as an actual useful label.</p>
                        <p className="br-bottom">*Some "-nuts" are special exceptions, like coconut. Unless you're literally Kyu (the guy who made this website), don't take this site too seriously.</p>
                    </div>
                </div>
            </section>

            <HRBreak />

            <section style={{padding: "32px 0 32px"}}>
                <div className="row center">
                    <div className="column-40 center">
                        <div className="hfont h1">now with more hacking</div>
                        <div className="hfont h3 br-bottom">if tou café is so good, where's tou café 2?</div>
                        <p className="br-bottom">This project was made with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js by Vercel</Link>.</p>
                        <p>The original site will continue to be available on <Link href="https://monoyoshi.github.io/tou-cafe" target="_blank" rel="noopener noreferrer">Github Pages</Link>.</p>
                    </div>
                    <div className="column-5" />
                    <div className="column-20 flexcenter br-top br-bottom">
                        <Image src={NextjsLogo} alt="vercel and next.js logo mashed together. click me to go the next.js homepage" style={{width: "256px"}} />
                    </div>
                </div>
            </section>

            <HRBreak />

            <section style={{padding: "64px 0"}}>
                <div className="row center">
                    <div className="column-20 flexcenter br-top br-bottom">
                        <Image src="https://cdn.bladewyrm.dev/images/placeholder/kyutear.png" width={450} height={450} alt="me!!!!!!!" unoptimized style={{width: "256px"}} />
                    </div>
                    <div className="column-5" />
                    <div className="column-40 center">
                        <div className="hfont h1">kyu(ren)</div>
                        <div className="hfont italics h3 br-bottom">The Bladewyrm</div>
                        <p className="br-bottom">Some guy who lives in the void. They made banana bread once and instantly rizzed everyone. Their disgust for nuts is so absolute that they'd rather choke to death than be in the same room as a cashew.</p>
                        <p>They also have a strange hyperfixation on building websites, apparently?</p>
                    </div>
                </div>
            </section>
        </>
    );
};