import { useState } from "react";
import {FaAngleDown,FaAngleUp, FaComment,FaInfoCircle,FaMobile,FaUniversity} from "react-icons/fa";
import ApplicantHelper from "./ApplicantHelper";

export default function University({uni})
{
    const[showDetails,setShowDetails] = useState(false);
    const[showHelper,setHelper] = useState(false);
    return(
        <section className="p-2 bg-white mt-2">
            <h2 className="text-center bg-theme text-theme p-2"><FaUniversity/>&nbsp;{uni.name}</h2>
            <p className="text-center">
                <button className="btn btn-info" onClick={()=>{setShowDetails(!showDetails)}}>
                    {
                        showDetails?
                        <><FaInfoCircle/>&nbsp;Hide details&nbsp;<FaAngleUp/></>:
                        <><FaInfoCircle/>&nbsp;View details&nbsp;<FaAngleDown/></>
                    }
                </button>
            </p>
            {
                showDetails &&
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Opening Date</td>
                            <td>{uni.openingDate}</td>
                        </tr>
                        <tr>
                            <td>Closing Date</td>
                            <td>{uni.closingDate}</td>
                        </tr>
                        <tr>
                            <td>Applications Fee</td>
                            <td>{uni.applicationFee}</td>
                        </tr>
                       </tbody>
                </table>
            }
            <p className="text-center">
                <a className="btn btn-primary" href={uni.link} target="_blank" rel="noopener noreferrer"><FaMobile/>&nbsp;Apply</a>
            </p>
            <p className="text-center">
               <button className="btn btn-secondary" onClick={()=>{setHelper(!showHelper)}}><FaComment/>&nbsp;Assist with my applications</button>
            </p>
            {showHelper && <ApplicantHelper hideHelper={setHelper}/>}
            
        </section>
    )
}