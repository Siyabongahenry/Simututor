import CVSection from "./CVSection";
import PropLabelAndValue from "./PropLabelAndValue";
export default function ExperiencesOutput({experiences})
{   

    return(
        <CVSection name="Work Experience">
             {
                experiences.map((exp,index)=>
                    <div key={exp.id}>
                        <h6 style={{color:"#015289"}}>{exp.companyName}</h6>
                        <PropLabelAndValue labelName="Position" value={exp.position}/>
                        <PropLabelAndValue labelName="Start Date" value={exp.startDate}/>
                        <PropLabelAndValue labelName="End Date" value={exp.endDate}/>
                        <PropLabelAndValue labelName="Reason of Leaving" value={exp.reason}/>
                        {
                            experiences.length !== index+1  && <hr/>
                        }
                    </div>  
                )
            }
        </CVSection>   
    )
}