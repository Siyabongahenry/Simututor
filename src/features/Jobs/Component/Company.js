import "./company.css";
import {FaFacebook, FaTwitter,FaLinkedin, FaHome} from "react-icons/fa";
const Company = ({company})=>{
    

    const socialLink = (link,icon)=>{

        if(!link) return (<></>);

        return (
            <div>
               <a href={link} className="btn btn-light text-success">{icon}</a>   
            </div>
        )
    }
    
    return(
        <div className="company-container bg-white">
            <h2 className="text-center">{company.name}</h2>
            <hr/>
            <div className="text-center p-2">
                <a className="btn-vac" href={company.vacanciesLink}>Vacancies</a>
            </div>
            <div className="d-flex flex-row  justify-content-center p-2">
                <div>
                   <a href={company.homePageLink} className="btn btn-light text-success"><FaHome/></a>   
                </div>
                {
                   socialLink(company.facebookPage,<FaFacebook/>)
                }
                {
                   socialLink(company.linkedInPage,<FaLinkedin/>)
                }   
                {
                   socialLink(company.twitterPage,<FaTwitter/>)
                }     
            </div>
        </div>
    );
}

export default Company;