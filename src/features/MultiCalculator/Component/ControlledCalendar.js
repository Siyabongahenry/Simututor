
const ControlledCalendar = ({dates,isHoliday})=>{

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

    const renderCalendar = ()=>{

        let _dates = [...dates];

        if(_dates.length <= 0) return [];

        const firstDay = _dates[0].getDay();

        for(let i=0;i< firstDay;i++)
        {
            _dates = [null,..._dates];
        }
         
        let weeks = Math.ceil(_dates.length/7);

        let rows = [];

        for(let i=0;i<weeks;i++)
        {
            let cols = [];
 
            for(let j=0;j<7;j++)
            {
              if(_dates.length ===0 ) break;

              let date = _dates.shift();

              if(date === null)
              {
                cols.push(<td className={(j===0 || j===6)?"bg-light":""} key={date+i+""+j}></td>);
              }
              else
              {
                const day = date.getDay();

                if(day === 0|| day === 6)
                {
                    cols.push(<td key={date+i+""+j} className={isHoliday(date)?"bg-danger":"bg-light"}>
                        {date.getDate()} 
                        <span className="badge-month">{months[date.getMonth()]}</span>
                        <span className="badge-year">{date.getFullYear()}</span>
                    </td>);
                }
                else
                {
                    cols.push(<td key={date+i+""+j} className={isHoliday(date)?"bg-danger text-white":""}>
                        {date.getDate()}
                        <span className="badge-month">{months[date.getMonth()]}</span>
                        <span className="badge-year">{date.getFullYear()}</span>
                   </td>);
                }
              }
            }

            rows.push(<tr key={i}>{cols.map(c=>c)}</tr>);
        }
        return rows;
    }

    return (   
        <div className="p-2 calendar overflow-auto">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCalendar()}
                </tbody>
            </table>
        </div>       
      
    )
}

export default ControlledCalendar;