import Image from "next/image";

import FourZeroFour from "/public/404.svg";

export async function generateMetadata({ params }) {
    return {
        title: "404 | tou café | bladewyrm.dev"
    };
};

export default function NotFound() {
    return (
        <section className="flexcenter" style={{padding: "64px 0"}}>
            <div className="row center">
                <div className="column-80 center">
                    <div className="h1 hfont br-bottom">error 404: page not found</div>
                    <p className="italics br-bottom">"...and where do <b>you</b> think you're going?"</p>
                    <Image src={FourZeroFour} alt="icon" className="br-top" style={{width: "512px"}} />
                </div>
            </div>
        </section>
    );
};