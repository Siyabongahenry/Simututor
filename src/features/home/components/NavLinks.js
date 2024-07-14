import "./navlinks.css";
import { Link } from "react-router-dom";
export default function NavLinks(){
    const links = [
        {
            name:"Apply to SA Universities",
            to:"/university",
            description:"All SA Universities with their application and social links."
        },
        {
            name:"Apply to Colleges",
            to:"/college",
            description:"Find application links for colleges."
        },
        {
            name:"Apply to Companies",
            to:"/jobs",
            description:"Find big companies vacancy and social links."
        },
        {
            name:"Goverment",
            to:"/government",
            description:"NSFAS Funding, SARS Efiling, Company Registrations CIPC, Traffic Department"
        }
    ]
    const navLink=(name,to,description)=>{
        return(
            <div className="col-12 col-md-6 bg-white" key={name}>
                <section className="m-1 text-center p-2 link-container">
                    <h2 className="link-name">
                        {name}
                    </h2>
                    <div className="home-link-info">
                        {description}
                    </div>
                    <Link className="btn btn-success" to={to}>VIEW</Link>
                </section>
            </div>
        );
    }
    return(
        <div className="row">
            {
                links.map((link)=>
                  navLink(link.name,link.to,link.description)
                )
            }
        </div>
    )
}