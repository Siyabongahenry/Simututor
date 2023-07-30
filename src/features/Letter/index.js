import { useState,useEffect } from "react";
import InputTemplate from "./Component/InputTemplate";
import OutputTemplate from "./Component/OutputTemplate";
export default function Letter()
{
    const[details,setDetails] = useState({
        address1:"",
        date:new Date().toDateString(),
        address2:"",
        subject:"",
        intro:"",
        body:"",
        ending:"",
        names:"",
        person:""
    });

    useEffect(()=>{
        const _details =JSON.parse(localStorage.getItem("letterDetails"));
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

    return(
        <div>
            <h1 className="text-center text-theme">Create your formal letter</h1>
            <InputTemplate saveChanges={saveChanges}   handleInput={handleInput} handleSignatureInput={handleSignatureInput}  details={details}/>
            <OutputTemplate details={details} signature={signature}/>
        </div>
    )
}