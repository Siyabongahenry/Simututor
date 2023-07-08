import InputsContainer from "./InputsContainer";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import {v4 as uuidv4} from "uuid";

export default function ExperienceInput({experiences:_jobs,saveExperiences})
{
    const[job,setJob] = useState({
        companyName:"",
        position:"",
        startDate:"",
        endDate:""
    });

    const[jobs,setJobs] = useState([]);

    const inputHandler = (e)=>{
        setJob({
            ...job,
            [e.target.name]:e.target.value,
            id:uuidv4()
        })
    }

    const appendToJobs=()=>{
        if(jobs.some(j=>j.id===job.id) || job.companyName==="") return;
        setJobs([...jobs,job]);
    }

    const removeJob=(id)=>{
        setJobs(jobs.filter(j=>j.id === id));
    }

    return (
        <InputsContainer headerText="Work Experience" savefunc={saveExperiences}>
            <div>
                {
                    jobs.map((j)=>
                        <div key={j.id} className="row border mt-2">
                            <div className="col-12"><FaTrash onClick={()=>{removeJob(j.id)}} className="text-danger"/></div>
                            <div className="col-6">Company Name</div>
                            <div className="col-6">{j.companyName}</div>
                            <div className="col-6">Position</div>
                            <div className="col-6">{j.position}</div>
                            <div className="col-6">Start Date</div>
                            <div className="col-6">{j.startDate}</div>
                            <div className="col-6">End Date</div>
                            <div className="col-6">{j.endDate}</div>
                        </div>
                    )
                }
            </div>
            <div>
                <label className="form-label">Company Name</label>
                <input name="companyName" type="text" value={job.companyName} className="form-control" onChange={inputHandler}/>
                <label className="form-label">Position</label>
                <input name="position" type="text" value={job.position} className="form-control" onChange={inputHandler}/>
                <label className="form-label">StartDate</label>
                <input name="startDate" type="date" value={job.startDate} className="form-control" onChange={inputHandler}/>
                <label className="form-label">End Date</label>
                <input name="endDate" type="date" value={job.endDate} className="form-control" onChange={inputHandler}/>
            </div>
            <div className="p-2 text-center">
                <button className="btn btn-outline-primary" onClick={appendToJobs}><FaPlus/> add</button>
            </div>
        </InputsContainer>
    )
}