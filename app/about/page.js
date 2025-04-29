import Link from "next/link";
import Image from "next/image";

import NextLogo from "/public/next.svg";

import { HRBreak } from "/app/layout.js";

export default function Home() {
    return (
        <>
            <section className="flexcenter" style={{padding: "64px 0 32px"}}>
                <script dangerouslySetInnerHTML={{ __html: '<!-- image used and altered from lina kivaka from pexels: https://www.pexels.com/photo/black-and-white-ceramic-mug-1813466 -->' }} />
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
            <div className="hfont h1">the meaning of "SFK"</div>
            <div className="hfont h3 br-bottom">tou café is dedicated to being 100% nut-free*.</div>
        </div>
    </div>
    <div className="row center">
        <div className="column-60 center">
            <p className="br-bottom">SFK is an acronym that stands for "Safe For Kyu" (Kyu being, well, me). Conversely, NSFK stands for "Not Safe For Kyu."</p>
            <p className="br-bottom">It's used to describe food I can eat without dying, so essentially it's a label for any food item that doesn't contain nuts. I think it started off as a joke I made with my friends, but then we ended up using it more and then it stuck.</p>
            <p className="br-bottom">*Some "-nuts" are special exceptions, like coconut.</p>
        </div>
    </div>
</section>

            <HRBreak />

            <section style={{padding: "32px 0 32px"}}>
                <div className="row center">
                    <div className="column-35 center">
                        <div className="hfont h1 br-bottom">the next step (:smirk:)</div>
                        <p className="br-bottom">This project was made with Next.js by Vercel.</p>
                        <p className="br-bottom">Honestly, it's very cool! It does a lot of things that I wish I could've done with vanilla JavaScript (I mean, <i>maybe</i> you could, but I wanted a better way to manage my files and Next.js does that and more).</p>
                        <p>As for <Link href="https://tou-cafe.bladewyrm.dev/" target="_blank" rel="noopener noreferrer">the original website</Link>, it will still be maintained with new recipes.</p>
                    </div>
                    <div className="column-5" />
                    <div className="column-20 flexcenter br-top br-bottom">
                        <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><Image src={NextLogo} alt=":)" style={{width: "320px"}} /></Link>
                    </div>
                </div>
            </section>

            <HRBreak />

            <section style={{padding: "64px 0"}}>
                <div className="row center">
                    <div className="column-20 flexcenter br-top br-bottom">
                        <Image src="https://cdn.bladewyrm.dev/images/placeholder/kyutear.png" width={450} height={450} alt=":)" unoptimized style={{width: "256px"}} />
                    </div>
                    <div className="column-5" />
                    <div className="column-35 center">
                        <div className="hfont h1">kyu(ren)</div>
                        <div className="hfont italics h3 br-bottom">the Bladewyrm</div>
                        <p>Some guy who lives in the void. They made banana bread once and instantly rizzed everyone that ate it. Their disgust for nuts is so absolute that they'd rather choke to death than be in the same room as a cashew.</p>
                    </div>
                </div>
            </section>
        </>
    );
};