import "./university.css";
import {FaDownload, FaHome,FaInfoCircle, FaMobile} from "react-icons/fa";

export default function University({uni})
{

    return(
        <section className="p-2 m-2 uni-container">
            <h2 className="text-center bg-theme text-theme p-2">{uni.name}</h2>
            <div className="uni-link-container">
                <div className="uni-link">
                   <a className="text-success" href={uni.link} target="_blank" rel="noopener noreferrer"><FaHome/></a>
               </div>
               <div className="uni-link">
                 <a className="text-success" href={uni.link} target="_blank" rel="noopener noreferrer">Prospector <FaDownload/></a>
               </div>
            </div>
            <div className="text-center">
                <div className="uni-info-container" >
                    <div className="text-start fw-bold"><FaInfoCircle/>&nbsp;Institution info</div>
                    <div>Opening Date: {uni.openingDate}</div>
                    <div>Closing Date: {uni.closingDate}</div>
                    <div> Applications Fee: R {uni.applicationFee}</div>
                </div>
                 <div className="d-inline-block">
                    <a className="btn btn-success" href={uni.link} target="_blank" rel="noopener noreferrer"><FaMobile/> Online application</a>
                </div>
            </div>        
            
        </section>
    )
}