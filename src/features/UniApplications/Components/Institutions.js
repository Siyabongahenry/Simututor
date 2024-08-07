import "./university.css";
import Institution from "./Institution";
import { useEffect, useState } from "react"
import { FaAngleDown, FaAngleUp} from "react-icons/fa";

const Institutions = ({institutionsData=[],type=""})=>{
    const [institutions,setInstitutions] = useState([]);
    const[selectedProv,setSelectedProv] = useState("None");
    const[instSelectedProp,setUniSelectedProp] = useState("All");
    const[searchInput,setSearchInput] = useState("");
    const[hideFilter,setHideFilter] = useState(true);
    
    useEffect(()=>{
            if(institutionsData.length ===0) return;        
             setInstitutions([...institutionsData]);
             
    },[institutionsData])

    const filterByProp=(e)=>{
        let option = e.target.value;
        setUniSelectedProp(option);
        switch(option)
        {
            case "ZAF":
                setInstitutions(institutionsData.filter(uni=>uni.applicationFee ===0));
            break;
            case "OUO":
                setInstitutions(institutionsData.filter(uni=>uni.isOpen));
            break;
            case "LAFH":
                setInstitutions(institutionsData.sort((a,b)=>a.applicationFee - b.applicationFee));
            break;
            default:
                setInstitutions([...institutionsData]);
            break;

        }
    }

    const filterByProvince =(e)=>{
        let option = e.target.value;

        setSelectedProv(option);

        if(option === "All")
        {
            setInstitutions([...institutionsData]);
    
            return;
        }
         

        setInstitutions(institutionsData.filter(uni=>uni.province === option));
    }

    const handleSearch = ()=>{

        if(!searchInput) return setInstitutions([...institutionsData]);

        const filter = (u)=>(u.name.toLowerCase().search(searchInput.toLowerCase()) >= 0) ||
                        (u.abbrev && u.abbrev.search(searchInput.toLocaleLowerCase()) >= 0);

        const newUniData = institutionsData.filter(filter);

        setInstitutions(newUniData);
    }
    return(
        <div className="m-2">
        <h1 className="text-center text-theme" style={{fontSize:"16px"}}>South Africa {type}</h1>
        <div className="bg-white p-2 text-center">
            {
                hideFilter &&
                <>
                    <div className="row">
                
                        <div className="col-12 col-lg-6">
                            <p>
                                <b>Filter BY:</b>&nbsp;
                                <select value={instSelectedProp} onChange={filterByProp}>
                                    <option value="None">None</option>
                                    <option value="LAFH">Lowest Application Fee to Highest</option>
                                    <option value="ZAF">Zero Application Fee</option>
                                    <option value="OUO">Open Universities Only</option>
                                    <option value="CSF">Closing Soon First</option>
                                </select>
                            </p>
                        </div>
                        <div className="col-12 col-lg-6">
                            <b>Filter By Provinces:</b>&nbsp;
                            <select value={selectedProv} onChange={filterByProvince}>
                                {
                                    ["All","Eastern Cape","Free State","Guateng","Kwazulu Natal","Limpopo","Mpumalanga","Northen Cape","North West","Westen Cape"]
                                    .map(
                                        prov=><option key={prov} value={prov}>{prov}</option>
                                    )
                                }            
                            </select>
                        </div>
                        <div className="col-12">
                            <div className="input-group">
                            <input value={searchInput} onChange={(e)=>{setSearchInput(e.target.value);handleSearch()}} className="form-control" placeholder={`Search by ${type.toLowerCase()} name..`}/>
                            </div> 
                        </div>  
                       
                    </div>
                </>
            }
            <div className="text-end p-2">
                <button className="btn btn-light text-success form-control" onClick={()=>{setHideFilter(!hideFilter)}}>{!hideFilter?<>Show filters <FaAngleDown/></>:<>Hide filters <FaAngleUp/></>}</button>
            </div>          
        </div>
        <div className="row">
        {
            institutions.map((institute)=>
                <div className="col-12 col-lg-4" key={institute.name}>
                    <Institution institute={institute}/>
                </div>
            )
        }
        </div>
    </div>
    )
}

export default Institutions;