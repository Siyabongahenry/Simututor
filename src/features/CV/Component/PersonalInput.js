import { useState } from "react";
import InputsContainer from "./InputsContainer";
import {FaUserCircle } from "react-icons/fa";
export default function PersonalInput({person,savePersonalDetails:saveChanges})
{
    const[personalInfo,setPersonalInfo] = useState({
      firstName:"",
      middleName:"",
      lastName:"",
      identity:"",
      dateOfBirth:"",
      citizenship:"South African",
      taxNumber:"",
      contacts:{
          email:"",
          cellNo:"",
          home:""
      },
      address:{
           suburb:"",
           town:"",
           postalCode:""
      },
      healthStatus:"Excellent",
      criminalRecord:"None",
      maritalStatus:"Single",
      driversLicense:"",
      computerLiteracy:""
    });
    const handleInput=(e)=>{
      setPersonalInfo({...personalInfo,[e.target.name]:e.target.value});
    }

    const handleContactInput =(e)=>{
       setPersonalInfo({...personalInfo,contacts:{...personalInfo.contacts, [e.target.name]:e.target.value}});
    }

    const handleAddressInput =(e)=>{
      setPersonalInfo({...personalInfo,address:{...personalInfo.address, [e.target.name]:e.target.value}});
    }
    return(
        <InputsContainer icon={<FaUserCircle/>} headerText="Personal Information" savefunc={()=>{saveChanges(personalInfo)}}>
            <div>
               <label className="form-label">First Name</label>
               <input name="firstName" value={personalInfo.firstName} onChange={handleInput} className="form-control" placeholder="Example: Siyabonga"/>
            </div>
            <div>
               <label className="form-label">Middle Name</label>
               <input name="middleName" value={personalInfo.middleName} onChange={handleInput}  className="form-control" placeholder="Example: Henry"/>
            </div>
            <div>
               <label className="form-label">Last Name</label>
               <input name="lastName" value={personalInfo.lastName} onChange={handleInput}  className="form-control" placeholder="Example: Vilakazi"/>
            </div>
            <div>
               <label className="form-label">Identity</label>
               <input name="identity"  value={personalInfo.identity} onChange={handleInput}  className="form-control" placeholder="ID Number"/>
            </div>
            <div>
               <label className="form-label">Tax Number</label>
               <input name="taxNumber" value={personalInfo.taxNumber} onChange={handleInput}  className="form-control" placeholder="SARS Tax Number"/>
            </div>
            <div>
               <label className="form-label">Marital Status</label>
               <input name="maritalStatus"  value={personalInfo.maritalStatus} onChange={handleInput}   className="form-control" placeholder="Example: Sigle"/>
            </div>
            <div>
               <label className="form-label">Criminal Record</label>
               <input name="criminalRecord"  value={personalInfo.criminalRecord} onChange={handleInput}   className="form-control" placeholder="Example: None"/>
            </div>

        </InputsContainer>
    )
}