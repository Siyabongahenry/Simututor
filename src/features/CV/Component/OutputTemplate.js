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
            <div style={{...styles}}>           
                <CVHeader names={personalInfo.firstName+" "+personalInfo.lastName} 
                    address={address} 
                    contacts={contacts}/>
                <div style={{padding:"2%"}}>
                    <PersonalInfoOutput personalInfo={personalInfo}/>
                    <EducInfoOutput secEdu={secEdu} tertiaryEdu = {tertiaryEdu}/>
                    {experiences.length > 0 && <ExperiencesOutput experiences={experiences}/>}
                    {references.length > 0 && <ReferencesOutput references={references}/>}
                    {summary && <SummaryOutput summary={summary}/>}
                </div>
            </div>
        </>
    )
}