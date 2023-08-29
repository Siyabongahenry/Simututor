import CreateCV from "./Component/CreateCV";
import { createContext, useEffect, useState } from "react";
import InputTemplate from "./Component/InputTemplate";

export const CVOwnerContext = createContext();
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
                driversLicence:"",
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
                subjects:"",
                average:""
            },
            tertiaryEdus:[],
            experiences:[] ,
            references:[],
            summary:"",
            defaultTheme:{
                boxSizing:"border-box",
                backgroundColor:"#015289",
                color:"Black",
                margin:"auto",
                width:"210mm",
                Height:"297mm",
                marginTop:"5mm",
                padding:"5mm",
                fontSize:"11pt",
                overflowY:"hidden"
            },
            theme:null,
        }
    );

    useEffect(()=>{
           const userDetails =JSON.parse(localStorage.getItem("userDetails"));

           if(userDetails)
           {
                setCVOwnerDetails(userDetails);
           }

    },[]);
    
    //objects for update functions
    const saveChanges={
        personalInfo:savePersonalInfo,
        secEdu:saveSecEdu,
        tertiaryEdu:saveTertiaryEdu,
        contacts:saveContacts,
        address:saveAddress,
        experiences:saveExperiences,
        references:saveReferences,
        summary:saveSummary,
        removeExperience,
        removeReference,
        removeTertiaryEdu
    }

    
    //helper method for details update
    function updateCvOwnerDetails(newDetails)
    {
        setCVOwnerDetails(newDetails);
        localStorage.setItem("userDetails",JSON.stringify(newDetails));
    }

    //personal details
    function savePersonalInfo(personalInfo){
        let newDetails = {...cvOwnerDetails, personalInfo};
       updateCvOwnerDetails(newDetails);
    }  

    //contacts
    function saveContacts(contacts)
    {
        let newDetails = {...cvOwnerDetails, contacts};
        updateCvOwnerDetails(newDetails);
    }

    //address
    function saveAddress(address)
    {
        let newDetails = {...cvOwnerDetails,address};
        updateCvOwnerDetails(newDetails);
    }

    //secondary education
    function saveSecEdu(secEdu={}){
        let newDetails = {...cvOwnerDetails,secEdu};
        updateCvOwnerDetails(newDetails);
    }

    //experiences
    function saveExperiences(experience){
        let newDetails = {...cvOwnerDetails,experiences:[...cvOwnerDetails.experiences,experience]};
        updateCvOwnerDetails(newDetails);
    }
    function removeExperience(id)
    {
        let newExperiences = cvOwnerDetails.experiences.filter((e)=>e.id !== id);
        let newDetails = {...cvOwnerDetails,experiences:newExperiences};
        updateCvOwnerDetails(newDetails);
    }

    //references
    function saveReferences(reference){
        let newDetails = {...cvOwnerDetails,references:[...cvOwnerDetails.references,reference]};
        updateCvOwnerDetails(newDetails);
    }
    function removeReference(id)
    {
        let newReferences = cvOwnerDetails.references.filter((r)=>r.id !==id);
        let newDetails = {...cvOwnerDetails,references:newReferences};
       updateCvOwnerDetails(newDetails);
    }

    //tertiary education
    function saveTertiaryEdu(tertiaryEdu){

        cvOwnerDetails.tertiaryEdus = cvOwnerDetails.tertiaryEdus?
                                    [...cvOwnerDetails.tertiaryEdus,tertiaryEdu]:
                                    [tertiaryEdu];

        updateCvOwnerDetails({...cvOwnerDetails});
    }

    function removeTertiaryEdu(id){
        let newTertiaryEdus = cvOwnerDetails.tertiaryEdus.filter(ti=>ti.id !== id);
        let newDetails = {...cvOwnerDetails,tertiaryEdus:newTertiaryEdus};
        updateCvOwnerDetails(newDetails);
    }

    //summary
    function saveSummary(summary=""){
        let newDetails = {...cvOwnerDetails, summary};
        updateCvOwnerDetails(newDetails);
    }
    
    //theme
    function saveTheme(theme){
        let newDetails = {...cvOwnerDetails, theme};
        updateCvOwnerDetails(newDetails);
    }

    return(
        <CVOwnerContext.Provider value={cvOwnerDetails}>
            <div className="container text-theme">
                <h1 className="text-center">Create your CV</h1>
                <InputTemplate cvOwnerDetails={cvOwnerDetails} saveChanges={saveChanges}/>
                <CreateCV cvOwnerDetails={cvOwnerDetails} saveTheme={saveTheme}/>       
            </div>
        </CVOwnerContext.Provider>
    )
}