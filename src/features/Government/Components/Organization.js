import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const Organization = ({organization})=>{
    return(
        <div className="box-shadow m-2 bg-white p-2 text-center">
            <h2 className="text-center fw-bold">{organization.name}</h2>
            <hr/>
            <p><small>{organization.description}</small></p>
            <p className="text-center">
                <a className="btn btn-primary" href={organization.appLink}>Online Application</a>
            </p>
            <p> 
                <a className="btn btn-light text-primary" href={organization.facebookPage}><FaFacebook/></a>
                <a className="btn btn-light text-primary" href={organization.twitterPage}><FaTwitter/></a>
                <a className="btn btn-light text-primary" href={organization.linkedInPage}><FaLinkedinIn/></a>
                <a className="btn btn-light text-primary" href={organization.whatsappPage}><FaLinkedinIn/></a>
                <a className="btn btn-light text-primary" href={organization.instagramPage}><FaInstagram/></a>
                <a className="btn btn-light text-primary" href={organization.youtubePage}><FaYoutube/></a>
            </p>
        </div>
    );
}

export default Organization;