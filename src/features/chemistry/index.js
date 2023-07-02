import PageInsideNav from "../../components/PageInsideNav"

export default function Chemistry()
{
    const routes = [
        {
            name:"",
            path:"",
            element:""
        }
    ]
    return (
        <div>
            <PageInsideNav navList={routes.map(route=>({to:route.path,text:route.name}))}/>

        </div>
    )
}