import { useReducer} from "react";
import CalculatorSection from "./CalculatorSection";
import { FaCalculator } from "react-icons/fa";
const TimeCalculator = ()=>{

    const[timeData,dispatch] = useReducer(reducerFuc,{
        actualStartTime:"00:00",
        actualEndTime:"00:00",
        startTime:"00:00",
        endTime:"00:00",
        breakDuration:"00:00",
        actualStartTimeInH:0,
        actualEndTimeInH:0,
        actualTotalTimeInH:0,
        startTimeInHours:0,
        endTimeInHours:0,
        totalHours:0,
        breakInHours:0,
        normalHours:0,
        extraHours:0,
    });

    function reducerFuc(state,action){

        switch(action.type)
        {
            case "INPUT_HANDLER":
                return {...state,...action.fields}

            default:
                 return state;

        }

    }

    const calcHours=()=>{
        const actualStartTimeInH = convertTimeToHours(timeData.actualStartTime);
        const actualEndTimeInH = convertTimeToHours(timeData.actualEndTime);
        const breakInHours = convertTimeToHours(timeData.breakDuration);
        const actualTotalTimeInH = actualEndTimeInH - actualStartTimeInH - breakInHours;

        const startTimeInHours = convertTimeToHours(timeData.startTime);
        const endTimeInHours = convertTimeToHours(timeData.endTime);
        let totalHours = Math.abs(endTimeInHours - startTimeInHours)-breakInHours;

        if(endTimeInHours < startTimeInHours)
        {
            totalHours = Math.abs((startTimeInHours-endTimeInHours)-24)
        }
            
        let extraHours = totalHours - actualTotalTimeInH;
            extraHours = extraHours > 0?extraHours:0;

        let normalHours = extraHours > 0?actualTotalTimeInH:totalHours;
        

        dispatch({
                type:"INPUT_HANDLER",
                fields:{...timeData,actualStartTimeInH,
                    actualEndTimeInH,startTimeInHours,
                    endTimeInHours,totalHours,
                    normalHours,extraHours
                    ,actualTotalTimeInH}
            });
    
    }
    const convertTimeToHours = (time)=>{

        let timeInHours = parseFloat(time.substr(0,2))+parseFloat(time.substr(3,2))/60
        return  timeInHours;
    }
 
    const handleInput =(e)=>{
        dispatch({type:"INPUT_HANDLER",fields:{[e.target.name]:e.target.value}})
    }

    return(
        <CalculatorSection name="Time Calculator" icon={<FaCalculator/>}>
            <div className="bg-white text-center">
                <section>
                    <h4 className="bg-light p-1">Company Time</h4>
                    <div className="d-inline-block p-2">
                        <label>Start Time</label>
                        <div>
                            <input  type="time" name="actualStartTime" value={timeData.actualStartTime} onChange={handleInput}/>
                        </div>
                    </div>
                    <div className="d-inline-block p-2">
                        <label>End Time</label>
                        <div>
                            <input  type="time" name="actualEndTime" value={timeData.actualEndTime} onChange={handleInput}/>
                        </div>
                    </div>
                    <div className="d-inline-block p-2">
                        <label>Break Length</label>
                        <div>
                            <input type="time" name="breakDuration" value={timeData.breakDuration}  onChange={handleInput} />
                        </div>
                    </div>
                    <div className="p-2 text-center">
                        Normal Hours: {timeData.actualTotalTimeInH}
                    </div>
                </section>
                <section>
                    <h4 className="bg-light p-1">Recorded time</h4>
                    <section className="row">
                        <section className="col-12 col-md-6">
                            <h6>Time</h6>
                            <div className="d-inline-block p-2">
                                <label>Start Time</label>
                                <div>
                                    <input  type="time" name="startTime" value={timeData.startTime} onChange={handleInput}/>
                                </div>
                            </div>
                            <div className="d-inline-block p-2">
                                <label>End Time</label>
                                <div>
                                    <input  type="time" name="endTime" value={timeData.endTime}  onChange={handleInput}/>
                                </div>
                            </div>
                            <div className="p-2">
                                <button className="btn btn-primary" onClick={calcHours}>Calculate</button>
                            </div>  
                        </section> 
                        <section className="col-12 col-md-6 text-start">
                            <h6>Calculated Hours</h6>
                            <table className="table table-striped">
                                <thead>                            
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>                         
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Normal Hours</td>
                                        <td>
                                            <span className="text-success">{timeData.normalHours}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Extra Hours</td>
                                        <td>
                                            <span className="text-success">{timeData.extraHours}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Total Hours</td>
                                        <td><span className="text-danger">{timeData.totalHours}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </section>
                </section>
            </div>
        </CalculatorSection>
    )
}

export default TimeCalculator;