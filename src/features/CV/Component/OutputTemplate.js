import CVHeader from "./CVHeader";
import PersonalInfoOutput from "./PersonalInfoOutput";
import EducInfoOutput from "./EducInfoOutput";
import SummaryOutput from "./SummaryOutput";
import ReferencesOutput from "./ReferencesOutput";

export default function OutputTemplate({cvOwnerDetails})
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

    const{contacts,address,personalInfo,secEdu,tertiaryEdu,references,summary} = cvOwnerDetails;

    return(
        <div>
            <div style={templateStyles}>
                <CVHeader names={personalInfo.firstName+" "+personalInfo.lastName} 
                    address={address} 
                    contacts={contacts}/>
                <PersonalInfoOutput personalInfo={personalInfo}/>
                <EducInfoOutput secEdu={secEdu} tertiaryEdu = {tertiaryEdu}/>
            </div>
            <div className="p-2"></div>
            <div style={templateStyles}>
                <ReferencesOutput references={references}/>
                <SummaryOutput summary={summary}/>
            </div>
        </div>
    )
}