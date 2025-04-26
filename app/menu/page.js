"use server";

import { promises } from "fs";

import { MenuList } from "/app/menu/[title]/page.js";
 
export default async function Menu() {
    const file = await promises.readFile(process.cwd() + '/app/_data/menus.json', 'utf8');
    const data = JSON.parse(file);

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