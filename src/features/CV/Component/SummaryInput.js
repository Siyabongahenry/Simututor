import InputsContainer from "./InputsContainer"
import { useState } from "react";
export default function SummaryInput({summary:_summary,saveSummary})
{
    const[summary,setSummary] = useState(_summary);

    return(
        <InputsContainer headerText="Summary" savefunc={()=>{saveSummary(summary)}}>
            <textarea value={summary.value} onChange={(e)=>{setSummary(e.target.value)}} className="form-control" placeholder="Write a short description about yourself"/>
        </InputsContainer>
    )
}