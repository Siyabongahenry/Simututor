import "./university.css";
import {FaDownload, FaHome,FaInfoCircle, FaMobile} from "react-icons/fa";
import {FaFacebook, FaTwitter,FaLinkedin} from "react-icons/fa";

export default function Institution({institute})
{

    const socialLink = (link,icon)=>{
        if(!link) return (<></>);

        return(
            <div className="social-link">
               <a className="btn btn-light text-success" href={link} target="_blank" rel="noopener noreferrer">{icon}</a>
            </div>
        )
    }


    return(
        <section className="p-2 m-2 institution-container bg-white">
            <h2 className="text-center bg-theme text-theme p-2">{institute.name}</h2>
            <div className="institution-links-container">
                <div className="institution-link">
                   <a className="btn btn-light text-success" href={institute.link} target="_blank" rel="noopener noreferrer"><FaHome/></a>
               </div>
               <div className="institution-link text-center">
                 <a className="text-success" href={institute.prospectorsLink} target="_blank" rel="noopener noreferrer">Prospector <FaDownload/></a>
               </div>
            </div>

            <div className="text-center">
                <div className="institution-info-container" >
                    <div className="text-start fw-bold"><FaInfoCircle/>&nbsp;Institution info</div>
                    <div>Opening Date: {institute.openingDate===""?"Visit their website":institute.openingDate}</div>
                    <div>Closing Date: {institute.closingDate===""?"Visit their website":institute.closingDate}</div>
                    <div>{institute.applicationFee ===0?"No Application Fee":`Application Fee: R ${institute.applicationFee}`}</div>
                </div>
                <div className="d-inline-block">
                    <a className="btn btn-success" href={institute.link} target="_blank" rel="noopener noreferrer"><FaMobile/> Online application</a>
                </div>
            </div>  
            <div className="social-links-container">
                {
                    socialLink(institute.facebookPage,<FaFacebook/>)
                }
                {
                   socialLink(institute.linkedInPage,<FaLinkedin/>)
               }
               {
                   socialLink(institute.twitterPage,<FaTwitter/>)
               }

            </div>         
        </section>
    )
}