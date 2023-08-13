import { useState } from "react"
import{FaAngleDown,FaAngleUp, FaInfoCircle, FaSave} from "react-icons/fa"
export default function InputsContainer({icon="",headerText,savefunc=f=>f,children}){
    const[showChildred,setShowChildred] = useState(false);
    const handleSaveChanges=()=>{
        savefunc();
        setShowChildred(false);
    }
    return(
        <section className="p-2 border m-2 rounded text-white" style={{cursor:"pointer"}}>
            <h4 style={{cursor:"pointer"}} className="text-center" onClick={()=>{setShowChildred(!showChildred)}}>{icon}&nbsp;{headerText}&nbsp;{showChildred?<FaAngleUp/>:<FaAngleDown/>}</h4>
            {
                showChildred &&
                <>
                    {children}
                    <div className="text-info text-center">
                        <FaInfoCircle/> Don't forget to save your changes, otherwise you won't see them
                        on your CV.
                    </div>
                    <div className="p-2 text-center">        
                        <button className="btn btn-primary" onClick={handleSaveChanges}><FaSave/>&nbsp;Save Changes</button>
                    </div>
                </>
             }
           
        </section>
    )
}
