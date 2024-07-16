import { useState } from "react";
import {FaAngleDown, FaAngleUp,FaSave} from "react-icons/fa";

const InputContainer = ({name,children,value,saveChanges})=>{
    const[inputContainer,setInputContainer] = useState(false);
    return(
        <div className="p-2 m-2 border rounded">
            <div>
               <h4 style={{cursor:"pointer",fontSize:"16px"}} className="text-center" onClick={()=>{setInputContainer(!inputContainer)}}> {name}&nbsp;{inputContainer?<FaAngleUp/>:<FaAngleDown/>}</h4>
            </div>
            <div>
                {
                    inputContainer && 
                    <>
                        {children}
                        <div className="text-center p-2">
                            <button className="btn btn-primary" onClick={()=>{setInputContainer(false);saveChanges();}} disabled={value===""}><FaSave/>&nbsp;save changes</button>
                        </div>
                    </>
                }
            </div>
           
        </div>
    );
}

export default InputContainer;