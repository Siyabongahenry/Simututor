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
import PhotoShoot from "../features/PhotoShoot";
import MultiCalculator from "../features/MultiCalculator";
import HRAdmin from "../features/HRAdmin";

export default function PublicRoute()
{
    const routes =[
        {
            path:"/",
            element:<HomePage/>,
            childrens:[]
        },
        {
    
            path:"/university",
            element:<UniApplicationPage/>,
            childrens:[]
        }
        ,
        {
            path:"/cv/*",
            element:<CV/>,
            childrens:[]
        }
        ,
        {
            path:"/letter/*",
            element:<Letter/>,
            childrens:[]
        }
        ,
        {
            path:"/photoshoot",
            element:<PhotoShoot/>,
            childrens:[]
        },
        {
            path:"/mathematics/*",
            element:<MathematicsPage/>,
            childrens:[
                {
                    path:"/functions",
                    element:""
                }
            ]
        },
        {
            path:"/physics/*",
            element:<PhysicsPage/>,
            childrens:[
                {
                    path:"/Compton Effects",
                    element:""
                }
            ]
        },
        {
            path:"/chemistry/*",
            element:<ChemistryPage/>,
            childrens:[
                {
                    path:"/Compton Effects",
                    element:""
                }
            ]
        },
        {
            path:"/login",
            element:<LoginPage/>,
            childrens:[]
        },
        {
            path:"/login",
            element:<LoginPage/>,
            childrens:[]
        },
        {
            path:"/about/*",
            element:<AboutPage/>,
            childrens:[]
        },
        {
            path:"/multicalculator/*",
            element:<MultiCalculator/>,
            childrens:[]
        },
        {
            path:"/hr/",
            element:<HRAdmin/>,
            childrens:[]
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