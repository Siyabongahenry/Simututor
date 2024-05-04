import "./hours-calculator.css";
import { useReducer} from "react";
import CalculatorSection from "./CalculatorSection";
import { FaCalculator } from "react-icons/fa";
import MonthHours from "./MonthHours";
const HoursCalculator = ()=>{

    const[timeData,dispatch] = useReducer(reducerFuc,{
        actualStartTime:"00:00",
        actualEndTime:"00:00",
        startTime:"00:00",
        endTime:"00:00",
        breakDurationMM:0,
        breakDurationHH:0,
        actualStartTimeInH:0,
        actualEndTimeInH:0,
        actualTotalTimeInH:0,
        startTimeInHours:0,
        endTimeInHours:0,
        totalHours:0,
        breakInHours:0,
        normalHours:0,
        extraHours:0,
        error:false
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
        const breakInHours =parseFloat(timeData.breakDurationHH) + parseFloat(timeData.breakDurationMM/60);

        
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
         dispatch({type:"INPUT_HANDLER",fields:{[e.target.name]:value}})
    }
 
    const handleInput =(e)=>{
        dispatch({type:"INPUT_HANDLER",fields:{[e.target.name]:e.target.value}})
    }

    return(
        <CalculatorSection name="HOURS CALCULATOR" icon={<FaCalculator/>}>
            <div className="bg-white">

                <MonthHours/>
                <section className="text-center">
                    <h4 className="bg-light p-1">COMPANY TIME</h4>
                    <div className="row text-center">
                        <div className="col-12 col-lg-6 p-2">
                            <h6>OPERATION HOURS</h6>
                            <div className="d-inline-block m-1">
                                <label>START</label>
                                <div>
                                    <input  type="text" name="actualStartTime" value={timeData.actualStartTime} onChange={handleInput} onBlur={modifyTimeValue} className="time-input"/>
                                </div>
                            </div>
                            <div className="d-inline-block m-1">
                                <label>END</label>
                                <div>
                                    <input  type="text" name="actualEndTime" value={timeData.actualEndTime} onChange={handleInput} onBlur={modifyTimeValue} className="time-input"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-2">
                            <h6>BREAK DURATION</h6>   
                            <div className="d-inline-block m-1"> 
                                <label>
                                    HOURS<br/>
                                    <input  name="breakDurationHH" value={timeData.breakDurationHH}  onChange={handleInput} className="time-input" type="number" min={0}/>                
                                </label>
                            </div>
                            <div className="d-inline-block m-1">
                                <label>
                                    MINUTES<br/>
                                    <input name="breakDurationMM" value={timeData.breakDurationMM}  onChange={handleInput} className="time-input" type="number" min={0} max={59}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 text-center">
                        Normal Hours: {timeData.actualTotalTimeInH}
                    </div>
                </section>
                <section className="text-center">
                    <h4 className="bg-light p-1">EMPLOYEE TIME</h4>
                    <section className="row">
                        <section className="col-12 col-md-6">
                            <h6>CLOCKING TIME</h6>
                            <div className="d-inline-block p-2">
                                <label>IN</label>
                                <div>
                                    <input  type="text" name="startTime" value={timeData.startTime}  onChange={handleInput} onBlur={modifyTimeValue} className="time-input"/>
                                </div>
                            </div>
                            <div className="d-inline-block p-2">
                                <label>OUT</label>
                                <div>
                                    <input  type="text" name="endTime" value={timeData.endTime}  onChange={handleInput} onBlur={modifyTimeValue}  className="time-input"/>
                                </div>
                            </div>
                            <div className="p-2">
                                <button className="btn btn-primary" onClick={calcHours}>Calculate</button>
                            </div>  
                        </section> 
                        <section className="col-12 col-md-6 text-start">
                            <h6>CALCULATED HOURS</h6>
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
                                        <td>Excess Hours</td>
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

export default HoursCalculator;