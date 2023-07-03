import { useState } from "react";
import InputsContainer from "./InputsContainer";
import { FaSchool } from "react-icons/fa";
export default function HighSchoolInput()
{
    const[school,setSchool] = useState({
        name:"",
        year:"",
        grade:""
    })
    const[schools,setSchools] =useState([]);

    return(
        <InputsContainer icon={<FaSchool/>} headerText="High School Information">
            <div className="mt-2">
                <label className="form-label">School Name</label>
                <input name="name" value={school.name} className="form-control" placeholder="example: Bethal Secondary School"/>
            </div>
            <div  className="mt-2">
                <label className="form-label">Year of Completion</label>
                <input type="date" name="name" value={school.name} className="form-control"/>
            </div>
            <div  className="mt-2">
                <label className="form-label">Highest Grade:</label>&nbsp;
                <select value={12}>
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12].map(
                            grade=><option key={grade} value={grade}>{grade}</option>
                        )
                    }
                </select>
            </div>
        </InputsContainer>
    );
}