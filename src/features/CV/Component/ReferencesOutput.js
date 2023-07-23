import CVSection from "./CVSection";
import PropLabelAndValue from "./PropLabelAndValue";
export default function ReferencesOutput({references}){
    return(
        <CVSection name="References">
            {
                references.map((ref,index)=>
                    <div id={ref.id}>
                        <PropLabelAndValue labelName="Company Name" value={ref.companyName}/>
                        <PropLabelAndValue labelName="Person Name" value={ref.personName}/>
                        <PropLabelAndValue labelName="Person Position" value={ref.personPosition}/>
                        <PropLabelAndValue labelName="Person Contact" value={ref.personContact}/>
                        {
                            references.length !== index+1  && <hr/>
                        }
                    </div>  
                )
            }
            
        </CVSection>
    )
}