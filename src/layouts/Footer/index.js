import "./index.css";
import{FaEnvelope, FaFacebook} from "react-icons/fa";
export default function Footer()
{
    return(
        <footer className="text-theme text-center p-2 border-top bg-light"> 
            <div className="p-2">
                <a style={{textDecoration:"none"}}  className="btn btn-success" href="mailto:admin@simututors.com"><FaEnvelope/>&nbsp;admin@mechvil.com</a>&nbsp;
                <a  style={{textDecoration:"none"}}  className="btn btn-success" href="https://www.facebook.com/profile.php?id=61560116647159&mibextid=ZbWKwL"><FaFacebook/>&nbsp;Mech Vil</a>
            </div> 
            <div className="text-center text-theme">
               <small>&copy;2023 - mechvil.com</small>
            </div>
        </footer>
    );
}