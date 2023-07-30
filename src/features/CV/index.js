import CreateCV from "./Component/CreateCV";
import { useEffect, useState } from "react";
import InputTemplate from "./Component/InputTemplate";
export default function Index()
{
    const[cvOwnerDetails,setCVOwnerDetails] = useState(
        {
            personalInfo:{
                firstName:"",
                middleName:"",
                lastName:"",
                identity:"",
                dateOfBirth:"",
                citizenship:"South African",
                taxNumber:"",
                healthStatus:"Excellent",
                criminalRecord:"",
                maritalStatus:"Single",
                driversLicense:"",
                computerLiteracy:""
            },
            address:{
                suburb:"",
                town:"",
                postalCode:""
            },
            contacts:{
                email:"",
                mobileNo:"",
                alternative:"",
                home:""
            },
            secEdu:{
                schoolName:"",
                highestGrade:"",
                year:"",
                average:""
            },
            tertiaryEdu:[],
            experiences:[] ,
            references:[],
            summary:""
        }
    );

    useEffect(()=>{
           const userDetails =JSON.parse(localStorage.getItem("userDetails"));
           if(userDetails)
           {
                setCVOwnerDetails(userDetails);
           }
    },[]);

    const saveChanges={
        personalInfo:savePersonalInfo,
        secEdu:saveSecEdu,
        tertiaryEdu:saveTertiaryEdu,
        contacts:saveContacts,
        address:saveAddress,
        experiences:saveExperiences,
        references:saveReferences,
        summary:saveSummary,
    }

    function savePersonalInfo(personalInfo){
        setCVOwnerDetails({...cvOwnerDetails, personalInfo});

        localStorage.setItem("userDetails",JSON.stringify({...cvOwnerDetails,personalInfo}));
    }  

    function saveContacts(contacts)
    {
        setCVOwnerDetails({...cvOwnerDetails, contacts});

        localStorage.setItem("userDetails",JSON.stringify({...cvOwnerDetails,contacts}));
    }

    function saveAddress(address)
    {
        setCVOwnerDetails({...cvOwnerDetails,address});

        localStorage.setItem("userDetails",JSON.stringify({...cvOwnerDetails,address}));
    }

    function saveSecEdu(secEdu={}){
        setCVOwnerDetails({...cvOwnerDetails,secEdu});

        localStorage.setItem("userDetails",JSON.stringify({...cvOwnerDetails,secEdu}));
    }

    function saveExperiences(experiences=[]){
        setCVOwnerDetails({...cvOwnerDetails,experiences});

        localStorage.setItem("userDetails",JSON.stringify({...cvOwnerDetails,experiences}));
    }
    function saveReferences(references=[]){
        setCVOwnerDetails({...cvOwnerDetails,references});

        localStorage.setItem("userDetails",JSON.stringify({...cvOwnerDetails,references}));
    }
    function saveTertiaryEdu(tertiaryEdu=[]){
        setCVOwnerDetails({...cvOwnerDetails,tertiaryEdu});

        localStorage.setItem("userDetails",JSON.stringify({...cvOwnerDetails,tertiaryEdu}));
    }
    function saveSummary(summary=""){
        setCVOwnerDetails({...cvOwnerDetails, summary});

        localStorage.setItem("userDetails",JSON.stringify({...cvOwnerDetails,summary}));
    }
    
    return(
        <div className="container text-theme">
            <h1 className="text-center">Create your CV</h1>
            <InputTemplate cvOwnerDetails={cvOwnerDetails} saveChanges={saveChanges}/>
            <CreateCV cvOwnerDetails={cvOwnerDetails}/>       
        </div>
    )
}