import { useContext, useEffect, useState } from "react";
import InputsContainer from "./InputsContainer";
import { FaSchool } from "react-icons/fa";
import { CVOwnerContext } from "..";
export default function SecEduInput({saveSecEdu})
{

    //RETRIEVE SAVED SECONDARY EDU FROM SAVED SEC EDU
    const{secEdu:_secEdu} = useContext(CVOwnerContext);

    const[secEdu,setSecEdu] = useState({
        schoolName:"",
        highestGrade:"",
        subjects:"",
        year:"",  
    });

    useEffect(()=>{
        if(!_secEdu) return;
        setSecEdu({..._secEdu});

    },[_secEdu]);

    const handleInput=(e)=>{
        setSecEdu({...secEdu,[e.target.name]:e.target.value});
    }
    
    return(
        <InputsContainer icon={<FaSchool/>} headerText="High School Information" savefunc={()=>{saveSecEdu(secEdu)}}>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <label className="form-label">School Name</label>
                    <input name="schoolName" value={secEdu.schoolName} onChange={handleInput} className="form-control" placeholder="example: Bethal Secondary School"/>
                </div>
                <div  className="col-12 col-lg-4">
                    <label className="form-label">Year of Completion</label>
                    <input  name="year" type="date"  value={secEdu.year} onChange={handleInput} className="form-control"/>
                </div>
                <div  className="col-12 col-lg-4">
                    <label className="form-label">Highest Grade:</label>&nbsp;
                    <select name="highestGrade" value={secEdu.highestGrade}  onChange={handleInput} className="form-select text-center">
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12].map(
                                grade=><option key={grade} value={grade}>{grade}</option>
                            )
                        }
                    </select>
                </div>
                <div  className="col-12">
                    <label className="form-label fw-bold pt-2">Subjects</label>
                    <input  name="subjects" type="text"  value={secEdu.subjects} onChange={handleInput}
                    className="form-control" placeholder="Mathematics, English HL, Physical Sciences, Geography,.." />
                </div>
                
            </div>
        </InputsContainer>
    );
}