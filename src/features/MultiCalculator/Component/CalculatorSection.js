import { useReducer } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CalculatorSection = ({name,children})=>{

    return(
        <section  className="bg-white p-2 m-1 rounded">
            <h1  className="text-center bg-white"  style={{cursor:"pointer"}} >{name}</h1>
            <div>
                {children}
            </div>
        </section>
    )
}

export default CalculatorSection;