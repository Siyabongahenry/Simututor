import PersonalInput from "./Component/PersonalInput";
import HighSchoolInput from "./Component/HighSchoolInput";
import TertiaryInputs from "./Component/TertiaryInput";
import ExperienceInputs from "./Component/ExperienceInput";
import ReferencesInput from "./Component/ReferenceInput";

export default function()
{
    
    return(
        <div className="container text-theme">
            <h1 className="text-center">Create your CV</h1>
            <PersonalInput/>
            <HighSchoolInput/>
            <TertiaryInputs/>
            <ExperienceInputs/>
            <ReferencesInput/>
        </div>
    )
}