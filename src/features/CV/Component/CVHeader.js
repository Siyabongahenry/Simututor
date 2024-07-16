import { FaEnvelope,FaHome,FaMapMarkerAlt,FaPhone, FaUser} from "react-icons/fa";
export default function CVHeader({names,contacts={},address={}})
{
   
    return(
        <div style={{ display:"flex",height:"100%",justifyContent:"space-between",alignItems:"center",textAlign:"start",padding:"1%"}}>
            <div> 
                <h1><FaUser style={{color:"#015289"}}/>&nbsp;{names}</h1>
            </div>
            <div style={{fontSize:"12px"}}>
                <FaMapMarkerAlt/>
                <address>
                    <p style={{padding:"0",margin:"0"}}>{address.surbub}</p>
                    <p style={{padding:"0",margin:"0"}}>{address.town}</p>
                    <p style={{padding:"0",margin:"0"}}>{address.postalCode}</p>
                </address>
            </div>
            <div  style={{fontSize:"12px"}}>
                <p style={{padding:"0",margin:"0"}}><FaEnvelope/>&nbsp;{contacts.email}</p>
                <p style={{padding:"0",margin:"0"}}><FaPhone/>&nbsp;{contacts.mobileNo}</p>
                {contacts.home && <p style={{padding:"0",margin:"0"}}><FaHome/>&nbsp;{contacts.home}</p>}
            </div>
           
        </div>
    );
}