import { useState } from "react";
import { useRef } from "react";
import { FaPrint} from "react-icons/fa";
import ReactToPrint from "react-to-print";

export default function OutputTemplate({details,signature})
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
    const handleInput = (e)=>{

        setStyles({...styles,[e.target.name]:e.target.value});

    }
    return(
        <div>
            <div className="p-2 text-center">
                <ReactToPrint 
                        trigger={()=><button className="btn btn-primary"><FaPrint/>&nbsp;Print Your Letter</button>}
                        content={()=>letterTemplateRef}>
                </ReactToPrint>
                <div className="text-theme p-2">
                    Theme Color:&nbsp;  
                    <input name="backgroundColor" type="color" value={styles.backgroundColor} onChange={handleInput}/>
                </div>
            </div> 
            <div style={{overflowX:"scroll"}}>
                <div ref={(el)=>(letterTemplateRef = el)} style={styles}>
                    <div style={{backgroundColor:"white",height:"100%",padding:"5mm"}}>
                        <div style={{whiteSpace:"pre-wrap",paddingLeft:"105mm"}}>
                            {details.address1}
                        </div>
                        <br/>
                        <div style={{paddingLeft:"105mm"}}>
                            {details.date}
                        </div>
                        <br/>
                        <div style={{whiteSpace:"pre-wrap"}}>
                            {details.address2}
                        </div>
                        <br/>
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