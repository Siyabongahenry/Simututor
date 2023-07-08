import CVSection from "./CVSection";
export default function SummaryOutput({summary="I am a hard worker."})
{
    return(
        <CVSection name="Summary">
            {summary}
        </CVSection>
    )
}