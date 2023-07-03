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

export default function PublicRoute()
{
    const routes =[
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/login/*",
            element:<LoginPage/>
        },
        {
            path:"/signup/*",
            element:<SignupPage/>
        },
        {
            path:"/mathematics/*",
            element:<MathematicsPage/>
        },
        {
            path:"/physics/*",
            element:<PhysicsPage/>
        },
        {
            path:"/chemistry/*",
            element:<ChemistryPage/>
        },
        {
            path:"/about/*",
            element:<AboutPage/>
        },
        {
            path:"/university",
            element:<UniApplicationPage/>
        },
        {
            path:"/cv/*",
            element:<CV/>
        },

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