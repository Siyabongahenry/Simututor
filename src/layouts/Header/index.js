import { useState } from "react";
import "./index.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function Head(){

    const[sidebar,setSidebar] = useState(false);

    const resetSideBar =()=>setSidebar(false);

    return (
        <header>
            <nav>
                <Topbar sidebarToddler={()=>{setSidebar(!sidebar)}} hideSidebar={resetSideBar}/>
                <Sidebar displayClass={sidebar?"show-sidebar":"hide-sidebar"} hide={resetSideBar}/>
            </nav>
        </header>
    );
}