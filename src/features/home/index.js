import Welcome from "./components/Welcome";
import NavLinks from "./components/NavLinks";
export default function Home(){
    return(
        <div className="">
            <h2 className="text-center" style={{fontSize:"16px"}}>All in one</h2>
            <NavLinks/>
            <Welcome/>
        </div>
    )
}