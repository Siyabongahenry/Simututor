import "./sidebar.css";
import{NavLink} from "react-router-dom";
import {FaHome,FaCalculator, FaInfoCircle, FaUniversity} from "react-icons/fa";

export default function Sidebar({displayClass,hide=f=>f})
{
    const links = [
        {
            name:"Home",
            to:"/",
            icon:<FaHome/>,
            children:[]
        },
        {
            name:"University Applications",
            to:"/university",
            icon:<FaUniversity/>,
            children:[]
        },
        {
            name:"College Applications",
            to:"/college",
            icon:<FaUniversity/>,
            children:[]
        },
        {
            name:"Companies",
            to:"/jobs",
            icon:"",
            children:[]
        },
        {
            name:"Government",
            to:"/government",
            icon:"",
            children:[]
        },
        {
            name:"Create your CV",
            to:"/cv",
            icon:"",
            children:[]
        },
        {
            name:"Write your letter",
            to:"/letter",
            icon:"",
            children:[]
        },
        /*
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
            name:"Calendar",
            to:"/multicalculator",
            icon:<FaCalculator/>,
            children:[]
        }
        ,
        {
            name:"About",
            to:"/about",
            icon:<FaInfoCircle className="icon-black"/>,
            children:[]
        }
    ]
    return (
        <ul className={"sidebar "+displayClass}>
            {
                links.map((link,index)=>
                    <li className="nav-item" key={link.name}>
                        <NavLink to={link.to} onClick={hide}>{link.name}</NavLink>
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