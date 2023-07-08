import ReactToPrint from "react-to-print";
import { useRef } from "react";
import Finaloutput from "./OutputTemplate";
import { FaPrint } from "react-icons/fa";
export default function CreateCV({cvOwnerDetails})
{
    let cvTemplateRef = useRef();
    
    return(
        <div>
            <div className="p-2 text-center">
                <ReactToPrint 
                    trigger={()=><button className="btn btn-primary"><FaPrint/>&nbsp;Print Your CV</button>}
                    content={()=>cvTemplateRef}>
                </ReactToPrint>
            </div>
            <div ref={(el)=>(cvTemplateRef = el)}> 
                <Finaloutput cvOwnerDetails={cvOwnerDetails}/>
            </div>
        </div>
    )
}