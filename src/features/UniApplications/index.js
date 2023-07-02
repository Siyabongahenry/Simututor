import { useState } from "react"
import University from "./Components/University";
import { universitiesData } from "./Data/universities-data";
import {FaUniversity} from "react-icons/fa"
export default function UniApplications()
{
    const [universities,setUniversities] = useState([...universitiesData]);
    const[selectedProv,setSelectedProv] = useState("None");
    const[uniSelectedProp,setUniSelectedProp] = useState("All");
    const filterByProp=(e)=>{
        let option = e.target.value;
        setUniSelectedProp(option);
        switch(option)
        {
            case "ZAF":
                setUniversities(universitiesData.filter(uni=>uni.applicationFee ===0));
            break;
            case "OUO":
                setUniversities(universitiesData.filter(uni=>uni.isOpen));
            break;
            case "LAFH":
                setUniversities(universitiesData.sort((a,b)=>a.applicationFee - b.applicationFee));
            break;
            default:
                setUniversities([...universitiesData]);
            break;

        }
    }

    const filterByProvince =(e)=>{
        let option = e.target.value;

        setSelectedProv(option);

        if(option === "All")
        {
            setUniversities([...universitiesData]);
    
            return;
        }
         

        setUniversities(universitiesData.filter(uni=>uni.province === option));
    }
    return(
        <div className="m-2">
            <h1 className="text-center text-theme"><FaUniversity/>&nbsp;<br/>South Africa Universities</h1>
            <div className="bg-white p-2 text-center">
                <p>
                    <b>Filter BY:</b>&nbsp;
                    <select value={uniSelectedProp} onChange={filterByProp}>
                        <option value="None">None</option>
                        <option value="LAFH">Lowest Application Fee to Highest</option>
                        <option value="ZAF">Zero Application Fee</option>
                        <option value="OUO">Open Universities Only</option>
                        <option value="CSF">Closing Soon First</option>
                    </select>
                </p>
                <p>
                    <b>Filter By Provinces:</b>&nbsp;
                    <select value={selectedProv} onChange={filterByProvince}>
                        {
                            ["All","Easten Cape","Free State","Guateng","Kwazulu Natal","Limpopo","Mpumalanga","Northen Cape","North West","Westen Cape"]
                            .map(
                                prov=><option key={prov} value={prov}>{prov}</option>
                            )
                        }            
                    </select>
                </p>
                <p>
                    Showing <span className="text-primary">{universities.length}</span> universities
                </p>
            </div>

            {
                universities.map((uni)=>
                    <University key={uni.name} uni={uni}/>
                )
            }
        </div>
    )
}