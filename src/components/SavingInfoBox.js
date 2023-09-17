import { useState } from "react";
import { FaFilePdf, FaInfoCircle, FaLaptop, FaMobile } from "react-icons/fa";
const SavingInfoBox = ()=>{
    const[infoToggle,setInfoToggle] = useState(false);
    return(
        <section  onClick={()=>setInfoToggle(!infoToggle)} style={{cursor:"pointer"}} className="alert alert-info d-inline-block text-start">
            <h2><FaInfoCircle/> HOW TO SAVE YOUR DOCUMENT AS A PDF??</h2>
            {
                infoToggle &&
                <>
                    <section>
                        &nbsp;
                        <h4>MOBILE DEVICE <FaMobile/></h4>
                        <ol>
                            <li>Click the "SAVE ..." button below</li>
                            <li>Look for "PAPER SIZE" and select A4</li>
                            <li>You can thereafter click the yellow pdf download button</li>
                            <li>Choose a folder in your device and press save</li>
                        </ol>
                    </section>
                    <section>
                        <h4>DESKTOP<FaLaptop/></h4>
                        <ol>
                            <li>Click the "SAVE MY DOCUMENT" button below</li>
                            <li>Change your printer to "PRINT TO PDF"</li>
                            <li>Look for "MORE SETTINGS"</li>
                            <li>Set your "PAPER SIZE" to "A4"</li>
                            <li>Click "PRINT", select a folder and save</li>
                        </ol>
        
                    </section>
                    <p className="text-danger text-center">
                        CLICK ANYWHERE TO HIDE THE ABOVE INFORMATION
                    </p>
                </>
            }
        </section>
    )
}

export default SavingInfoBox;