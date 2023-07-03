import Welcome from "./components/Welcome";
import NavLinks from "./components/NavLinks";
export default function Home(){
    return(
        <div className="p-2 m-1">
            <NavLinks/>
            <Welcome/>
        </div>
    )
}