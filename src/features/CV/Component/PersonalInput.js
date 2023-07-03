import { useState } from "react";
import InputsContainer from "./InputsContainer";
import {FaUserCircle } from "react-icons/fa";
export default function PersonalInput()
{
    const[personalInfo,setPersonalInfo] = useState({
        firstName:"",
        middleName:"",
        lastName:"",
        email:"",
        cellNo:"",
        address:"",
        driversLicence:"",
        computerLiteracy:"",
        healthStates:"Excellent",
        criminalRecord:"None",
    })
    return(
        <InputsContainer icon={<FaUserCircle/>} headerText="Personal Information">
            <div>
               <label className="form-label">First Name</label>
               <input name="firstName" className="form-control" placeholder="Example: Siyabonga"/>
            </div>
            <div>
               <label className="form-label">Middle Name</label>
               <input name="middleName" className="form-control" placeholder="Example: Henry"/>
            </div>
            <div>
               <label className="form-label">Last Name</label>
               <input name="middleName" className="form-control" placeholder="Example: Vilakazi"/>
            </div>
            <div>
               <label className="form-label">Identity</label>
               <input name="middleName" className="form-control" placeholder="ID Number"/>
            </div>
            <div>
               <label className="form-label">Tax Number</label>
               <input name="middleName" className="form-control" placeholder="SARS Tax Number"/>
            </div>
            <div>
               <label className="form-label">Mobile No</label>
               <input name="middleName" className="form-control" placeholder="Example: 072 588 2344"/>
            </div>
            <div>
               <label className="form-label">Email</label>
               <input name="middleName" className="form-control" placeholder="Example: siyabonga@gmail.com"/>
            </div>
            <div>
               <label className="form-label">Address</label>
               <textarea name="middleName" className="form-control" placeholder="Example: 2321 Ext 9,Mzinoni Township, Bethal, 2310"/>
            </div>
            <div>
               <label className="form-label">Marital Status</label>
               <select value="Single" className="form-control">
                    <option>Single</option>
                    <option>Married</option>
               </select>
            </div>
            <div>
               <label className="form-label">Criminal Record</label>
               <input name="middleName" className="form-control" placeholder="Example: None"/>
            </div>
        </InputsContainer>
    )
}