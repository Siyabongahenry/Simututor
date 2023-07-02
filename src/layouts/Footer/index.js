import "./index.css";
import{FaPhone,FaEnvelope} from "react-icons/fa";
export default function Footer()
{
    return(
        <footer className="text-theme text-center p-2"> 
            <b>Contacts</b>
            <p> 
                <FaEnvelope/>&nbsp;<a href="mailto:simututor.com" className="text-decoration-none text-theme">simututor@admin.com</a>
            </p>
            <p>
                <FaPhone/>&nbsp;+27 66 411 8179
            </p>
            <div className="text-center text-theme">
               <small>&copy;2023 - simututor.com</small>
            </div>
        </footer>
    );
}