import { FaEnvelope,FaPhone} from "react-icons/fa";
export default function CVHeader({names,contacts={},address={}})
{
    const headerStyles={
        width:"60%",
        float:"left",
        textAlign:"Center",
    }
    const addressStyles={
        border:"1px solid balck",
        padding:"0.5em",
        float:"left",
        width:"40%"
    }
    return(
        <div style={{overflow:"auto"}}>
            <div style={headerStyles}> 
                <h1>Curriculum Vitae <br/>of<br/>{names}</h1>
            </div>
            <div style={addressStyles}>
                <address>
                    <p style={{padding:"0",margin:"0"}}>{address.suburb}</p>
                    <p style={{padding:"0",margin:"0"}}>{address.town}</p>
                    <p style={{padding:"0",margin:"0"}}>{address.postalCode}</p>
                </address>
                <div>
                    <p style={{padding:"0",margin:"0"}}><FaEnvelope/>&nbsp;{contacts.email}</p>
                    <p style={{padding:"0",margin:"0"}}><FaPhone/>&nbsp;{contacts.cellNo}</p>
                </div>
            </div>
        </div>
    );
}