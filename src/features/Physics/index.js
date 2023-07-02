import { Route,Routes } from "react-router-dom";
import PageInsideNav from "../../components/PageInsideNav";
import NewtonsFirstLaw from "./Component.js/NewtonsFirstLaw";
import NewtonsSecondLaw from "./Component.js/NewtonsSecondLaw";
import NewtonsThirdLaw from "./Component.js/NewtonsThirdLaw";
export default function Physics()
{
   const routes=[
      {
          name:"Newtons First Law",
          path:"/newtons1",
          element:<NewtonsFirstLaw/>
      },
      {
          name:"Newtons Second Law",
          path:"/newtons2",
          element:<NewtonsSecondLaw/>
      },
      {
          name:"Newtons Third Law",
          path:"/newtons3",
          element:<NewtonsThirdLaw/>
      },
      {
          name:"Newtons Law of Universal Forces",
          path:"/newtons4",
          element:<NewtonsFirstLaw/>
      },
      ,
      {
          name:"Momentum",
          path:"/momentum",
          element:<NewtonsFirstLaw/>
      },
      ,
      {
          name:"Kinetic Energy",
          path:"/kinetic",
          element:<NewtonsFirstLaw/>
      },
      ,
      {
          name:"Potential Energy",
          path:"/potential",
          element:<NewtonsFirstLaw/>
      },
      ,
      {
          name:"Work Energy Theorem",
          path:"/word",
          element:<NewtonsFirstLaw/>
      },
  ]
  return(
      <>
          <PageInsideNav navList={routes.map((link)=>({to:"/physics"+link.path,text:link.name}))}/>
          <Routes>
              {
                  routes.map((route)=>
                      <Route key={route.path} path={route.path} element={route.element}/>
                  )
              }
          </Routes>
      </>
  );
}