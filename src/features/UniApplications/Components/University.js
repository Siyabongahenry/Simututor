import { useState } from "react";
import {FaAngleDown,FaAngleUp, FaInfo} from "react-icons/fa";

export default function University({uni})
{
    const[showDetails,setShowDetails] = useState(false);
    return(
        <section className="p-2 bg-white mt-2">
            <h2 className="text-center bg-theme text-white p-2">{uni.name}</h2>
            <p className="text-center">
                <button className="btn btn-outline-info" onClick={()=>{setShowDetails(!showDetails)}}>
                    {
                        showDetails?
                        <><FaInfo/>&nbsp;Hide details&nbsp;<FaAngleUp/></>:
                        <><FaInfo/>&nbsp;View details&nbsp;<FaAngleDown/></>
                    }
                </button>
            </p>
            {
                showDetails &&
                <table className="table table-striped">
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
                        <tr>
                            <td>List of Courses</td>
                            <td><a className="btn btn-secondary" href={uni.prospectorsLink}>Download Prospectors</a></td>
                        </tr>
                    </tbody>
                </table>
            }
            <p className="text-center">
                {
                    uni.isOpen?<b className="text-success">Open for applications</b>:
                    <b className="text-danger">The University is Closed for Applications</b>
                }
            </p>
            <p className="text-center">
                <a className="btn btn-primary" href={uni.link}>Apply at the {uni.name}</a>
            </p>       
        </section>
    )
}