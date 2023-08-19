import "./index.css";
import{FaPhone,FaEnvelope, FaWhatsapp, FaLinkedinIn} from "react-icons/fa";
export default function Footer()
{
    return(
        <footer className="text-theme text-center p-2 border-top"> 
            <h4>Contacts</h4>  
            <div className="p-2">
                <a style={{textDecoration:"none"}} className="text-theme" href="tel">&nbsp;<FaWhatsapp/>+27 66 411 8179</a>
            </div>
            <div className="p-2">
                <a style={{textDecoration:"none"}}  className="text-theme" href="mailto:admin@simututors.com"><FaEnvelope/>&nbsp;admin@simututors.com</a>
            </div> 
            <div className="text-center text-theme">
               <small>&copy;2023 - simututors.com</small>
            </div>
        </footer>
    );
}