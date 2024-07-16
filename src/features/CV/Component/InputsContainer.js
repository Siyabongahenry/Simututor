import { useReducer} from "react"
import{FaAngleDown,FaAngleUp, FaSave} from "react-icons/fa"
export default function InputsContainer({icon="",headerText,savefunc=f=>f,children}){
    const[opened,toggle] = useReducer(opened=>!opened,false);
    const handleSaveChanges=()=>{
        savefunc();
        toggle();
    }
    return(
        <section className="p-2 m-2 border rounded" style={{cursor:"pointer"}}>
            <h4 style={{cursor:"pointer",fontSize:"16px"}} className="text-center" onClick={toggle}>{icon}&nbsp;{headerText}&nbsp;{opened?<FaAngleUp/>:<FaAngleDown/>}</h4>
            {
                opened &&
                <>
                    {children}
                    <div className="text-info text-center p-2 text-danger">
                        Save after making changes!!!
                    </div>
                    <div className="p-2 text-center">        
                        <button className="btn btn-primary" onClick={handleSaveChanges}><FaSave/>&nbsp;Save Changes</button>
                    </div>
                </>
             }
           
        </section>
    )
}
