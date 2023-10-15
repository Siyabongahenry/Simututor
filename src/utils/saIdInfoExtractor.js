export const getDateOfBirth = (id)=>{

    if(id.length < 6) return "Unknown";

    let year = getYearOfBirth(id);

    let month = id.substr(2,2);

    let day = id.substr(4,2);

    const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]

    return day+" "+months[parseInt(month)-1]+" "+year;

}

export const getGender = (id)=>{

    if(id.length < 10) return "Unknown";

    const gender = parseInt(id.substr(6,4))>4999?"Male":"Female";

    return gender;
}

export const getCitizenship = (id)=>{
  
    if(id.length < 12) return "Unknown";

    const code = id.substr(10,2);

    return code ==="08"?"South African":"Foreign Nation"
}

export const getYearOfBirth=(id)=>{
    if(id.length < 6) return "Unknown";

    let year = id.substr(0,2);
    //to update in future
    year = year > 40?"19"+year:"20"+year;

    return parseInt(year);
}

export const getAge=(id)=>{

    const currentYear = new Date().getFullYear()

    return  currentYear- getYearOfBirth(id);  
}