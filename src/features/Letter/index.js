import { useState,useEffect } from "react";
import InputTemplate from "./Component/InputTemplate";
import OutputTemplate from "./Component/OutputTemplate";
import { yyyymmddDate } from "../../utils/formatDate";

export default function Letter()
{
    const defaultDetails = {
        address1:"",
        date:yyyymmddDate(),
        address2:"",
        subject:"",
        intro:"",
        body:"",
        ending:"",
        names:"",
        person:""
    };
    const[details,setDetails] = useState({});

    useEffect(()=>{
        let storedDetails = localStorage.getItem("letterDetails");

        if(!storedDetails) return setDetails(defaultDetails);

        const _details =JSON.parse(storedDetails);
        const _signature = localStorage.getItem("signature-image");

        if(_details)
        {
            setDetails(_details);
            
        }

        if(_signature)
        {
            setSignature(_signature);
        }

    },[]);

    const[signature,setSignature] = useState("");

    const saveChanges=()=>{
        localStorage.setItem("letterDetails",JSON.stringify(details));
    }

    const handleInput=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }

    const handleSignatureInput=(_signature)=>{
        setSignature(_signature);
    }

    const clearLetter = ()=>{
        localStorage.clear("letterDetails");
        setDetails(
            {
                ...defaultDetails
            }
        )
    }

    return(
        <div>
            <h1 className="text-center text-theme" style={{fontSize:"18px"}}>Create your formal letter</h1>
            <InputTemplate saveChanges={saveChanges}   handleInput={handleInput} handleSignatureInput={handleSignatureInput}  details={details}/>
            <OutputTemplate details={details} signature={signature} clearLetter={clearLetter}/>
        </div>
    )
}