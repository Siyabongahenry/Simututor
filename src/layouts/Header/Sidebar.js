import "./sidebar.css";
import{NavLink} from "react-router-dom";
import {FaHome,FaCalculator, FaInfoCircle, FaFlask, FaRocket, FaUniversity, FaFile} from "react-icons/fa";

export default function Sidebar({displayClass,hide=f=>f})
{
    const links = [
        {
            name:"Home",
            to:"/",
            icon:<FaHome/>
        },
        {
            name:"University Applications",
            to:"/university",
            icon:<FaUniversity/>
        }
        ,
        {
            name:"Create My CV",
            to:"/cv",
            icon:<FaFile/>
        }
        ,
        {
            name:"Create My Formal Letter",
            to:"/letter",
            icon:<FaFile/>
        }
        ,
        {
            name:"About",
            to:"/about",
            icon:<FaInfoCircle className="text-info"/>
        }
    ]
    return (
        <ul className={"sidebar "+displayClass}>
            {
                links.map((link,index)=>
                    <li className="nav-item" key={index}>
                        <NavLink to={link.to} onClick={hide}>{link.icon}&nbsp;{link.name}</NavLink>
                    </li>
                )

            }
        </ul>
    );
}