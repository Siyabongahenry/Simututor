import CVHeader from "./CVHeader";
import PersonalInfoOutput from "./PersonalInfoOutput";
import EducInfoOutput from "./EducInfoOutput";
import SummaryOutput from "./SummaryOutput";
import ExperiencesOutput from "./ExperiencesOutput";
import ReferencesOutput from "./ReferencesOutput";

export default function OutputTemplate({cvOwnerDetails})
{
    const templateStyles = {
        backgroundColor:"#015289",
        color:"Black",
        margin:"auto",
        width:"210mm",
        height:"297mm",
        padding:"5mm",
        fontSize:"11pt"
    }

    const{contacts,experiences,address,personalInfo,secEdu,tertiaryEdu,references,summary} = cvOwnerDetails;

    return(
        <div>
            <div style={templateStyles}>           
                <CVHeader names={personalInfo.firstName+" "+personalInfo.lastName} 
                    address={address} 
                    contacts={contacts}/>
                <div style={{backgroundColor:"white",padding:"2%"}}>
                    <PersonalInfoOutput personalInfo={personalInfo}/>
                    <EducInfoOutput secEdu={secEdu} tertiaryEdu = {tertiaryEdu}/>
                </div>
            </div>
            <div className="p-2"></div>
            <div style={templateStyles}>
                <div style={{backgroundColor:"white",padding:"2%"}}>
                    <ExperiencesOutput experiences={experiences}/>
                    <ReferencesOutput references={references}/>
                    <SummaryOutput summary={summary}/>
                </div>
            </div>
        </div>
    )
}