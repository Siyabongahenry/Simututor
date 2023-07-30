import { useState } from "react";
import InputsContainer from "./InputsContainer";
import { FaSchool } from "react-icons/fa";
export default function SecEduInput({secEdu:_secEdu,saveSecEdu})
{
    const[secEdu,setSecEdu] = useState({
        schoolName:"",
        highestGrade:"",
        year:"",
        
    });

    const handleInput=(e)=>{
        setSecEdu({...secEdu,[e.target.name]:e.target.value});
    }
    
    return(
        <InputsContainer icon={<FaSchool/>} headerText="High School Information" savefunc={()=>{saveSecEdu(secEdu)}}>
            <div className="mt-2">
                <label className="form-label">School Name</label>
                <input name="schoolName" value={secEdu.name} onChange={handleInput} className="form-control" placeholder="example: Bethal Secondary School"/>
            </div>
            <div  className="mt-2">
                <label className="form-label">Year of Completion</label>
                <input  name="year" type="date"  value={secEdu.year} onChange={handleInput} className="form-control"/>
            </div>
            <div  className="mt-2">
                <label className="form-label">Highest Grade:</label>&nbsp;
                <select name="highestGrade" value={secEdu.grade}  onChange={handleInput} className="form-select text-center">
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