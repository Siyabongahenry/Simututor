import "./navlinks.css";
import {FaFile, FaUniversity} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NavLinks(){
    return(
        <div className="row">
            <div className="col-12 col-md-6">
                <section className="border m-2 text-center p-2 link-container">
                    <h2 className="text-theme">
                        <FaFile className="text-white"/><br/>
                        CV
                    </h2>
                    <Link className="btn-link" to="/cv">Create Now</Link>
                </section>
            </div>
            <div className="col-12 col-md-6">
                <section className="border m-2 text-center p-2 link-container">
                    <h2 className="text-theme">
                        <FaFile className="text-white"/><br/>
                        Formal Letter
                    </h2>
                    <Link className="btn-link" to="/letter">Create Now</Link>
                </section>
            </div>
            <div className="col-12 col-md-6">
                <section className="border m-2 text-center p-2 link-container">
                    <h2 className="text-theme">
                        <FaUniversity className="text-white"/><br/>
                        SA Universities Applications
                    </h2>
                    <Link className="btn-link" to="/university">Visit Now</Link>
                </section>
            </div>
        </div>
    )
}