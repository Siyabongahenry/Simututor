import { useReducer } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CalculatorSection = ({name,icon,children})=>{

    return(
        <section  className="bg-white p-1 m-1 rounded">
            <h1  className="text-center bg-theme text-theme p-1 rounded"  style={{cursor:"pointer"}} >{icon} {name}</h1>
            <div className="p-2">
                {children}
            </div>
        </section>
    )
}

export default CalculatorSection;