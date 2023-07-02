import { useState } from "react";
import "./page-inside-nav.css";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { NavLink } from "react-router-dom"
export default function PageInsideNav({
    navList=[{
        to:"",
        text:""
    }]
})
{

    const[toddle,setToddle]= useState(true);

    const toddleHandler =()=>setToddle(!toddle);
    
    return(
        <div className="nav-container page-inside-nav">
            <button onClick={toddleHandler}>
                Table of Content {toddle? <FaAngleUp/> : <FaAngleDown/>}
            </button>
            {
                toddle &&
                <ul className="links-container">
                    {
                        navList.map((link,index)=>
                            <li key={index} onClick={toddleHandler}><NavLink to={link.to}>{link.text}</NavLink></li>
                        )
                    }
                </ul>
            }
        </div>
    )
}