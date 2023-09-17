import CVHeader from "./CVHeader";
import PersonalInfoOutput from "./PersonalInfoOutput";
import EducInfoOutput from "./EducInfoOutput";
import SummaryOutput from "./SummaryOutput";
import ExperiencesOutput from "./ExperiencesOutput";
import ReferencesOutput from "./ReferencesOutput";


export default function OutputTemplate({cvOwnerDetails,styles})
{

    const{contacts,experiences,address,personalInfo,secEdu,tertiaryEdu,references,summary} = cvOwnerDetails;

    return(
        <>
            <div style={{...styles,height:"297mm"}}>           
                <CVHeader names={personalInfo.firstName+" "+personalInfo.lastName} 
                    address={address} 
                    contacts={contacts}/>
                <div style={{backgroundColor:"white",padding:"2%",height:"100%"}}>
                    <PersonalInfoOutput personalInfo={personalInfo}/>
                    <EducInfoOutput secEdu={secEdu} tertiaryEdu = {tertiaryEdu}/>
                </div>
            </div>
            {
                (experiences.length > 0 || references.length > 0 || summary) &&
                <div style={{...styles,height:"297mm"}}> 
                    <div style={{backgroundColor:"white",padding:"2%",height:"100%"}}>
                        {experiences.length > 0 && <ExperiencesOutput experiences={experiences}/>}
                        {references.length > 0 && <ReferencesOutput references={references}/>}
                        {summary && <SummaryOutput summary={summary}/>}
                    </div>
                </div>
            }
        </>
    )
}