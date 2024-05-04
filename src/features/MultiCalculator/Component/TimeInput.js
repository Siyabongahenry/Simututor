import { useState } from "react";

const TimeInput = ()=>{

    const[time,setTime]=useState({
        value:"",
        error:false
    })

    const modifyTimeValue=(e)=>{
        let value = e.target.value;

        value = value.replaceAll(" ","");

        if(isNaN(value.substr(0,2) || (value.indexOf(":") < 0 && isNaN(value)) )) return;

        value = value.length === 0?"00:00":value.length === 1?"0"+value+":00":value;

        if(value.indexOf(":") < 0)
        {
           value =value.length<=2?value.substr(0,2)+":00":value.substr(0,2)+":"+value.substr(2,2);
        }

        if(isNaN(value.substr(0,2)))
        {
            
        }
   }

    return(
        <div className="p-1">
            <input  type="text" name="actualStartTime" value={timeData.actualStartTime} onChange={handleInput} onBlur={modifyTimeValue} className="time-input"/>
            {
                time.error &&
                <p className="text-danger">
                    Invalid time!!
                </p>
            }
        </div>
    )
}