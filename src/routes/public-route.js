import { Route,Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MathematicsPage from "../pages/MathematicsPage";
import PhysicsPage from "../pages/PhysicsPage";
import ChemistryPage from "../pages/ChemistryPage";
import AboutPage from "../pages/AboutPage";
import UniApplicationPage from "../pages/UniApplicationPage";
import CV from "../features/CV";
import Letter from "../features/Letter";

export default function PublicRoute()
{
    const routes =[
        {
            path:"/",
            element:<HomePage/>
        },
        {
    
            path:"/university",
            element:<UniApplicationPage/>
        },
        {
            path:"/cv/*",
            element:<CV/>
        },
        ,
        {
            path:"/letter/*",
            element:<Letter/>
        },
        {
            path:"/about/*",
            element:<AboutPage/>
        }

    ];
    return(
        <Routes>
          {
            routes.map((route)=>
                <Route key={ route.path} path={route.path} element={route.element}/>
            )
          }
        </Routes>
    )
}