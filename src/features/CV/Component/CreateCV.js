import ReactToPrint from "react-to-print";
import { useRef } from "react";
import OutputTemplate from "./OutputTemplate";
import { FaPrint } from "react-icons/fa";
import { useState } from "react";
export default function CreateCV({cvOwnerDetails})
{
    let cvTemplateRef = useRef();
    const[styles,setStyles] = useState(
        {
            boxSizing:"border-box",
            backgroundColor:"#015289",
            color:"Black",
            margin:"auto",
            width:"210mm",
            height:"265mm",
            marginTop:"5mm",
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
                    trigger={()=><button className="btn btn-primary"><FaPrint/>&nbsp;Print Your CV</button>}
                    content={()=>cvTemplateRef}>
                </ReactToPrint>
                <div className="text-theme p-2">
                    Theme Color:&nbsp;  
                    <input name="backgroundColor" type="color" value={styles.backgroundColor} onChange={handleInput}/>
                </div>
            </div>
            <div style={{overflowX:"scroll"}}>
                <div ref={(el)=>(cvTemplateRef = el)}> 
                    <OutputTemplate cvOwnerDetails={cvOwnerDetails} styles={styles}/>
                </div>
            </div>
        </div>
    )
}