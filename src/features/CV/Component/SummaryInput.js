import InputsContainer from "./InputsContainer"
import { useState } from "react";
export default function SummaryInput({summary:_summary,setSummary:setCVOwnerSummary})
{
    const[summary,setSummary] = useState(_summary);

    return(
        <InputsContainer headerText="Summary" savefunc={()=>{setCVOwnerSummary(summary)}}>
            <textarea onChange={(e)=>{setSummary(e.target.value)}} className="form-control" placeholder="Write a short description about you">
                {summary}
            </textarea>
        </InputsContainer>
    )
}