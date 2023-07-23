import { useState } from "react"
import{FaAngleDown,FaAngleUp} from "react-icons/fa"
export default function InputsContainer({icon="",headerText,savefunc=f=>f,children}){
    const[showChildred,setShowChildred] = useState(false);
    const handleSaveChanges=()=>{
        savefunc();
        setShowChildred(false);
    }
    return(
        <section className="p-2 border m-2 rounded text-white" style={{cursor:"pointer"}}>
            <h2 className="text-center" onClick={()=>{setShowChildred(!showChildred)}}>{icon}&nbsp;{headerText}&nbsp;{showChildred?<FaAngleUp/>:<FaAngleDown/>}</h2>
            {
                showChildred &&
                <>
                    {children}
                    <div className="p-2 text-center">
                        <button className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
                    </div>
                </>
             }
           
        </section>
    )
}
