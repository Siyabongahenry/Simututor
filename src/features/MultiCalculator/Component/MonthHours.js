import "./calendar.css";
import { useReducer} from 'react';
import ControlledCalendar from "./ControlledCalendar";

const reducer = (state,action)=>{

  switch(action.type)
  {
    case "MODIFY_WEEK_HOURS":

      return {
          ...state,
          weekHours:{
            ...state.weekHours,
            ...action.weekHours
          }

      };
    case "MODIFY_CALCULATOR_SETTINGS":
      return  {
        ...state,
        calcSettings:{
          ...state.calcSettings,
          ...action.calcSettings
        }
      };
    case "MODIFY_DATE_RANGE":
      
      return  {
        ...state,
        dateRange:{
          ...state.dateRange,
          ...action.dateRange
        }
      };
    default:
      return state;
  }
}


const MonthHours = () => {
 
  const days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];


  const[state,dispatch] = useReducer(reducer,{
    dateRange:{
      startDate:new Date(),
      endDate:new Date()
    },
    weekHours:{
      sunday_hours:0,
      monday_hours:8.75,
      tuesday_hours:8.75,
      wednesday_hours:8.75,
      thursday_hours:8.75,
      friday_hours:5,
      saturday_hours:0
    },
    calcSettings:{
      excludeHolidays:true,
      excludeSundays:false,
      excludeSaturdays:false
    }
  });

 //return dates of specified range
  const getDates = ()=>{

    const dateRange = state.dateRange;
    const startDate = dateRange.startDate;
    const endDate = dateRange.endDate;

    let _dates = [];
         
    for(let date = new Date(startDate.getTime());datesLessThanOrEquals(date,endDate);date.setDate(date.getDate()+1)){

        _dates.push(new Date(date.getTime()));
            
    }

    return _dates;
}

  const datesLessThanOrEquals=(date1,date2)=>{

      const date1Year = date1.getFullYear();
      const date2Year = date2.getFullYear();

      const date1Month = date1.getMonth();
      const date2Month = date2.getMonth();

      const date1Day = date1.getDate();
      const date2Day = date2.getDate();

       if(date1Year > date2Year) return false;
       if(date1Year < date2Year) return true;  

      if(date1Month > date2Month) return false;
      if(date1Month < date2Month) return true;
   
      if(date1Day > date2Day) return false;
      if(date1Day < date2Day) return true;

      return true;
    
  }



  const getTotalDays=()=>{

     const dates = getDates();

     return dates.filter(dateIsIncluded).length;
  }

  const dateIsIncluded=(date)=>{
    const  calcSettings = state.calcSettings;

    return !(( calcSettings.excludeHolidays && dateIsHoliday(date))||
     ( calcSettings.excludeSaturdays && date.getDay() === 6)||
     ( calcSettings.excludeSundays && date.getDay() === 0));
  }

  const calcTotalHours = ()=>{
       const dates = getDates();
       const weekHours = state.weekHours;

       const totalHours = dates.reduce((acc,curr)=>{
            if(!dateIsIncluded(curr)) return acc;
            if(curr.getDay() === 0) return parseFloat(weekHours.sunday_hours) + acc;
            if(curr.getDay() === 1 ) return parseFloat(weekHours.monday_hours) + acc;
            if(curr.getDay() === 2) return parseFloat(weekHours.tuesday_hours) + acc;
            if(curr.getDay() === 3) return weekHours.wednesday_hours + acc;
            if(curr.getDay() === 4) return weekHours.thursday_hours + acc;
            if(curr.getDay() === 5) return weekHours.friday_hours + acc;

            return parseFloat(weekHours.saturday_hours) + acc;
       },0);


     return totalHours;
  }

  //South Africa holidays
  const getHolidays = (_date)=>{

    let month = _date.getMonth()+1;

    if(month === 1 || month === 5) return [1];

    if(month === 3) return [21,29];

    if(month === 4) return [1,27];

    if(month === 6) return [16,17];

    if(month===8) return [9];

    if(month === 9) return [24];

    if(month === 12) return [15,16,25,26];

    return [];
    
  }

  const dateIsHoliday =(_date)=>{

    //get holidays for specified month of the date
    const holidays = getHolidays(_date);

     if(holidays.indexOf(_date.getDate())>=0) return true;

     return false;

  }


  const getHoursByIndex = (_index)=>{

      const weekHours = state.weekHours;

      if(_index === 0) return weekHours.sunday_hours;

      if(_index === 1) return weekHours.monday_hours;

      if(_index === 2) return weekHours.tuesday_hours;

      if(_index === 3) return weekHours.wednesday_hours;

      if(_index === 4) return weekHours.thursday_hours;

      if(_index === 5) return weekHours.friday_hours;

      return weekHours.saturday_hours;

  }

  const hoursInputHandler = (e)=>{
    
    dispatch({
        type:"MODIFY_WEEK_HOURS",
        weekHours:{
          [e.target.name]:e.target.value
        }
    });
  }

  const dateRangeInputHandler = (e)=>{
    dispatch({  
        type:"MODIFY_DATE_RANGE",
        dateRange:{
          [e.target.name]:new Date(e.target.value)
        }
      });
  }

  const calcInputHandler = (e)=>{
    dispatch({
        type:"MODIFY_CALCULATOR_SETTINGS",
        calcSettings:{
          [e.target.name]:e.target.checked
        }});
  }

  const formatDate= (_date)=>{

    let dateOfMonth = _date.getDate();
    let month = _date.getMonth()+1;
    let year = _date.getFullYear();

    if(month < 10){
        month = "0"+month;
    }

    if(dateOfMonth < 10)
    {
        dateOfMonth = "0"+dateOfMonth;
    }

    return year+"-"+month+"-"+dateOfMonth;
  }

 
  return (
    <div className="container-fluid bg-white">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="text-center p-2 border"  style={{height:"100%"}}>
                  <h6 className="text-center p-2 bg-light">VARIABLE CALENDAR</h6> 
                  <div className="p-2">
                      <div className="d-inline-block p-2">
                          <label>Start Date</label>&nbsp;
                          <input type="date" name="startDate" value={formatDate(state.dateRange.startDate)} onChange={dateRangeInputHandler}/>
                      </div>&nbsp;
                      <div className="d-inline-block p-2">
                          <label>End Date</label>&nbsp;
                          <input type="date" name="endDate" value={formatDate(state.dateRange.endDate)} onChange={dateRangeInputHandler}/>
                      </div>
                  </div>
                  <ControlledCalendar dates={getDates()} isHoliday={dateIsHoliday}/>
              </div>      
            </div>
            <div className ="col-12 col-lg-6">  
                <div className="border p-2" style={{height:"100%"}}>
                      <h6 className="bg-light p-2 text-center">COMPANY HOURS</h6>
                      {
                        days.map((day,index)=>
                        <div className="d-inline-block p-2" key={index}>
                            <div className=""><small>{day}</small></div>
                            <input type="number" min={0} name={day.toLowerCase()+"_hours"} value={getHoursByIndex(index)} onChange={hoursInputHandler} style={{width:"80px"}}/>
                        </div>
                        )
                      }
                </div>  
                 
            </div>
            
            <div className="col-12 col-lg-6" style={{fontSize:"12px"}}>
              <div className="text-start border p-2 mt-2">
                    <h6>CALCULATE TOTAL HOURS</h6>
                    <p>
                      <label>
                        <input type="checkbox" name="excludeHolidays" onChange={calcInputHandler} checked={state.calcSettings.excludeHolidays}/>&nbsp;
                        Exclude holidays
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" name="excludeSaturdays" onChange={calcInputHandler} checked={state.calcSettings.excludeSaturdays}/>&nbsp;
                        Exclude saturday
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" name="excludeSundays" onChange={calcInputHandler} checked={state.calcSettings.excludeSundays}/>&nbsp;
                        Exclude sundays
                      </label>
                    </p>
                    <div className="row text-center">
                      <div className="col-6">
                              <div className="p-2 m-1 bg-light border">
                                <h6 className="fw-bold">Total Working Days:&nbsp;</h6>
                                <p className="d-inline-block display-6">
                                    {
                                      getTotalDays()
                                    }
                                </p>
                              </div>
                        </div>
                        <div className="col-6"  >
                          <div className="p-2 m-1 bg-light border">
                              <h6 className="fw-bold">Total Hours Worked:</h6>
                              <p className="d-inline-block display-6">
                                  {
                                    calcTotalHours()
                                  }
                              </p>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
          </div>
    </div>
  );
};

export default MonthHours;