import Welcome from "./components/Welcome";
import NavLinks from "./components/NavLinks";
export default function Home(){
    return(
        <div>
            <h1 className="text-center" style={{fontSize:"18px"}}>All in one</h1>
            <NavLinks/>
            <Welcome/>
        </div>
    )
}