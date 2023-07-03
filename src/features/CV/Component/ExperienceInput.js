import InputsContainer from "./InputsContainer";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
export default function ExperienceInputs()
{
    const[job,setJob] = useState({
        companyName:"",
        position:"",
        from:"",
        top:""
    })
    const[jobs,setJobs] = useState([]);
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
                <input type="text" value={job.companyName} className="form-control"/>
                <label className="form-label">Position</label>
                <input type="text" value={job.position} className="form-control"/>
                <label className="form-label">From</label>
                <input type="date" value={job.from} className="form-control"/>
                <label className="form-label">To</label>
                <input type="date" value={job.to} className="form-control"/>
            </div>
            <div className="text-center p-2">
                <button className="btn btn-outline-primary bg-white"><FaPlus/>&nbsp;Add</button>
            </div>
        </InputsContainer>
    )
}