import { FaSearch } from "react-icons/fa";
import Company from "./Component/Company";
import { companiesData } from "./Data/company-data";
import { useEffect, useState } from "react"

const Jobs = ()=>{
    const[companies,setCompanies] = useState([]);

    useEffect(()=>{
        if(companies.length !== 0 ) return;

        setCompanies([...companiesData]);

    },[]);

    const searchHandler = (e)=>{

        const value = e.target.value;

        if(!value) return setCompanies([...companiesData]);

        let newList = companiesData.filter(({name}) => name.toLowerCase().indexOf(value)>=0)

        return setCompanies([...newList]);
        
    }

    return (
        <div>
            <h1 className="text-center" style={{fontSize:"16px"}}>Company pages for vacancies and social media</h1>
            <div>
                <div className="form-outline">
                    <input type="search" className="form-control" placeholder="search by company name.." onChange={searchHandler} />
                </div>
            </div>
            <div className="row">
            {
                companies.map(
                    (company,index)=>
                    <div className="col-12 col-lg-3" key={index}>
                        <Company company={company}/>
                    </div>
                )
            }
            </div>
        </div>
    );
}
export default Jobs;
