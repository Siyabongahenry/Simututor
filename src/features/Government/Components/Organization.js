import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
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
                {organization.facebookPage && <a className="btn btn-light text-primary" href={organization.facebookPage}><FaFacebook/></a>}
                {organization.twitterPage && <a className="btn btn-light text-primary" href={organization.twitterPage}><FaTwitter/></a>}
                {organization.linkedInPage && <a className="btn btn-light text-primary" href={organization.linkedInPage}><FaLinkedinIn/></a>}
                {organization.whatsappPage && <a className="btn btn-light text-primary" href={organization.whatsappPage}><FaWhatsapp/></a>}
                {organization.instagramPage && <a className="btn btn-light text-primary" href={organization.instagramPage}><FaInstagram/></a>}
                {organization.youtubePage && <a className="btn btn-light text-primary" href={organization.youtubePage}><FaYoutube/></a>}
            </p>
        </div>
    );
}

export default Organization;