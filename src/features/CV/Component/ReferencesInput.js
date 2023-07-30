import { FaPlus, FaTrash } from "react-icons/fa";
import InputsContainer from "./InputsContainer";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function ReferencesInput({references:_references,saveReferences})
{
    const[references,setReferences] = useState([..._references]);
    const[reference,setReference] = useState({
        id:"",
        companyName:"",
        personName:"",
        personPosition:"",
        personContact:""
    });
    const handleInput =(e)=>{
        setReference({...reference,
            [e.target.name]:e.target.value,
            id:reference.id===""?uuidv4():reference.id
        });
    }

    const appendReference=()=>{
        
        if(!(reference.id && reference.companyName && reference.personContact)) return;

        if(references.some(r=>r.id === reference.id)) return;

        setReferences([...references,reference]);

        setReference({
            ...reference,
            id:"",
            companyName:"",
            personName:"",
            personPosition:"",
            personContact:""
        });
    }

    const filterReferences=(id)=>{
        setReferences(references.filter(({id:_id}) => id===_id))
    }

    return(
        <InputsContainer headerText="References" savefunc={()=>{saveReferences(references)}}>      
            {
                references.map(
                    (ref)=>
                    <div className="row mb-2" key={ref.id}>
                        <div className="col-6"></div>
                        <div className="col-6 text-end pr-4">
                            <FaTrash className="text-danger" onClick={()=>filterReferences(ref.id)}/>
                        </div>
                        <div className="col-6">Company</div><div className="col-6">:&nbsp;{ref.companyName}</div>
                        <div className="col-6">Person Names</div><div className="col-6">:&nbsp;{ref.personName}</div>
                        <div className="col-6">Person Position</div><div className="col-6">:&nbsp;{ref.personPosition}</div>
                        <div className="col-6">Person Contact</div><div className="col-6">:&nbsp;{ref.personContact}</div>
                    </div>
                )
            }
            <hr/>
            <div className="mt-2">
                <label className="form-label">Company Name</label>
                <input name="companyName" value={reference.companyName} onChange={handleInput} className="form-control" placeholder="Company Name"/>
                <label className="form-label">Person Names</label>
                <input name="personName"  value={reference.personName} onChange={handleInput} className="form-control" placeholder="Person Name"/>
                <label className="form-label">Person postion</label>
                <input name="personPosition" value={reference.personPosition} onChange={handleInput} className="form-control" placeholder="Person Position"/>
                <label className="form-label">Person Contact</label>
                <input name="personContact" value={reference.personContact} onChange={handleInput} className="form-control" placeholder="Person Contact"/>
            </div>
            <div className="text-danger text-center">
               Add your reference to the list before saving.
            </div>
            <div className="p-2 text-center">
                <button className="btn btn-outline-primary" onClick={appendReference}><FaPlus/> Add To List</button>
            </div>     
        </InputsContainer>
    )
}