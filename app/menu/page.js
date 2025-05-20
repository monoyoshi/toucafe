"use server";

import fs from "fs";
import path from "path";

import { ContentFooter } from "/app/layout.js";

import { MenuList } from "/app/menu/[title]/page.js";

export async function generateMetadata({ params }) {
    return {
        title: "menus | tou café | bladewyrm.dev"
    };
};
 
export default async function Menu() {
    const file = path.join(process.cwd(), `/app/_data/menus.json`);
    const data = JSON.parse(fs.readFileSync(file));

    return (
        <>
            <section className="flexcenter" style={{padding: "64px 0 32px"}}>
                <div className="row center">
                    <div className="column-50">
                        <MenuList data={data} />
                    </div>
                </div>
            </section>

            <section style={{padding: "32px 0"}}>
                <div className="row center">
                    <p>pick a menu from the list above :)</p>
                </div>
            </section>
        </>
    );
};