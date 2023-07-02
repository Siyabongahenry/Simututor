import "./topbar.css";
import {FaBars} from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Topbar({sidebarToddler=f=>f,hideSidebar=f=>f}){
    return (
       
            <ul className="topbar">
                <li><FaBars className="nav-item" onClick={()=>{sidebarToddler(true)}}/></li>
                <li>
                    <NavLink to="/"  onClick={hideSidebar}>Simututor</NavLink>
                </li>
                <li>
                    <NavLink to="/login"  onClick={hideSidebar}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/signup"  onClick={hideSidebar}>Signup</NavLink>
                </li>
            </ul>
       
    );
}
