import InputsContainer from "./InputsContainer";
import { useContext, useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import {v4 as uuidv4} from "uuid";
import { CVOwnerContext } from "..";

export default function ExperienceInput({saveExperiences,removeExperience})
{
    //RETRIEVE EXPERIENCES FROM SAVED EXPERIENCES
    const{experiences} = useContext(CVOwnerContext);

    const[experience,setExperience] = useState({
        id:"",
        companyName:"",
        position:"",
        startDate:"",
        endDate:"",
        reason:"Termination of Contract"
    });


    const inputHandler = (e)=>{
        setExperience({
            ...experience,
            [e.target.name]:e.target.value,
            id:experience.id===""?uuidv4():experience.id
        });
    }

    const clearInputs=()=>{
        setExperience({
            ...experience,
            id:"",
            companyName:"",
            position:"",
            startDate:"",
            endDate:""
        });
    }

    const saveChanges = ()=>{
        if(experiences.some(e=>e.id === experience.id)) return;

        let inputsValid = experience.companyName &&
                          experience.position &&
                          experience.startDate &&
                          experience.endDate;

        if(!inputsValid) return;

        saveExperiences(experience);
        clearInputs();
    }

    return (
        <InputsContainer headerText="Work Experience" savefunc={saveChanges}>
            <div>
                {
                    experiences.map((j)=>
                        <div key={j.id} className="row mt-2">
                            <div className="col-12 text-end"><FaTrash onClick={()=>{removeExperience(j.id)}} className="text-danger"/></div>
                            <div className="col-6">Company Name</div>
                            <div className="col-6">{j.companyName}</div>
                            <div className="col-6">Position</div>
                            <div className="col-6">{j.position}</div>
                            <div className="col-6">Start Date</div>
                            <div className="col-6">{j.startDate}</div>
                            <div className="col-6">End Date</div>
                            <div className="col-6">{j.endDate}</div>
                            <div className="col-6">Reason of Leaving</div>
                            <div className="col-6">{j.reason}</div>
                        </div>
                    )
                }
            </div>
            <hr/>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <label className="form-label">Company Name</label>
                    <input name="companyName" type="text" value={experience.companyName} className="form-control" onChange={inputHandler}/>
                </div>
                <div className="col-12 col-lg-4">
                    <label className="form-label">Position</label>
                    <input name="position" type="text" value={experience.position} className="form-control" onChange={inputHandler}/>
                </div>
                <div className="col-12 col-lg-4">
                    <label className="form-label">Start Date</label>
                    <input name="startDate" type="date" value={experience.startDate} className="form-control" onChange={inputHandler}/>
                </div>
                <div className="col-12 col-lg-4">
                    <label className="form-label">End Date</label>
                    <input name="endDate" type="date" value={experience.endDate} className="form-control" onChange={inputHandler}/>
                </div>
                <div className="col-12 col-lg-4">
                    <label className="form-label">Reason of Leaving</label>
                    <input name="reason" type="text" value={experience.reason} className="form-control" onChange={inputHandler}/>
                </div>
            </div>
        </InputsContainer>
    )
}