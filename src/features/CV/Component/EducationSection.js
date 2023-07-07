import CVSection from "./CVSection";
import CVInnerSection from "./CVInnerSection";
import PropLabelAndValue from "./PropLabelAndValue";
import {v4 as uuidv4} from "uuid";
export default function EducationSection({secondaryEdu={},tertiaryEdu=[]}){
    return(
        <CVSection name="Education">
            <CVInnerSection name="Secondary Education">
                <PropLabelAndValue labelName="School Name" value={secondaryEdu.schoolName}/>
                <PropLabelAndValue labelName="Highest Grade Completed" value={secondaryEdu.highestGrade}/>
                <PropLabelAndValue labelName="Year" value={secondaryEdu.year}/>
            </CVInnerSection>
            
            {
                tertiaryEdu.length &&
                <CVInnerSection name="Tertiary Education">
                    {
                        tertiaryEdu.map(
                            (tertiaryInt)=>
                            <div key={uuidv4()}>
                                <PropLabelAndValue labelName="Istitution Name" value={tertiaryInt.institutionName}/>
                                <PropLabelAndValue labelName="Course" value={tertiaryInt.course}/>
                                <PropLabelAndValue labelName="Year of Completion" value={tertiaryInt.completionYear}/>
                            </div>
                        )
                    }
                    
                </CVInnerSection>
            }
        </CVSection>
    )
}