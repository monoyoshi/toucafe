"use server";

import fs from "fs";
import path from "path";

import Link from "next/link";

import "/app/_css/recipe.css";

function IngredientHeader({ name = "" }) {
    if (name.length > 0) {
        return (
            <div className="h3 tfont br-bottom">{name}</div>
        );
    };
};

function InstructionHeader({ name = "" }) {
    if (name.length > 0) {
        return (
            <div className="h3 tfont stepheader">{name}</div>
        );
    };
};

function InstructionNotes({ notes = [] }) {
    if (notes.length > 0) {
        return (
            <ul>
                {
                    notes.map((content, index) => (
                        <li key={index}>{content}</li>
                    ))
                }
            </ul>
        );
    };
};

function Ingredients({ list = [] }) {
    return (
        <div className="mobilehide" style={{paddingBottom:"64px"}}>
            <div className="hrheader br-bottom">
                <div className="h2 hfont">ingredients</div>
                <hr className="right" />
            </div>
            {
                list.map((section, index) => (
                    <div style={{marginBottom: "2rem"}} key={index}>
                        <IngredientHeader name={section.header} />
                        <ul>
                            {
                                section.list.map((ingredient, jndex) => (
                                    <li key={jndex}>{ingredient.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    );
};

function Equipment({ list = [] }) {
    return (
        <div className="mobilehide" style={{paddingBottom:"64px"}}>
            <div className="hrheader br-bottom">
                <div className="h2 hfont">equipment</div>
                <hr className="right" />
            </div>
            <ul style={{marginBottom: "2rem"}}>
                {
                    list.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

function Instructions({ list = [] }) {
    return (
        <>
            <div className="hrheader br-bottom">
                <div className="h2 hfont">instructions</div>
                <hr className="right" />
            </div>
            {
                list.map((section, index) => (
                    <div style={{marginBottom:"2rem"}} key={index}>
                        <InstructionHeader name={section.header}/>
                        {
                            section.list.map((instruction, jndex) => (
                                <div className="step" key={jndex}>
                                    {instruction.base}
                                    <InstructionNotes notes={instruction.notes}/>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </>
    );
};

export default async function Recipe({ params }) {
    const { menu, recipe } = await params;

    let file;
    let data;

    try {
        file = path.join(process.cwd(), `/public/_data/${menu}/${recipe}.json`);
        //file = await promises.readFile(process.cwd() + `/public/data/${menu}/${recipe}.json`, "utf8");
        data = JSON.parse(fs.readFileSync(file));

        return (
            <>
                <section style={{padding: "32px 0 0"}}>
                    <div className="row center">
                        <div className="column-80">
                            <Link href={`/menu/${menu}`} className="hfont camo" id="menulink">return to menu</Link>
                        </div>
                    </div>
                </section>
    
                <section style={{padding: "32px 0"}}>
                    <div className="row center">
                        <div className="column-80 center">
                        <div className="hrheader">
                            <hr className="left mobilehide" />
                            <div className="h1 hfont recipeheader">{data.title}</div>
                            <hr className="right mobilehide" />
                        </div>
                        </div>
                    </div>
                </section>
    
                <section className="mobileshow">
                    <div className="row center">
                        <div className="column-80">
                            <div className="flexcenter" id="wakelocker">
                                <label htmlFor="wakelock" style={{marginRight: "1rem"}}>keep the screen on</label>
                                <input id="wlcheckbox" type="checkbox" name="wakelock" />
                            </div>
                        </div>
                    </div>
                </section>
    
                <section style={{padding: "64px 0"}}>
                    <div className="row center horizontal">
                        <div className="column-30">
                            <Ingredients list={data.ingredients} />
                            <Equipment list={data.equipment} />
                        </div>
                        <div className="column-5" />
                        <div className="column-45">
                            <Instructions list={data.instructions} />
                        </div>
                    </div>
                </section>
    
                <section style={{padding: "32px 0"}}>
                    <div className="row center">
                        <div className="column-80 center">
                            <div id="images">insert image gallery here</div>
                            <div dangerouslySetInnerHTML={{ __html: data.flavortext }} />
                        </div>
                    </div>
                </section>
            </>
        );
    } catch (e) {
        return (
            <>
                <section style={{padding: "32px 0 0"}}>
                    <div className="row center">
                        <div className="column-80">
                            <Link href={`/menu`} className="hfont camo" id="menulink">return to menu</Link>
                        </div>
                    </div>
                </section>
    
                <section style={{padding: "32px 0"}}>
                    <div className="row center">
                        <div className="column-80 center">
                        <div className="hrheader">
                            <hr className="left mobilehide" />
                            <div className="h1 hfont header">Error 404: Recipe not found</div>
                            <hr className="right mobilehide" />
                        </div>
                        </div>
                    </div>
                </section>
    
                <section style={{padding: "32px 0"}}>
                    <div className="row center">
                        <div className="column-80 center">
                            <p>there's nothing here...</p>
                        </div>
                    </div>
                </section>
            </>
        );
    };
}