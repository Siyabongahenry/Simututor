export const yyyymmddDate=(dateString)=>{
    let date = dateString?new Date(dateString):new Date();

    let month = date.getMonth();
        month = month < 10?"0"+month:month;

    let year = date.getFullYear();

    let day =date.getDay();
          day = day < 10?"0"+day:day;

    let formatedDate = year+"-"
                        +month+"-"
                        +day;

    return formatedDate;
}