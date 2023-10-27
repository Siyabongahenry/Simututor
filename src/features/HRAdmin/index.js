import { useState } from "react";
import NamingFiles from "./Components.js/NamingFiles";
import WordCapitilizer from "./Components.js/WordCapitilizer";
import IdInfoExtractor from "./Components.js/IdInfoExtractor";

const HRAdmin = ()=>{
    const[navList,setNavList] = useState([
        {
            name:"Naming Files",
            element:<NamingFiles/>,
            show:true
        },
        {
            name:"Word Capitilization",
            element:<WordCapitilizer/>,
            show:false
        },
        {
            name:"Id Info Extractor",
            element:<IdInfoExtractor/>,
            show:false
        }

    ])
    const handleNav = (navName)=>{
        setNavList(
            navList.map((navItem)=>{
                navItem.show = navItem.name === navName;
                return navItem;
            })
        );
    }
    return (
        <div className="container">
            <div className="btn-group">
            {
                navList.map(({name,show},index)=>(
                    <button onClick={()=>{handleNav(name)}} className={`btn ${show?"btn-primary":"btn-outline-primary"}`} key={name}>{name}</button>
                ))
            }
            </div>
            {
                navList.find(navItem=>navItem.show).element
            }
        </div>
    );

}

export default HRAdmin;