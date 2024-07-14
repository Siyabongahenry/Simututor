
const Calendar = ({getWeeks,getHolidays,getDateWeekDay}) =>{

    const renderWeeks = ()=>{

        let weeks = getWeeks();
        let holidays = getHolidays();

        const rows = [];
   
        for(let i = 0;i<weeks.length;i++)
        {
          let week = weeks[i];
          let row =[];
                
           for(let j = 0;j<7;j++)
           {
             //days in a week
              let weekDay = getDateWeekDay(week[j]);
              let column = <td></td>;
   
             if(j === 0){
                column = <td key={j} className="bg-sunday">{week[j]}</td>;
             }
             else if(j===6)
             {
                column = <td key={j} className="bg-saturday">{week[j]}</td>;
             }
             else
             {
               column = <td key={j}>{week[j]}</td>;
             }

             if(holidays.indexOf(week[j]) >= 0)
             {
                column = <td key={j} className="bg-holiday">{week[j]}</td>;
             }
                            
             row.push(column);
           }
   
           row = <tr key={i}>{row.map(day => day)}</tr>;
   
           rows.push(row);
        }
        
        return rows;
     }   

    return (
        <div className="calendar d-inline-block">
            <table className="border text-center">
            <thead>
                <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
                {
                 renderWeeks().map((week)=>week)
                }
            </tbody>
            </table>   
        </div>
      );

}

export default Calendar;