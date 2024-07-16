import ReactToPrint from "react-to-print";
import { useRef } from "react";
import OutputTemplate from "./OutputTemplate";
import { FaPrint } from "react-icons/fa";
import { useState,createContext } from "react";
import SavingInfoBox from "../../../components/SavingInfoBox";

export const ThemeContext = createContext();

export default function CreateCV({cvOwnerDetails,saveTheme})
{
    let cvTemplateRef = useRef();
    const styles =
        {
            boxSizing:"border-box",
            backgroundColor:"white",
            color:"black",
            width:"210mm",
            minHeight:"290mm",
            padding:"5mm",
            fontSize:"11pt",
            
        };


    return(
        <ThemeContext.Provider value={styles.backgroundColor}>
            <div>
                <div className="p-2 text-center">
                   
                    <div>
                        <SavingInfoBox/>
                    </div>
                    <ReactToPrint 
                        trigger={()=><button className="btn btn-primary"><FaPrint/>&nbsp;Save My CV</button>}
                        content={()=>cvTemplateRef}>
                    </ReactToPrint>
                </div>
                <div style={{overflowX:"scroll"}}>
                    <div ref={(el)=>(cvTemplateRef = el)}> 
                        <OutputTemplate cvOwnerDetails={cvOwnerDetails} styles={styles}/>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}