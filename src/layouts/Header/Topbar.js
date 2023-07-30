import "./topbar.css";
import {FaBars, FaWhatsapp} from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Topbar({sidebarToddler=f=>f,hideSidebar=f=>f}){
    return (
       
            <ul className="topbar">
                <li><button  onClick={()=>{sidebarToddler(true)}}><FaBars className="nav-item"/></button></li>
                <li>
                    <NavLink to="/"  onClick={hideSidebar}><b>Simututors.</b><small className="text-white">com</small></NavLink>
                </li>
                <li>
                    <FaWhatsapp/>
                </li>
            </ul>
       
    );
}