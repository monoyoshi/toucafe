"use server";

import fs from "fs";
import path from "path";

import { Suspense } from "react";

import { redirect } from "next/navigation";
import Link from "next/link";

import "/app/_css/menu.css";

import Loading from "/app/loading.js";

function compileMenu(menuDir) {
    const pulledData = {};

    // read directory
    fs.readdirSync(menuDir).forEach(folder => {
        const folderName = path.parse(folder).name;
        const folderPath = path.resolve(menuDir, folder);
        const folderStat = fs.statSync(folderPath);
        const isFile = folderStat.isFile();

        if (isFile) {
            // categorized into folders
            // it just helps with organization

            // update: i know I have this bit of code but i can't really use it
            // effectively (adding the category messes up the url structure I
            // want for the resulting recipe page, and i really don't wanna
            // make a second database)

            // anyway I wanna commit it so at least it's in history but I'll delete this code in the update after

            /*const categoryDir = `${menuDir}${folderName}`;

            fs.readdirSync(categoryDir).forEach(file => {
                const fileName = path.parse(file).name;
                const filePath = path.resolve(categoryDir, file);
                const fileStat = fs.statSync(filePath);
                const isFile = fileStat.isFile();

                if (isFile) {
                    const data = JSON.parse(fs.readFileSync(filePath));

                    const menuEntry = {
                        "title": data.title,
                        "id": fileName,
                        "category": folderName,
                        "version": data.version,
                        "attributes": data.attributes,
                        "flavortext": data.flavortext
                    };

                    if (!pulledData[folderName]) pulledData[folderName] = [];

                    pulledData[folderName].push(menuEntry);
                };
            });
        }
        else {*/
            // uncategorized

            // const defaultCategory = "uncategorized";
            const data = JSON.parse(fs.readFileSync(folderPath));

            const menuEntry = {
                "title": data.title,
                "id": folderName,
                "category": data.category,
                "version": data.version,
                "attributes": data.attributes,
                "flavortext": data.flavortext
            };

            if (!pulledData[data.category]) pulledData[data.category] = [];

            pulledData[data.category].push(menuEntry);
        };
    });

    for (const [key, value] of Object.entries(pulledData)) {
        const newV = value.sort((a, b) => {
            const nameA = a.title.toLowerCase();
            const nameB = b.title.toLowerCase();
            if (nameA < nameB) return -1;
            else if (nameA > nameB) return 1;
            else return 0;
        });

        pulledData[key] = newV;
    };

    const atzPulledData = Object.keys(pulledData).sort().reduce((obj, key) => {
        obj[key] = pulledData[key];
        return obj;
    }, {});
        
    return atzPulledData;
};

export async function generateMetadata({ params }) {
    const file = path.join(process.cwd(), `/app/_data/menus.json`);
    const data = JSON.parse(fs.readFileSync(file));

    const { title } = await params;

    if (data[title]) {
        return {
            title: `${data[title].title} | menus | tou café | bladewyrm.dev`
        };
    }
    else {
        return {
            title: "menus | tou café | bladewyrm.dev"
        };
    };
};

export async function MenuList({ data = {}, current = "" }) {
    const op = [];
    for (const [key, value] of Object.entries(data)) {
        op.push([key, value.title])
    };

    return (
        <div className="menulist">
            {
                op.map((b) => (
                    <Link className={`button ${b[0] == current ? "active" : null}`} id={b[0]} href={`/menu/${b[0]}`} key={b[0]}>{b[1]}</Link>
                ))
            }
        </div>
    );
};

function MenuItem({ parent = "", item = {} }) {
    return (
        <Link href={`/${parent}/${item.id}`}>
            <div className="menuitem">
                <div className="miheader">{item.attributes.hot ? <div className="hot"></div> : null}{item.attributes.new ? <div className="new"></div> : null}{item.title}<span className="updated mobilehide">{item.version}</span></div>
                {item.flavortext.length > 0 ? <div dangerouslySetInnerHTML={{ __html: item.flavortext }}></div> : null}
                <div className="updated mobileshow">{item.version}</div>
            </div>
        </Link>
    );
};

function MenuSection({ parent = "", section = [] }) {
    return (
        <div>
            <div className="hrheader br-bottom">
                <div className="h2 hfont">{section[0]}</div>
                <hr className="right" />
            </div>
            {
                section[1].map((r) => (
                    <MenuItem parent={parent} item={r} key={r.id} />
                ))
            }
        </div>
    );
};

function MenuContent({ title = "", menu = {} }) {
    const menuList = Object.keys(menu).map((key) => [key, menu[key]]);

    if (menuList.length > 0) {
        return (
            <div className="column-80">
                <div className="menucontent">
                    {
                        menuList.map((s) => (
                            <MenuSection parent={title} section={s} key={s[0]} />
                        ))
                    }
                </div>
            </div>
        );
    }
    else {
        return (
            <p>there's nothing here...</p>
        );
    };
};

export default async function Menu({ params }) {
    const file = path.join(process.cwd(), `/app/_data/menus.json`);
    const menuList = JSON.parse(fs.readFileSync(file));

    const { title } = await params;

    if (!menuList[title]) redirect("/menu");
    
    const entries = compileMenu(path.join(process.cwd(), `/app/_data/${title}/`));

    return (
        <Suspense fallback={<Loading />}>
            <section className="flexcenter" style={{padding: "64px 0 32px"}}>
                <div className="row center">
                    <div className="column-50">
                        <MenuList data={menuList} current={title} />
                    </div>
                </div>
            </section>

            <section className="flexcenter" style={{padding: "32px 0"}}>
                <div className="row center">
                    <div className="column-80">
                        <div className="hrheader">
                            <hr className="left" />
                            <div className="h1 hfont camo">{menuList[title].title}</div>
                            <hr className="right" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flexcenter" style={{padding: "32px 0"}}>
                <div className="row center">
                    <MenuContent title={title} menu={entries}/>
                </div>
            </section>
        </Suspense>
    );
};