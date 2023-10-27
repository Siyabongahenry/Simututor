import "./sidebar.css";
import{NavLink} from "react-router-dom";
import {FaHome,FaCalculator, FaInfoCircle, FaUniversity, FaFile, FaPhotoVideo, FaBook} from "react-icons/fa";

export default function Sidebar({displayClass,hide=f=>f})
{
    const links = [
        {
            name:"Home",
            to:"/",
            icon:<FaHome  className="text-info"/>,
            children:[]
        },
        {
            name:"University Applications",
            to:"/university",
            icon:<FaUniversity  className="text-info"/>,
            children:[]
        },
        {
            name:"Create My CV",
            to:"/cv",
            icon:<FaFile className="text-info"/>,
            children:[]
        }
        ,
        {
            name:"Create My Formal Letter",
            to:"/letter",
            icon:<FaFile className="text-info"/>,
            children:[]
        },
        {
            name:"HR ADMIN",
            to:"/hr",
            icon:<FaBook className="text-info"/>,
            children:[]
        },
        /*
        {
            name:"Photoshoot Booking",
            to:"/photoshoot",
            icon:<FaPhotoVideo className="text-theme"/>,
            children:[]
        },*/
        /*{
            name:"Mathematics",
            to:"/mathematics",
            icon:<FaCalculator className="text-info"/>,
            children:[]
        },/*
        {
            name:"Physics",
            to:"/physics",
            icon:<FaRocket className="text-info"/>,
            children:[]
        },
        {
            name:"Chemistry",
            to:"/chemistry",
            icon:<FaFlask className="text-info"/>,
            children:[]
        }
        ,*/
        {
            name:"Multi-Calculator",
            to:"/multicalculator",
            icon:<FaCalculator/>,
            children:[]
        }
        ,
        {
            name:"About",
            to:"/about",
            icon:<FaInfoCircle className="text-info"/>,
            children:[]
        }
    ]
    return (
        <ul className={"sidebar "+displayClass}>
            {
                links.map((link,index)=>
                    <li className="nav-item" key={index}>
                        <NavLink to={link.to} onClick={hide}>{link.icon}&nbsp;{link.name}</NavLink>
                        {
                            link.children.length > 0 &&
                            <ul>
                                {
                                    link.children.map((clink)=>
                                        <li key={clink.name}>{clink.name}</li>  
                                    )
                                }
                            </ul>
                        }
                    </li>
                )

            }
        </ul>
    );
}