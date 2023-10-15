import { FaCheckDouble, FaCopy, FaTimes } from "react-icons/fa";
import CalculatorSection from "./CalculatorSection";
import { useReducer, useState } from "react";
import { getGender,getDateOfBirth,getCitizenship,getAge } from "../../../utils/saIdInfoExtractor";
import copy from "copy-to-clipboard";

const IdInfoExtractor =()=>{

    const[id,setId] = useState("");

    const[copyAlert,toggleAlert] = useReducer(toggle=>!toggle,false);

    const[extractedInfo,setExtractedInfo] = useState({
        age:"Unknown",
        dateOfBirth:"Unknown",
        citezenship:"Unknown",
        gender:"Unknown"
    });

    const handleInput =(e)=>{
        setId(e.target.value);
        setExtractedInfo(
            {
                age:getAge(e.target.value),
                dateOfBirth:getDateOfBirth(e.target.value),
                gender:getGender(e.target.value),
                citezenship:getCitizenship(e.target.value)
            }
        );
    }

    const copyToClipboard=()=>{
        copy(id);
        toggleAlert();
        setTimeout(()=>{toggleAlert()},3000);
    }

    const clearInputs=()=>{
        setId("");
    }

    return (
        <CalculatorSection name="Extract Id Info">
            <div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <label className="fw-bold form-label">Id Number</label>
                        <div className="input-group">  
                            <input value={id} name="userId" onChange={handleInput}  className="form-control" placeholder="e.g 7808016761088"/>                 
                            <button onClick={copyToClipboard}><FaCopy/></button>
                            <button className="bg-danger text-white" onClick={clearInputs}><FaTimes/></button>
                        </div>
                        {
                            copyAlert &&
                            <div className="alert alert-info text-center mt-2">
                                Id copied successfully
                                &nbsp;<FaCheckDouble/>
                            </div>
                        }
                    </div>
                    <div className="col-12 col-lg-8">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Gender</td>
                                    <td>{extractedInfo.gender}</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td>{extractedInfo.dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>{extractedInfo.age}</td>
                                </tr>
                                <tr>
                                    <td>Citizenship</td>
                                    <td>{extractedInfo.citezenship}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </CalculatorSection>
    );
}

export default IdInfoExtractor;