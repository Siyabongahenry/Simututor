import { useState } from "react";
import "./warning-box.css";
const WarningBox = ({children,confirmFunc,cancelFunc})=>{
    return(
        <div className="warning-box-container">
            <div className="warning-box p-2 rounded">
                <p className="text-center">
                    {children}
                </p>
                <div className="overflow-auto">
                    <button className="btn btn-danger float-start" onClick={cancelFunc}>Cancel</button>
                    <button className="btn btn-success float-end" onClick={confirmFunc}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default WarningBox;