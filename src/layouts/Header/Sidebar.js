import "./sidebar.css";
import{NavLink} from "react-router-dom";

export default function Sidebar({displayClass,hide=f=>f})
{
    return (
        <ul className={"sidebar "+displayClass}>
            <li className="nav-item">
                <NavLink to="/" onClick={hide}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/mathematics" onClick={hide}>Mathematics</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/physics" onClick={hide}>Physics</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/chemistry" onClick={hide}>Chemistry</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" onClick={hide}>About</NavLink>
            </li>
        </ul>
    );
}