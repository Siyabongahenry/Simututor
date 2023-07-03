import InputsContainer from "./InputsContainer"
export default function ReferencesInput()
{
    return(
        <InputsContainer headerText="References">
            <div>
                <label className="form-label">Company Name</label>
                <input className="form-control"/>
            </div>
            <div>
                <label className="form-label">Contact Person Names</label>
                <input className="form-control"/>
            </div>
            <div>
                <label className="form-label">Contact Person Position</label>
                <input className="form-control" placeholder="Example: Manager"/>
            </div>
            <div>
                <label className="form-label">Contact Numbers</label>
                <input className="form-control"/>
            </div>
        </InputsContainer>
    )
}