import { NavbarHeader, ContentFooter } from "/app/layout.js";

export default function RecipeLayout({ children }) {
    return (
        <>
        <NavbarHeader currentPage="menu" />

        <div id="content">
            <main>{children}</main>

            <ContentFooter />
        </div>
        
        </>
    );
};