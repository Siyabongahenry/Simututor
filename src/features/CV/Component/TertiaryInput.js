import { FaUniversity } from "react-icons/fa"
import InputsContainer from "./InputsContainer"
export default function TertiaryInputs()
{
    return(
        <InputsContainer icon={<FaUniversity/>} headerText="Tertiary Education">
            <div>
                <label className="formLabel">Institution Name</label>
                <input className="form-control"/>
            </div>
            <div>
                <label className="formLabel">Programme/Course Name</label>
                <input className="form-control"/>
            </div>
            <div>
                <label className="formLabel">From</label>
                <input className="form-control"/>
            </div>
            <div>
                <label className="formLabel">To</label>
                <input className="form-control"/>
            </div>
        </InputsContainer>
    )
}