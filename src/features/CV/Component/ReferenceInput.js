import { FaPlus, FaTrash } from "react-icons/fa";
import InputsContainer from "./InputsContainer";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function ReferencesInput({references:_references,saveReferences})
{
    const[references,setReferences] = useState([..._references]);
    const[reference,setReference] = useState({
        id:122328,
        company:"",
        personNames:"",
        personPosition:"",
        personContact:""
    });
    const handleInput =(e)=>{
        setReference({...reference,
            [e.target.name]:e.target.value,
            id:uuidv4()});
    }

    const appendReference=()=>{
        setReferences([...references,reference]);
        setReference({
            id:null,
            company:"",
            personNames:"",
            personPosition:"",
            personContact:""
        });
    }

    const filterReferences=(id)=>{
        setReferences(references.filter(({id:_id}) => id===_id))
    }

    return(
        <InputsContainer headerText="References" savefunc={()=>saveReferences(references)}>      
            {
                references.map(
                    (ref,index)=>
                    <div className="row" key={index}>
                        <div className="col-6"></div>
                        <div className="col-6 text-center">
                            <FaTrash className="text-danger" onClick={()=>filterReferences(ref.id)}/>
                        </div>
                        <div className="col-6">Company</div><div className="col-6">:&nbsp;{ref.company}</div>
                        <div className="col-6">Person Names</div><div className="col-6">:&nbsp;{ref.personNames}</div>
                        <div className="col-6">Person Position</div><div className="col-6">:&nbsp;{ref.personPosition}</div>
                        <div className="col-6">Person Contact</div><div className="col-6">:&nbsp;{ref.personContact}</div>
                    </div>
                )
            }
            <div>
                <label className="form-label">Company Name</label>
                <input className="form-control" value={reference.company} onChange={handleInput}/>
                <label className="form-label">Person Names</label>
                <input className="form-control" value={reference.company} onChange={handleInput}/>
                <label className="form-label">Person postion</label>
                <input className="form-control" value={reference.personPosition} onChange={handleInput}/>
                <label className="form-label">Person Contact</label>
                <input className="form-control" value={reference.personContact} onChange={handleInput}/>
            </div>
            <div className="p-2 text-center">
                <button className="btn btn-outline-primary" onClick={appendReference}><FaPlus/> add</button>
            </div>
        </InputsContainer>
    )
}