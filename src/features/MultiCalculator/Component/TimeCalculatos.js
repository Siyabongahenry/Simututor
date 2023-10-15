import { useState } from "react";
import CalculatorSection from "./CalculatorSection";
const TimeCalculator = ()=>{

    const[duration,setDuration] = useState({
        startTime:"",
        endTime:"",
        breakDuration:"",
        actualStartHours:0,
        actualEndHours:0,
        actualHours:0,
        actualBreakHours:0
    });

    const calcActualDuration=()=>{
        const actualStartHours = convertTimeToHours(duration.startTime);
        const actualEndHours = convertTimeToHours(duration.endTime);
        const breakDuration = convertTimeToHours(duration.breakDuration);
        let actualHours = Math.abs(actualEndHours - actualStartHours)-breakDuration;

        if(actualEndHours < actualStartHours)
        {
            actualHours = Math.abs((actualStartHours-actualEndHours)-24)
        }

        setDuration({...duration,actualStartHours,actualEndHours,actualHours})
    
    }
    const convertTimeToHours = (time)=>{
        return  parseFloat(time.substr(0,2))+parseFloat(time.substr(3,2))/60;
    }
 
    const handleInput =(e)=>{
        setDuration({...duration,[e.target.name]:e.target.value})
    }

    return(
        <CalculatorSection name="Time Calculator">
            <div className="">
                <div className="bg-white text-center">
                    <div className="d-inline-block p-2">
                        <label  className="fw-bold">Start Time</label>
                        <div>
                            <input  type="time" name="startTime" onChangeCapture={handleInput}/>
                        </div>
                    </div>
                    <div className="bg-white d-inline-block p-2">
                        <label  className="fw-bold">End Time</label>
                        <div>
                            <input  type="time" name="endTime"  onChangeCapture={handleInput}/>
                        </div>
                    </div>
                    <div className="bg-white d-inline-block p-2">
                        <label className="fw-bold">Break Length</label>
                        <div>
                            <input type="time" name="breakDuration"  onChangeCapture={handleInput}/>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={calcActualDuration}>Calculate</button>
                    </div>
                </div>
                <div className="bg-white">
                    <h4>Calculations</h4>
                    <p className="border-bottom">
                        Start Time In Hours: {duration.actualStartHours}
                    </p>
                    <p className="border-bottom">
                        End Time In Hours: {duration.actualEndHours}
                    </p>
                    <p className="fw-bold border-bottom">
                        Total Hours: <span className="text-danger">{duration.actualHours}</span>
                    </p>
                </div>
            </div>
        </CalculatorSection>
    )
}

export default TimeCalculator;