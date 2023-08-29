import PersonalInfoInput from "./PersonalInfoInput";
import SecEduInput from "./SecEduInput";
import TertiaryInput from "./TertiaryInput";
import ExperienceInput from "./ExperienceInput";
import ReferencesInput from "./ReferencesInput";
import SummaryInput from "./SummaryInput";
import AddressInput from "./AddressInput";
import ContactsInput from "./ContactsInput";

export default function InputTemplate({cvOwnerDetails,saveChanges})
{    
    return(
        <div className="row">
            <div className="col-12">
                <PersonalInfoInput personalInfo={cvOwnerDetails.personal} savePersonalInfo={saveChanges.personalInfo}/>
            </div>
            <div className="col-12">
                <ContactsInput contacts={cvOwnerDetails.contacts} saveContacts={saveChanges.contacts}/>
            </div>
            <div className="col-12">
                <AddressInput address={cvOwnerDetails.address} saveAddress={saveChanges.address}/>
            </div>
            <div className="col-12">
                <SecEduInput secEdu={cvOwnerDetails.secEdu} saveSecEdu={saveChanges.secEdu}/>
            </div>
            <div className="col-12">
                <TertiaryInput saveTertiaryEdu={saveChanges.tertiaryEdu} removeTertiaryEdu={saveChanges.removeTertiaryEdu}/>
            </div>
            <div className="col-12">
                <ExperienceInput saveExperiences={saveChanges.experiences} removeExperience ={saveChanges.removeExperience}/>
            </div>
            <div className="col-12">
                <ReferencesInput saveReferences={saveChanges.references} removeReference={saveChanges.removeReference} />
            </div>
            <div className="col-12">
                <SummaryInput summary={cvOwnerDetails.summary} saveSummary={saveChanges.summary}/>
            </div>
        </div>
    )
}