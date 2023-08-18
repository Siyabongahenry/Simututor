import "./index.css";
import{FaPhone,FaEnvelope, FaWhatsapp, FaLinkedinIn} from "react-icons/fa";
export default function Footer()
{
    return(
        <footer className="text-theme text-center p-2 border-top"> 
            <b>Contacts</b>
            <div className="row">
                <p className="col-12 col-lg-3">
                    <FaWhatsapp/>+27 66 411 8179
                </p>
            </div>
            <div className="text-center text-theme">
               <small>&copy;2023 - simututors.com</small>
            </div>
        </footer>
    );
}