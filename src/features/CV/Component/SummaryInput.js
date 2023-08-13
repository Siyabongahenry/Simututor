import { CVOwnerContext } from "..";
import InputsContainer from "./InputsContainer"
import { useContext, useEffect, useState } from "react";
export default function SummaryInput({saveSummary})
{
    //RETRIEVE SUMMARY FROM SAVED SUMMARY
    const{summary:_summary} = useContext(CVOwnerContext);

    const[summary,setSummary] = useState(_summary);

    useEffect(()=>{
        if(!_summary) return;

        setSummary(_summary);
    }
    ,[_summary]);
    return(
        <InputsContainer headerText="Summary" savefunc={()=>{saveSummary(summary)}}>
            <textarea value={summary.value} onChange={(e)=>{setSummary(e.target.value)}} className="form-control" placeholder="Write a short description about yourself"/>
        </InputsContainer>
    )
}