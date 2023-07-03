import { useState } from "react"
import{FaAngleDown,FaAngleUp} from "react-icons/fa"
export default function InputsContainer({icon="",headerText,children}){
    const[showChildred,setShowChildred] = useState(false);
    return(
        <section className="p-2 border m-2 rounded text-white">
            <h2 className="text-center" onClick={()=>{setShowChildred(!showChildred)}}>{icon}&nbsp;{headerText}&nbsp;{showChildred?<FaAngleUp/>:<FaAngleDown/>}</h2>
            {showChildred && children}
        </section>
    )
}
