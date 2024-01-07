import { useState } from "react";
import College from "./Component/College";

const CollegeApp = ()=>{
    const[colleges,setColleges] = useState(
        [
            {
                name:"Gert Sibande College",
                homeLink:"https://gscollege.edu.za/registrations",
                applicationLink:"https://gscollege.edu.za/registrations",
                openingDate:"",
                closingDate:""
            }

        ]);
    return(
        <div className="container-fluid">
            <h1 className="text-center text-theme">South African Colleges</h1>
            <div className="row">
            {
                colleges.map((college)=>(
                    <div key={college.name} className="col-12 col-md-6 col-lg-4">
                        <College college={college}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default CollegeApp;