import { useContext, useEffect, useState } from "react";
import InputsContainer from "./InputsContainer";
import {FaUserCircle } from "react-icons/fa";
import { CVOwnerContext } from "..";

export default function PersonalInfoInput({savePersonalInfo})
{
   //RETRIEVE PERSONAL INFO FROM SAVED INFROMATION
   const{personalInfo:_personalInfo} = useContext(CVOwnerContext);

    const[personalInfo,setPersonalInfo] = useState({
      firstName:"",
      middleName:"",
      lastName:"",
      identity:"",
      dateOfBirth:"",
      gender:"",
      age:"",
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
      driversLicence:"",
      computerLiteracy:""
    });

    //SET PESORNAL INFORMATION USING SAVED INFO
    useEffect(()=>{
      const addPersonalInfo=()=>{
         if(!_personalInfo) return;
         setPersonalInfo({..._personalInfo});

      }

      addPersonalInfo();

    },[_personalInfo]);

    const autoSetDateOfBirth=(id)=>{
          if(id.length ===10)
          {
            let yearOfBirth = id.substr(0,2);
                yearOfBirth = yearOfBirth > 58 && yearOfBirth <= 99?
                "19"+yearOfBirth:"20"+yearOfBirth;
            let monthOfBirth = id.substr(2,2);
            let dayOfBirth = id.substr(4,2);

            let dateOfBirth = yearOfBirth +"-"+monthOfBirth+"-"+dayOfBirth;

            let gender =parseInt(id.substr(6,4))>4999?"Male":"Female";

            let age =new Date().getFullYear()-parseInt(yearOfBirth);

            setPersonalInfo(prev=>({...prev,dateOfBirth,gender,age}));
          }

    }

    const handleInput=(e)=>{
      setPersonalInfo(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    return(
        <InputsContainer icon={<FaUserCircle/>} headerText="Personal Information" savefunc={()=>{savePersonalInfo(personalInfo)}}>
            <div className="row">
               <div className="col-12 col-lg-4">
                  <label className="form-label">First Name</label>
                  <input name="firstName" value={personalInfo.firstName} onChange={handleInput} className="form-control" placeholder="Example: Siyabonga"/>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Middle Name</label>
                  <input name="middleName" value={personalInfo.middleName} onChange={handleInput}  className="form-control" placeholder="Example: Henry"/>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Last Name</label>
                  <input name="lastName" value={personalInfo.lastName} onChange={handleInput}  className="form-control" placeholder="Example: Vilakazi"/>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Identity</label>
                  <input name="identity"  value={personalInfo.identity} onChange={(e)=>{handleInput(e);autoSetDateOfBirth(e.target.value);}}  className="form-control" placeholder="ID Number"/>
                  <div>
                     Age: {personalInfo.age}, Gender: {personalInfo.gender}
                  </div>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Date of Birth</label>
                  <input name="dateOfBirth" type="date"  value={personalInfo.dateOfBirth} onChange={handleInput}  className="form-control"/>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Tax Number</label>
                  <input name="taxNumber" value={personalInfo.taxNumber} onChange={handleInput}  className="form-control" placeholder="SARS Tax Number"/>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Drivers Licence</label>
                  <input name="driversLicence" value={personalInfo.driversLicence} onChange={handleInput}  className="form-control" placeholder="e.g C1"/>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Computer Literacy</label>
                  <input name="computerLiteracy" value={personalInfo.computerLiteracy} onChange={handleInput}  className="form-control" placeholder="e.g MS Word and MS Excel"/>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Health Status</label>
                  <input name="healthStatus"  value={personalInfo.healthStatus} onChange={handleInput}   className="form-control" placeholder="Example: Excellent"/>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Marital Status</label>
                  <input name="maritalStatus"  value={personalInfo.maritalStatus} onChange={handleInput}   className="form-control" placeholder="Example: Sigle"/>
               </div>
               <div className="col-12 col-lg-4">
                  <label className="form-label">Criminal Record</label>
                  <input name="criminalRecord"  value={personalInfo.criminalRecord} onChange={handleInput}   className="form-control" placeholder="Example: None"/>
               </div>
            </div>
        </InputsContainer>
    )
}