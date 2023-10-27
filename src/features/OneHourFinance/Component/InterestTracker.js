import { useReducer} from "react";
import { FaCalendar, FaMoneyBill } from "react-icons/fa";
import { priceFormat } from "../../../utils/formatCurrency";

const InterestTracker = ()=>{
    const initInterestInfo = {
        code:"0001",
        amountSpent:0,
        spendingTime:0,
        spendingFee:0,
        dateOfSpending:0,
        currentDate:0,
        accumHours:0,
        interestPerHour:0,
        accumInterest:0,
        accumAmount:0

    }
    const [interestInfo,dispatch] = useReducer(reducerFuc,initInterestInfo);

    function reducerFuc(state,action){

    }

    return(
        <section>
            <h2 className="display-6">Code: 566478</h2>
            <div className="row">
                <div className="col-12 col-md-2 col-lg-6">
                    <table className="table border m-1">   
                        <tbody>
                            <tr>
                                <th><FaMoneyBill/> Amount Spent</th>
                                <td>{priceFormat(interestInfo.amountSpent)}</td>
                            </tr>
                            <tr>
                                <th><FaMoneyBill/>Spendind Fee</th>
                                <td>{priceFormat(interestInfo.spendingFee)}</td>
                            </tr>
                            <tr>
                                <th><FaCalendar/> Date of Spending</th>
                                <td>{priceFormat(interestInfo.dateOfSpending)}</td>
                            </tr>
                            <tr>
                                <th><FaCalendar/> Current Date </th>
                                <td>{priceFormat(interestInfo.currentDate)}</td>
                            </tr>
                            <tr>
                                <th><FaMoneyBill/> Interest Per Hour</th>
                                <td>{priceFormat(interestInfo.interestPerHour)}</td>
                            </tr>
                            <tr>
                                <th>Accumulated Hours</th>
                                <td>{priceFormat(interestInfo.accumHours)}</td>
                            </tr>   
                            <tr>
                                <th><FaMoneyBill/>Accumulated Interest</th>
                                <td>{priceFormat(interestInfo.accumHours)}</td>
                            </tr>  
                            <tr>
                                <th  className="text-success"><FaMoneyBill/>Total Amount</th>
                                <td  className="text-success">{priceFormat(interestInfo.accumAmount)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default InterestTracker;