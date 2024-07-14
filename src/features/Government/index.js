import { organizationsData } from "./Data/organization-data";
import Organization from "./Components/Organization";
import { useEffect, useState } from "react";

const Government = ()=>{
    const[organizations,setOrganizations] = useState([]);
    useEffect(()=>{
            if(organizations.length ===  0) 
            {
                setOrganizations([...organizationsData]);
            }
    },[])

    return(
        <div className="row">
            <div className="col-12">
              <h1 className="text-center" style={{fontSize:"16px"}}>Government website</h1>
            </div>
             {
                organizations.map((organization)=>
                    <div className="col-12 col-lg-3" key={organization.name}>
                        <Organization organization={organization}/>
                    </div>
                )
             }     
        </div>
    );
}

export default Government;