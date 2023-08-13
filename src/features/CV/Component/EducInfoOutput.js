import CVSection from "./CVSection";
import CVInnerSection from "./CVInnerSection";
import PropLabelAndValue from "./PropLabelAndValue";
import {v4 as uuidv4} from "uuid";
import {useContext} from "react";
import { CVOwnerContext } from "..";

export default function EducInfoOutput(){

    const{tertiaryEdus,secEdu} = useContext(CVOwnerContext);

    return(
        <CVSection name="Education">
            <CVInnerSection name="Secondary Education">
                <PropLabelAndValue labelName="School Name" value={secEdu.schoolName}/>
                <PropLabelAndValue labelName="Highest Grade Completed" value={secEdu.highestGrade}/>
                <PropLabelAndValue labelName="Year" value={secEdu.year}/>
            </CVInnerSection>   
            {
               (tertiaryEdus && tertiaryEdus.length > 0) &&
                <CVInnerSection name="Tertiary Education">
                    {
                        tertiaryEdus.map(
                            (edu)=>
                            <div key={uuidv4()}>
                                <PropLabelAndValue labelName="Istitution Name" value={edu.instituteName}/>
                                <PropLabelAndValue labelName="Course" value={edu.course}/>
                                <PropLabelAndValue labelName="Year of Completion" value={edu.endDate}/>
                                <hr/>
                            </div>
                        )
                    }
                </CVInnerSection>
            }
        </CVSection>
    )
}