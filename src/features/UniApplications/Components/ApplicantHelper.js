import {FaCheck, FaTimes, FaUser, FaWhatsapp } from "react-icons/fa";
import "./applicant-helper.css";
import { useState } from "react";
const ApplicantHelper = ({hideHelper})=>{

    const [userInputs,setUserInputs] = useState({
        name:"",
        mobile_no:"",
        description:"Help me apply!!",
    })

    const handleInputs = (e)=>{
        setUserInputs({...userInputs,[e.target.name]:e.target.value})
    }

    const handleForm = async (e)=>{
           e.preventDefault();

           const response = await fetch("http://localhost:5000/api/applications/help",
            {
                method:"POST",
                mode:"cors",
                cache:"no-cache",
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                body:JSON.stringify(userInputs)
            });

            if(response.status >= 200 && response.status < 300)
            { 
                hideHelper();
            }

    }
    return(
        <div className ="applicant-helper">
            <form>
                <h1 className="text-center">Applicant assistance</h1>
                <label>Name&nbsp;<FaUser/></label>
                <div className="p-1">
                    <input onChange={handleInputs} name="name" placeholder="Name" value={userInputs.name} className="form-control"/>
                </div>
                <label>Mobile Number&nbsp;<FaWhatsapp/></label>
                <div className="p-1">
                    <input name="mobile_no" placeholder="Mobile Numbers{Whatsapp/calls)" value={userInputs.mobile_number} className="form-control"/>
                </div>
                <div className="p-1">
                    <label>How can we help you?</label>
                    <textarea onChange={handleInputs} name="description" value={userInputs.description} className="form-control"/>
                </div>
                <div className="text-center">
                    <button onClick={()=>{hideHelper()}} className="btn text-danger bg-white"><FaTimes/> Cancel</button>&nbsp;
                    <button onClick={handleForm} className="btn text-primary bg-white"><FaCheck/> Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ApplicantHelper;