import InputsContainer from "./InputsContainer";
import { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import {v4 as uuidv4} from "uuid";

export default function ExperienceInput({experiences:_jobs,saveExperiences})
{
    const[job,setJob] = useState({
        id:"",
        companyName:"",
        position:"",
        startDate:"2020-05-23",
        endDate:"2023-07-24",
        reason:"Termination of Contract"
    });

    const[jobs,setJobs] = useState([]);

    useEffect(()=>{
        const addJobs=()=>{
            setJobs([..._jobs]);
        }
        addJobs();
    },[_jobs]);

    const inputHandler = (e)=>{
        setJob({
            ...job,
            [e.target.name]:e.target.value,
            id:job.id===""?uuidv4():job.id
        });
    }

    const appendToJobs=()=>{
        if(!(job.id && job.companyName && job.position)) return;

        if(jobs.some(r=>r.id === job.id)) return;
       
        setJobs([...jobs,job]);

        setJob({
            ...job,
            id:"",
            companyName:"",
            position:"",
            startDate:"2020-05-23",
            endDate:"2023-07-24"
        });
    }

    const removeJob=(id)=>{
        setJobs(jobs.filter(j=>j.id === id));
    }

    return (
        <InputsContainer headerText="Work Experience" savefunc={()=>{saveExperiences(jobs)}}>
            <div>
                {
                    jobs.map((j)=>
                        <div key={j.id} className="row mt-2">
                            <div className="col-12 text-end"><FaTrash onClick={()=>{removeJob(j.id)}} className="text-danger"/></div>
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
            <div className="mt-2">
                <label className="form-label">Company Name</label>
                <input name="companyName" type="text" value={job.companyName} className="form-control" onChange={inputHandler}/>
                <label className="form-label">Position</label>
                <input name="position" type="text" value={job.position} className="form-control" onChange={inputHandler}/>
                <label className="form-label">StartDate</label>
                <input name="startDate" type="date" value={job.startDate} className="form-control" onChange={inputHandler}/>
                <label className="form-label">End Date</label>
                <input name="endDate" type="date" value={job.endDate} className="form-control" onChange={inputHandler}/>
                <label className="form-label">Reason of Leaving</label>
                <input name="reason" type="text" value={job.reason} className="form-control" onChange={inputHandler}/>
            </div>
            <div className="p-2 text-center">
                <p className="text-danger">
                    Add your experience to the list before saving.
                </p>
                <button className="btn btn-outline-primary" onClick={appendToJobs}><FaPlus/> Add To List</button>
            </div>
        </InputsContainer>
    )
}