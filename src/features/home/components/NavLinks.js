import "./navlinks.css";
import {FaFile, FaUniversity} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NavLinks(){
    return(
        <div className="row">
            <div className="col-12 col-md-6">
                <section className="border m-2 text-center p-2 shadow link-container">
                    <h2 className="text-theme">
                        <FaUniversity/><br/>
                        SA Universities Application
                    </h2>
                    <Link className="btn-link" to="/university">View and Apply</Link>
                </section>
            </div>
            <div className="col-12 col-md-6">
                <section className="border m-2 text-center p-2 link-container">
                    <h2 className="text-theme">
                        <FaFile/><br/>
                        Create your CV
                    </h2>
                    <Link className="btn-link" to="/cv">Starts</Link>
                </section>
            </div>
        </div>
    )
}