import "./booking-form.css";
import { useState } from "react";
import { FaCalendar, FaCalendarDay, FaClock, FaMapMarker, FaPhone, FaWhatsapp } from "react-icons/fa";
import { priceFormat } from "../../../utils/formatCurrency";
const BookingForm = ({item,closeForm})=>{

    const bookingInfo = useState({
        FirstName:"",
        LastName:"",
        WhatsappNo:"",
        OtherNo:"",
        hours:""

    });

    return(
        <section className="booking-form bg-theme text-theme">
            <div className="container p-2 border">
                <p className="alert alert-warning text-center">
                    This page is currently under costruction
                </p>
                <h2 className="p-2 text-center" style={{backgroundColor:"var(--text-theme)",color:"var(--bg-theme)"}}>Booking Form</h2>
               <div className="row">
                    <section className="col-12 col-md-4 bg-theme text-white border">
                        <h4>Cost Details</h4>
                        <p>
                            Item: <b>{item.name}</b>
                        </p>
                        <p>
                            Cost Per Hour: <b>{priceFormat(item.originalCost)}</b>
                        </p>
                        <p className="text-bold">
                            Total Hours: <b>{item.hours}</b>
                        </p>
                        <p>
                            Total Cost: <b>{priceFormat(item.cost)}</b>
                        </p>
                    </section>
                    <section className="col-12 col-md-8">
                        <h4>Please fill in the form below</h4>
                        <div className="p-2"> 
                            <label>Full Names</label>
                            <input name="names" className="form-control"/>
                        </div>
                        
                        <div className="p-2">
                            <label><FaWhatsapp/>&nbsp;Whatsapp Numbers</label>
                            <input name="whatsappNumbers" className="form-control"/>
                        </div>
                        <div className="p-2">
                            <label><FaPhone/>&nbsp;Call Numbers</label>
                            <input name="phoneCallNumbers" className="form-control"/>
                        </div>
                       
                    </section>
                </div>
                <div className="p-2">
                    <label><FaMapMarker/>&nbsp;Event Address</label>
                    <textarea name="address" type="text" className="form-control"/>
                </div>
                <div className="p-2">
                    <label><FaCalendar/>&nbsp;Date</label>
                    <input name="date" type="date" className="form-control"/>
                </div>
                <div className="p-2">
                    <label><FaClock/>&nbsp;Start time</label>
                    <input name="time" type="time" className="form-control"/>
                </div>
                <div className="p-2 overflow-auto">
                    <button onClick={closeForm} className="btn btn-danger float-start">Cancel</button><button className="btn btn-success float-end">Submit</button>
                </div>
            </div>
        </section>
    )
}

export default BookingForm;

