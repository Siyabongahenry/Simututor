import CVHeader from "./CVHeader";
import PersonalDetailsSection from "./PersonalDetailsSection";
import EducationSection from "./EducationSection";
import SummarySection from "./SummarySection";

export default function CVTemplate({cvOwnerDetails})
{
    const templateStyles = {
        backgroundColor:"white",
        color:"Black",
        margin:"auto",
        width:"210mm",
        height:"297mm",
        padding:"10mm",
        fontSize:"11pt"
    }

    const{personal:personalDetails,contacts,address,secEdu,tertiaryEdu,references,summary} = cvOwnerDetails;
   
    return(
        <div style={templateStyles}>
            <CVHeader names={personalDetails.firstname+" "+personalDetails.lastName} 
                address={cvOwnerDetails.address} 
                contacts={personalDetails.contact}/>
            <PersonalDetailsSection person={personalDetails}/>
            <EducationSection secEdu={secEdu} tertiaryEdu = {tertiaryEdu}/>
            <SummarySection summary={summary}/>
        </div>
    )
}