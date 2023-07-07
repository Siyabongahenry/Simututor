import PersonalInput from "./Component/PersonalInput";
import HighSchoolInput from "./Component/HighSchoolInput";
import TertiaryInputs from "./Component/TertiaryInput";
import ExperienceInputs from "./Component/ExperienceInput";
import ReferencesInput from "./Component/ReferenceInput";
import CreateCV from "./Component/CreateCV";
import { useState } from "react";
import SummaryInput from "./Component/SummaryInput";
import AddressInput from "./Component/AddressInput";
import ContactsInput from "./Component/ContactsInput";
export default function()
{
    const[cvOwnerDetails,setCVOwnerDetails] = useState(
        {
            personal:{
                firstName:"",
                middleName:"",
                lastName:"",
                identity:"",
                dateOfBirth:"",
                citizenship:"South African",
                taxNumber:"",
                healthStatus:"Excellent",
                criminalRecord:"None",
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
            tertiaryEdu:[
                {
                    id:"00",
                    instituteName:"",
                    courseName:"",
                    year:""
                }
            ],
            experience:[] ,
            references:[],
            summary:"I am a hardworker"
        }
    );

    const savePersonalDetails=(personalDetails)=>{
        setCVOwnerDetails({...cvOwnerDetails, personal:personalDetails});
    }  

    const saveSecEdu=(secEdu={})=>{
        setCVOwnerDetails({...cvOwnerDetails,secEdu});
    }

    const saveExperience=(experience=[])=>{
        setCVOwnerDetails({...cvOwnerDetails,experience});
    }
    const saveReferences=(references=[])=>{
        setCVOwnerDetails({...cvOwnerDetails,references});
    }
    const saveTertiaryEdu = (tertiaryEdu=[])=>{
        setCVOwnerDetails({...cvOwnerDetails,tertiaryEdu});
    }
    const saveSummary = (summary="")=>{
        setCVOwnerDetails({...cvOwnerDetails, summary});
    }
    
    return(
        <div className="container text-theme">
            <h1 className="text-center">Create your CV</h1>
            <PersonalInput person={cvOwnerDetails.personal} savePersonalDetails={savePersonalDetails}/>
            <ContactsInput contacts={cvOwnerDetails.contacts}/>
            <AddressInput address={cvOwnerDetails.address}/>
            <HighSchoolInput secEdu={cvOwnerDetails.secEdu} saveSecEdu={saveSecEdu}/>
            <TertiaryInputs tertiaryEdu={cvOwnerDetails.tertiaryEdu} saveTertiaryEdu={saveTertiaryEdu}/>
            <ExperienceInputs experience={cvOwnerDetails.experience} saveExperience={saveExperience}/>
            <ReferencesInput references={cvOwnerDetails.references} saveReferences={saveReferences}/>
            <SummaryInput summary={cvOwnerDetails.summary} saveSummary={saveSummary}/>
            <CreateCV cvOwnerDetails={cvOwnerDetails}/>       
        </div>
    )
}