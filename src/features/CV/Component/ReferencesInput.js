import { FaPlus, FaTrash } from "react-icons/fa";
import InputsContainer from "./InputsContainer";
import { useContext, useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { CVOwnerContext } from "..";

export default function ReferencesInput({saveReferences,removeReference})
{
    //RETRIEVE REFERENCES FROM SAVED REFENCES
    const{references} = useContext(CVOwnerContext);

    //REFERENCE
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
    
    const clearReference = ()=>{
        setReference({
            id:"",
            companyName:"",
            personName:"",
            personPosition:"",
            personContact:""
        });
    }

    const saveChanges =()=>{

        if(references.some(r=>r.id === reference.id)) return;

        let inputsValid = reference.companyName && 
                         reference.personName && 
                         reference.personPosition &&
                         reference.personContact;

        if(!inputsValid) return;

        saveReferences(reference);
        clearReference();
    }

    return(
        <InputsContainer headerText="References" savefunc={saveChanges}>      
            {
                references.map(
                    (ref)=>
                    <div className="row mb-2" key={ref.id}>
                        <div className="col-6"></div>
                        <div className="col-6 text-end pr-4">
                            <FaTrash className="text-danger" onClick={()=>removeReference(ref.id)}/>
                        </div>
                        <div className="col-6">Company</div><div className="col-6">:&nbsp;{ref.companyName}</div>
                        <div className="col-6">Person Names</div><div className="col-6">:&nbsp;{ref.personName}</div>
                        <div className="col-6">Person Position</div><div className="col-6">:&nbsp;{ref.personPosition}</div>
                        <div className="col-6">Person Contact</div><div className="col-6">:&nbsp;{ref.personContact}</div>
                    </div>
                )
            }
            <hr/>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <label className="form-label">Company Name</label>
                    <input name="companyName" value={reference.companyName} onChange={handleInput} className="form-control" placeholder="Company Name"/>
                </div>
                <div className="col-12 col-lg-6">
                    <label className="form-label">Person Names</label>
                    <input name="personName"  value={reference.personName} onChange={handleInput} className="form-control" placeholder="Person Name"/>
                </div>
                <div className="col-12 col-lg-6">
                    <label className="form-label">Person postion</label>
                    <input name="personPosition" value={reference.personPosition} onChange={handleInput} className="form-control" placeholder="Person Position"/>
                </div>
                <div className="col-12 col-lg-6">
                    <label className="form-label">Person Contact</label>
                    <input name="personContact" value={reference.personContact} onChange={handleInput} className="form-control" placeholder="Person Contact"/>
                </div>
            </div>
        </InputsContainer>
    )
}