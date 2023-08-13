import { useState } from "react";
import { useRef } from "react";
import { FaPrint, FaEraser, FaExclamationCircle} from "react-icons/fa";
import ReactToPrint from "react-to-print";
import WarningBox from "../../../components/WarningBox";
import SavingInfoBox from "../../../components/SavingInfoBox";
export default function OutputTemplate({details,signature,clearLetter})
{
    let letterTemplateRef = useRef();

    const[styles,setStyles] = useState(
        {
            boxSizing:"border-box",
            backgroundColor:"white",
            color:"black",
            margin:"auto",
            width:"210mm",
            height:"270mm",
            lineHeight:"1.5",
            padding:"5mm",
            fontSize:"11pt"
        }
    );

    const[clearWarning,setClearWarning] = useState(false);

    const handleInput = (e)=>{

        setStyles({...styles,[e.target.name]:e.target.value});

    }
    return(
        <div>
            <div className="p-2 text-center">
                
                <div>
                    <SavingInfoBox/>
                </div>

                <ReactToPrint 
                        trigger={()=><button className="btn btn-primary"><FaPrint/>&nbsp;Save My Letter</button>}
                        content={()=>letterTemplateRef}>
                </ReactToPrint>
                <div className="text-theme p-2">
                    Theme Color:&nbsp;  
                    <input name="backgroundColor" type="color" value={styles.backgroundColor} onChange={handleInput}/>
                </div>
                <div className="text-end">
                    {
                        clearWarning &&
                        <WarningBox confirmFunc={()=>{clearLetter();setClearWarning(false)}} cancelFunc={()=>{setClearWarning(false)}}>
                            <FaExclamationCircle/>&nbsp;You're about to clear and lose all information for the current letter, 
                            <br/>Please confirm to perform this action.
                        </WarningBox>
                    }
                    <button className="btn btn-outline-danger" onClick={()=>{setClearWarning(true)}}><FaEraser/>&nbsp;Clear Letter</button>
                </div>
            </div> 
            <div style={{overflowX:"scroll"}}>
                <div ref={(el)=>(letterTemplateRef = el)} style={styles}>
                    <div style={{backgroundColor:"white",height:"100%",padding:"5mm"}}>
                       {
                           details.address1 &&
                            <>
                                <div style={{whiteSpace:"pre-wrap",paddingLeft:"105mm"}}>
                                    {details.address1}
                                </div>
                                <br/>
                            </>
                       }
                        <div style={{paddingLeft:"105mm"}}>
                            {details.date}
                        </div>
                        <br/>
                        {
                            details.address2 &&
                            <>
                                <div style={{whiteSpace:"pre-wrap"}}>
                                    {details.address2}
                                </div>
                                <br/>
                            </>
                        }
                        <div>
                            <b>{details.subject}</b>
                        </div>
                        <br/>
                        <div>
                            Dear {details.person}
                        </div>
                        <br/>
                        <div  style={{whiteSpace:"pre-wrap"}}>
                            {details.intro}
                        </div>
                        <br/>
                        <div  style={{whiteSpace:"pre-wrap"}}>
                            {details.body}
                        </div>
                        <div style={{whiteSpace:"pre-wrap"}}>
                            {details.ending}
                        </div>
                        <br/>
                        <div>
                            Yours Sincely
                        </div>

                        <div>
                            {details.names}
                        </div>
                        {
                            signature &&
                            <div>
                                <img src={signature} width={60} alt="Signature"/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}