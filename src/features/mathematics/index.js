import PageInsideNav from "../../components/PageInsideNav";
import ParabolaNotes from "./components/ParabolaNotes";
import { Route,Routes } from "react-router-dom";

export default function Mathematics(){
    const routes=[
        /*
        {
            name:"Algebra",
            path:"/algebra",
            element:<ParabolaNotes/>
        },*/
        {
            name:"Parabola functions",
            path:"/parabola",
            element:<ParabolaNotes/>
        },
        /*
        {
            name:"Linear functions",
            path:"/linear",
            element:<ParabolaNotes/>
        },
        {
            name:"Exponential functions",
            path:"/exponential",
            element:<ParabolaNotes/>
        },
        {
            name:"Hyperbola functions",
            path:"/hyperbola",
            element:<ParabolaNotes/>
        },
        ,
        {
            name:"Financial Maths",
            path:"/finance",
            element:<ParabolaNotes/>
        },*/
    ]
    return(
        <>
            <PageInsideNav navList={routes.map((link)=>({to:"/mathematics"+link.path,text:link.name}))}/>         
            <Routes>
                {
                    routes.map((route)=>
                        <Route key={route.path} path={route.path} element={route.element}/>
                    )
                }
            </Routes>
            <p className="text-center display-4 text-white">More Topics Coming Soon...</p>
        </>
    );
}