import "./welcome.css";
import Chatbox from "./Chatbox";
import { FaMarker } from "react-icons/fa";


export default function Welcome()
{

    return(
        <div className="text-center welcome-">
            <h1 className="p-2 sow" >Easy peasy <FaMarker/></h1>
            <svg className="chatting-robot" width="100" height="100">
                <path d="M10 40 C10 10 90 10 90 40" stroke="black" strokeWidth="2" fill="transparent"/>
                <circle className="eye"  cx="30" cy="40" r="10" stroke="black" strokeWidth="2" fill="white"/>
                <circle className="eye" cx="70" cy="40" r="10"stroke="black" strokeWidth="2" fill="white"/>
                <ellipse className="mouth" cx="50" cy="60" rx="15" ry="3" stroke="white"/>
            </svg>      
            <div className="p-2">
                <Chatbox  message="You've reached the end."/>
            </div>          
        </div> 
    );
}