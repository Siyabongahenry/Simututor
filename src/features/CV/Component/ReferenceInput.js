import { FaPlus } from "react-icons/fa"
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
            <div className="text-center p-2">
                <button className="btn btn-outline-primary bg-white"><FaPlus/>&nbsp;Add</button>
            </div>
        </InputsContainer>
    )
}