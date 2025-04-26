"use server";

import { promises } from "fs";

import { redirect } from "next/navigation";

import Link from "next/link";

import "/app/_css/menu.css";

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
        <div className="menuitem">
            <Link href={`/${parent}/${item.id}`}>
                 <div className="miheader">{item.attributes.hot ? <div className="hot"></div> : null}{item.attributes.new ? <div className="new"></div> : null}{item.title}</div>
                {item.description.length > 0 ? <div dangerouslySetInnerHTML={{ __html: item.description }}></div> : null}
            </Link>
        </div>
    );
};

function MenuSection({ parent = "", section = {} }) {
    return (
        <div>
            <div className="hrheader br-bottom">
                <div className="h2 hfont">{section.header}</div>
                <hr className="right" />
            </div>
            {
                section.recipes.map((r) => (
                    <MenuItem parent={parent} item={r} key={r.id} />
                ))
            }
        </div>
    );
};

function MenuContent({ title = "", menu = {} }) {
    if (menu.content.length > 0) {
        return (
            <div className="column-80">
                <div className="menucontent">
                    {
                        menu.content.map((s) => (
                            <MenuSection parent={title} section={s} key={s.header} />
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
    const file = await promises.readFile(process.cwd() + "/app/_data/menus.json", "utf8");
    const data = JSON.parse(file);

    const { title } = await params;

    if (!data[title]) redirect("/menu");

    return (
        <>
            <section className="flexcenter" style={{padding: "64px 0 32px"}}>
                <div className="row center">
                    <div className="column-50">
                        <MenuList data={data} current={title} />
                    </div>
                </div>
            </section>

            <section className="flexcenter" style={{padding: "32px 0"}}>
                <div className="row center">
                    <div className="column-80">
                        <div className="hrheader">
                            <hr className="left" />
                            <div className="h1 hfont camo">{title}</div>
                            <hr className="right" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flexcenter" style={{padding: "32px 0"}}>
                <div className="row center">
                    <MenuContent title={title} menu={data[title]}/>
                </div>
            </section>
        </>
    );
};