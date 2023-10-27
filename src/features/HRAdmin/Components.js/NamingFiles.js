import { useReducer, useState } from "react";
import { FaCheckDouble, FaCopy, FaFilter, FaPlus } from "react-icons/fa";
import copy from "copy-to-clipboard";

const initialDocNames = [
    {
        clockNo:"",
        docName:"EEA1",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"EMPLOYEE INFORMATION",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"POPI ACT CONSENT",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"POPI ACT - PRIVACY NOTICE",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"MEMORANDUM OF CONFIDENTIALITY",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"CONFLICT OF INTEREST",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"GP COMPLIANCE POLICY",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"COMPLIANCE QUESTIONNAIRE",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"CV",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"BANK DETAILS",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"SARS INCOME TAX NUMBER",
        fullName:"",
        copied:false
    },
    {
        clockNo:"",
        docName:"ID",
        fullName:"",
        copied:false
    },

].sort();

const NamingFiles = ()=>{

    const [newDocName,setNewDocName] = useState("");
    const[filterInput,toggleFilter] = useReducer(filterInput=>!filterInput,false)

    const[fileNames,dispatch] = useReducer(reducerFuc,initialDocNames);

    function reducerFuc(state,action){
        switch(action.type)
        {
            case "RENAME":
                return state.map((fileName)=>{
                    fileName.clockNo = action.clockNo;
                    fileName.fullName = (fileName.clockNo+"_"+fileName.docName)
                                         .toUpperCase();
                    fileName.copied = false;
                    return fileName;
                 });

            case "ADD":

                 if(state.some(({docName})=>docName === action.newDoc.docName)) return state;
                 
                 return [action.newDoc,...state].sort();

            case "COPY":

                return  state.map((fileName)=>{
                    fileName.copied = fileName.fullName===action.fullName?true:fileName.copied;
                    return fileName;
            });

            case "SEARCH":

            return initialDocNames.filter((fileName)=> fileName.docName.search(action.searchString.toUpperCase()) >= 0);

            default:
                return state;
        }
    }

    const handleNewDocName = (e)=>{
        setNewDocName(e.target.value);
    }

    const addNewDocument = ()=>{
        let newDoc = {
            clockNo:"",
            docName:newDocName.toUpperCase(),
            fullName:"",
            copied:false
        }
        dispatch({
            type:"ADD",
            newDoc
        });

        initialDocNames.push(newDoc);
        
    }

    const handleClockNoInput = (e)=>{
        dispatch({type:"RENAME",clockNo:e.target.value});
    }

    const copyToClipboard=(fileName)=>{
        if(!fileName.fullName) return;
        copy(fileName.fullName);  
        dispatch({type:"COPY",fullName:fileName.fullName});

    }

    const handleFilterInput = (e)=>{
        dispatch({type:"SEARCH",[e.target.name]:e.target.value});
    }
    return(
        <section>
            <h1 className="text-center text-white">File Naming</h1>
            <div className="row">   
                <div className="col-12">
                    <div className="input-group m-2">
                        <label className="btn fw-bold bg-info border-end">Document Name</label>
                        <input className="form-control" name="docName" placeholder="Type document name.." onChange={handleNewDocName}/>
                        <button className="btn btn-primary" onClick={addNewDocument}> <FaPlus/>&nbsp;Add</button>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="input-group text-theme text-center m-2">
                        <label className="btn bg-info fw-bold">Rename By Clock No:</label>
                        <input className="form-control" name="clockNo" onChange={handleClockNoInput}  placeholder="Type clock number.."/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <FaFilter className="text-white" onClick={toggleFilter}/>
                    {filterInput && <input className="w-100" name="searchString" onChange={handleFilterInput}  placeholder="type doc name to filter"/>}
                </div>
                {
                    fileNames.map((fileName)=>
                        <div  key={fileName.docName} className="col-12 col-md-6 col-lg-6">
                            <div className="bg-white p-2 rounded m-1 overflow-auto">
                                {fileName.fullName?fileName.fullName:fileName.docName}
                                <span className="float-end">
                                    <FaCopy onClick={()=>copyToClipboard(fileName)} className={fileName.copied?"text-success":"text-danger"}/>
                                    {fileName.copied && <FaCheckDouble className="text-success"/>}
                                </span>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default NamingFiles;