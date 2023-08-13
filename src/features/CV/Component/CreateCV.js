import ReactToPrint from "react-to-print";
import { useEffect, useRef } from "react";
import OutputTemplate from "./OutputTemplate";
import { FaPrint } from "react-icons/fa";
import { useState,createContext } from "react";
import SavingInfoBox from "../../../components/SavingInfoBox";

export const ThemeContext = createContext();

export default function CreateCV({cvOwnerDetails,saveTheme})
{
    let cvTemplateRef = useRef();
    const[styles,setStyles] = useState(
        {
            boxSizing:"border-box",
            backgroundColor:"#015289",
            color:"Black",
            margin:"auto",
            width:"210mm",
            Height:"265mm",
            marginTop:"5mm",
            padding:"5mm",
            fontSize:"11pt"
            
        }
    );

    let onProdStylesUpdate = {
        overflowY:"hidden",
    }

    useEffect(()=>{

        if(cvOwnerDetails.theme)
        {
            setStyles({...cvOwnerDetails.theme,...onProdStylesUpdate});    
        }
        else
        {
            setStyles({...cvOwnerDetails.defaultTheme,...onProdStylesUpdate});
        }
    },[cvOwnerDetails.theme]);

    const handleInput = (e)=>{
        
        setStyles({...styles,[e.target.name]:e.target.value});

        saveTheme({...styles,[e.target.name]:e.target.value});

    }
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
        </ThemeContext.Provider>
    )
}