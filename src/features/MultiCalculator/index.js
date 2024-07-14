import "./index.css";
import { useState } from "react";
import MonthHours from "./Component/MonthHours";

const MultiCalculator = ()=>{
    const[links,setLinks] =useState([
       
        {
            name:"Calculate days and hours by date range",
            element:<MonthHours/>,
            selected:true
        }
    ]);

    const handleChanges= (name)=>{
        setLinks(
                links.map(
                (link)=>{
                link.selected = link.name === name;
                return link;
            })
        );

    }
    return(
        <div className="container">
            <div className="text-center">
                {
                    links.map(({name,selected},index)=>(
                         <button key={name} onClick={()=>{handleChanges(name)}} className={`${selected?"btn-nav-selected":"btn-nav"}`}>{name}</button>
                    ))
                }
            </div>
            <div>
                {
                    links.length > 0 && links.find(link=>link.selected).element
                }
            </div>
        </div>
    )
}

export default MultiCalculator;