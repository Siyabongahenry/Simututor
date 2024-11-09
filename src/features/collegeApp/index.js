import { collegesData } from "./Data/college-data";
import Institutions from "../UniApplications/Components/Institutions";

const CollegeApp = ()=>{
    return(
        <Institutions institutionsData={collegesData} type="Colleges Or Online"/>
    )
}

export default CollegeApp;