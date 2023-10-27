import TimeCalculator from "./Component/TimeCalculatos";
import { useState } from "react";
const MultiCalculator = ()=>{
    const[links,setLinks] =useState([
        {
            name:"Time Calculator",
            element:<TimeCalculator/>,
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
                         <button key={name} onClick={()=>{handleChanges(name)}} className={`btn m-2 ${selected?"btn-primary":"btn-outline-primary"}`}>{name}</button>
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