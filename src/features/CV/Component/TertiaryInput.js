import { FaUniversity, FaTrash } from "react-icons/fa"
import InputsContainer from "./InputsContainer";
import {useContext, useState} from "react";
import {v4 as uuidv4} from "uuid";
import { CVOwnerContext } from "..";
export default function TertiaryInput({saveTertiaryEdu,removeTertiaryEdu})
{

    const{tertiaryEdus} = useContext(CVOwnerContext);

    const[tertiaryEdu,setTertiaryEdu] = useState({
        instituteName:"",
        course:"",
        startDate:"",
        endDate:""
    });
    
    const handleInput = (e)=>{
        setTertiaryEdu({...tertiaryEdu,[e.target.name]:e.target.value,id:uuidv4()});
    }

    const saveChanges = ()=>{

        let inputsValid = tertiaryEdu.instituteName && tertiaryEdu.course && tertiaryEdu.endDate;

        if(!inputsValid) return;

        //updates after production
        //ensuring that the property tertiaryEdus is defined
        if(!tertiaryEdus) return saveTertiaryEdu(tertiaryEdu);

        if(tertiaryEdus.some(t=>t.id === tertiaryEdu.id)) return;

        return saveTertiaryEdu(tertiaryEdu);
    }

    return(
        <InputsContainer icon={<FaUniversity/>} headerText="Tertiary Education" savefunc={saveChanges}>
            <div>
                {
                    tertiaryEdus &&
                    tertiaryEdus.map(
                        (tEdu)=>
                            <div className="row" key={tEdu.id}>
                                <div className="col-12 text-end">
                                    <FaTrash className="text-danger" onClick={()=>{removeTertiaryEdu(tEdu.id)}}/>
                                </div>
                                <div className="col-6">Intitution Name</div>
                                <div className="col-6">{tEdu.instituteName}</div>
                                <div className="col-6">Course</div>
                                <div className="col-6">{tEdu.course}</div>
                                <div className="col-6">Start Date</div>
                                <div className="col-6">{tEdu.startDate}</div>
                                <div className="col-6">End Date</div>
                                <div className="col-6">{tEdu.endDate}</div>
                                <div className="col-12"><hr/></div>
                            </div>      
                    )
                }
            </div>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <label className="formLabel">Institution Name</label>
                    <input name="instituteName" className="form-control" onChange={handleInput}/>
                </div>
                <div className="col-12 col-lg-4">
                    <label className="formLabel">Programme/Course Name</label>
                    <input name="course" className="form-control" onChange={handleInput}/>
                </div>
                <div className="col-12 col-lg-4">
                    <label className="formLabel">Year Of Completion</label>
                    <input name="endDate" type="date" className="form-control"  onChange={handleInput}/>
                </div>
            </div>
        </InputsContainer>
    )
}