import { FaUniversity,FaPlus, FaTrash } from "react-icons/fa"
import InputsContainer from "./InputsContainer";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
export default function TertiaryInput({tertiaryEdu:_tertiaryEdu,saveTertiaryEdu: saveTertiaryEdu})
{
    const[tertiaryEdu,setTertiaryEdu] = useState({});
    const[tertiaryEdus,setTertiaryEdus] = useState([]);

    const handleInput = (e)=>{

        setTertiaryEdu({...tertiaryEdu,[e.target.name]:e.target.value,id:uuidv4()});
    }

    const appendTertiaryEdu =()=>{
        if(tertiaryEdus.some(edu=>edu.id === tertiaryEdu.id) || tertiaryEdu.name==="" || tertiaryEdu.course ==="") return;
        setTertiaryEdus([...tertiaryEdus,tertiaryEdu]);
    }

    const removeTertiaryEdu=(id)=>{
    
        setTertiaryEdus(tertiaryEdus.filter(edu => edu.id  !== id));
    }
    return(
        <InputsContainer icon={<FaUniversity/>} headerText="Tertiary Education" savefunc={()=>{saveTertiaryEdu(tertiaryEdus)}}>
            <div>
                {
                    tertiaryEdus.map(
                        (tEdu)=>
                            <div className="row" key={tEdu.id}>
                                <div className="col-12 text-end">
                                    <FaTrash className="text-danger" onClick={()=>{removeTertiaryEdu(tEdu.id)}}/>
                                </div>
                                <div className="col-6 p-2">Intitution Name</div>
                                <div className="col-6 p-2">{tEdu.instituteName}</div>
                                <div className="col-6 p-2">Course</div>
                                <div className="col-6 p-2">{tEdu.course}</div>
                                <div className="col-6 p-2">Start Date</div>
                                <div className="col-6 p-2">{tEdu.startDate}</div>
                                <div className="col-6 p-2">End Date</div>
                                <div className="col-6 p-2">{tEdu.endDate}</div>
                                <div className="col-12"><hr/></div>
                            </div>      
                    )
                }
            </div>
            <div>
                <label className="formLabel">Institution Name</label>
                <input name="instituteName" className="form-control" onChange={handleInput}/>
            </div>
            <div>
                <label className="formLabel">Programme/Course Name</label>
                <input name="course" className="form-control" onChange={handleInput}/>
            </div>
            <div>
                <label className="formLabel">From</label>
                <input name="startDate" type="date" className="form-control" onChange={handleInput}/>
            </div>
            <div>
                <label className="formLabel">To</label>
                <input name="endDate" type="date" className="form-control"  onChange={handleInput}/>
            </div>
            <div className="text-center p-2">
                <button onClick={appendTertiaryEdu} className="btn btn-outline-primary"><FaPlus/>&nbsp;Add</button>
            </div>
        </InputsContainer>
    )
}