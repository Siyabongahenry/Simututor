import { useReducer, useState } from "react";
import { FaCheckDouble, FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";


const NamingFiles = ()=>{

    const[fileNames,setFileNames] = useState([
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

    ]);

    const handleInput = (e)=>{

        const newFileNames = fileNames.map((fileName)=>{
               fileName.clockNo = e.target.value;
               fileName.fullName = (fileName.clockNo+"_"+fileName.docName)
                                    .toUpperCase();
               fileName.copied = false;
               return fileName;
            });

        setFileNames(newFileNames);
    }

    const copyToClipboard=(fullName)=>{
    
        if(!fullName) return;

        copy(fullName);
        const newFileNames = fileNames.map((fileName)=>{
                fileName.copied = fileName.fullName===fullName?true:fileName.copied;
                return fileName;
        });

        setFileNames(newFileNames);

    }
    return(
        <section>
            <h1 className="p-2 text-center text-white">File Naming</h1>
            <div className="button-group text-theme text-center m-2">
                <label>Clock No:</label>
                <input name="clockNo" onChange={handleInput}/>
            </div>
            <div className="row">
               
                {
                    fileNames.map((file,index)=>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div key={index}className="bg-white p-2 rounded m-1 overflow-auto">
                                {file.fullName?file.fullName:file.docName}
                                <span className="float-end">
                                    <FaCopy onClick={()=>copyToClipboard(file.fullName)} className={file.copied?"text-success":"text-danger"}/>
                                    {file.copied && <FaCheckDouble className="text-success"/>}
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