import InputsContainer from "./InputsContainer";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {v4 as uuidv4} from "uuid";

export default function ExperienceInputs({experiences:_jobs,saveExperiences})
{
    const[job,setJob] = useState({
        companyName:"",
        position:"",
        from:"",
        top:""
    })
    const[jobs,setJobs] = useState([]);

    const inputHandler = (e)=>{
        setJob({
            ...job,
            [e.target.name]:e.target.value,
            id:uuidv4()
        })
    }

    const appendToJobs=()=>{
        setJobs([...jobs,job]);
    }

    return (
        <InputsContainer headerText="Work Experience">
            <div>
                {
                    jobs.map((j,index)=>
                        <div key={index} className="row border mt-2">
                            <div className="col-6">Company Name</div>
                            <div className="col-6">{j.companyName}</div>
                            <div className="col-6">Position</div>
                            <div className="col-6">{j.position}</div>
                            <div className="col-6">From</div>
                            <div className="col-6">{j.from}</div>
                            <div className="col-6">To</div>
                            <div className="col-6">{j.to}</div>
                        </div>
                    )
                }
            </div>
            <div>
                <label className="form-label">Company Name</label>
                <input type="text" value={job.companyName} className="form-control" onClick={inputHandler}/>
                <label className="form-label">Position</label>
                <input type="text" value={job.position} className="form-control" onClick={inputHandler}/>
                <label className="form-label">From</label>
                <input type="date" value={job.from} className="form-control" onClick={inputHandler}/>
                <label className="form-label">To</label>
                <input type="date" value={job.to} className="form-control" onClick={inputHandler}/>
            </div>
            <div className="p-2 text-center">
                <button className="btn btn-outline-primary" onClick={saveExperiences}><FaPlus/> add</button>
            </div>
        </InputsContainer>
    )
}