import CVSection from "./CVSection";
export default function SummarySection({summary="I am a hard worker."})
{
    return(
        <CVSection name="Summary">
            {summary}
        </CVSection>
    )
}