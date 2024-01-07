import { FaEnvelope,FaHome,FaPhone} from "react-icons/fa";
export default function CVHeader({names,contacts={},address={}})
{
    const headerStyles={
        width:"60%",
        float:"left",
        textAlign:"Center",
        color:"white"
    }
    const addressStyles={
        border:"1px solid black",
        padding:"0.5em",
        float:"left",
        width:"40%",
        backgroundColor:"white",
        color:"black"
       
    }
    return(
        <div style={{overflow:"auto"}}>
            <div style={headerStyles}> 
                <h1>{names}</h1>
            </div>
            <div style={addressStyles}>
                <address  style={{borderBottom:"1px solid black"}}>
                    <p style={{padding:"0",margin:"0"}}>{address.surbub}</p>
                    <p style={{padding:"0",margin:"0"}}>{address.town}</p>
                    <p style={{padding:"0",margin:"0"}}>{address.postalCode}</p>
                </address>
                <div>
                    <p style={{padding:"0",margin:"0"}}><FaEnvelope/>&nbsp;{contacts.email}</p>
                    <p style={{padding:"0",margin:"0"}}><FaPhone/>&nbsp;{contacts.mobileNo}</p>
                    {contacts.home && <p style={{padding:"0",margin:"0"}}><FaHome/>&nbsp;{contacts.home}</p>}
                </div>
            </div>
        </div>
    );
}