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
        <div>
            <PersonalInfoInput person={cvOwnerDetails.personal} savePersonalInfo={saveChanges.personalInfo}/>
            <ContactsInput contacts={cvOwnerDetails.contacts} saveContacts={saveChanges.contacts}/>
            <AddressInput address={cvOwnerDetails.address} saveAddress={saveChanges.address}/>
            <SecEduInput secEdu={cvOwnerDetails.secEdu} saveSecEdu={saveChanges.secEdu}/>
            <TertiaryInput tertiaryEdu={cvOwnerDetails.tertiaryEdu} saveTertiaryEdu={saveChanges.tertiaryEdu}/>
            <ExperienceInput experience={cvOwnerDetails.experience} saveExperience={saveChanges.experience}/>
            <ReferencesInput references={cvOwnerDetails.references} saveReferences={saveChanges.references}/>
            <SummaryInput summary={cvOwnerDetails.summary} saveSummary={saveChanges.summary}/>
        </div>
    )
}