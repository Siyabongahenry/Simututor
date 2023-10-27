import InterestTracker from "./Component/InterestTracker";
import CustomerInput from "./Component/CustomerInput";
const OneHourFinance = ()=>{

    return(
        <div className="container bg-white rounded">
                <h1 className="text-center bg-warning">One Hour Finances</h1>
                <CustomerInput/>
                <InterestTracker/>
        </div>
    )

}

export default OneHourFinance;