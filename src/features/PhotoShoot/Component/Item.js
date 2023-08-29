import { useState } from "react";
import { FaCamera, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import BookingForm from "./BookingForm";
import { priceFormat } from "../../../utils/formatCurrency";
import CameraImage from "./camera-man2.jpg";
import VideoCameraImage from "./camera-man.jpg";

const Item =({item,incHours,decHours})=>{
    const[bookindFormTogler,setBookingFormToddle] = useState(false);

    const closeForm = ()=>{
        setBookingFormToddle(false);
    }
    return(      
        <div className="bg-white p-2 border rounded">
            <h2>{item.name} </h2>
            <b className="fst-italic text-theme">
               <FaCamera/>&nbsp;{item.photographer}
            </b>
            <div className="text-center">
                {
                  <img src={item.name==="Videoshoot"?VideoCameraImage:CameraImage} height="200px"/>
                }
                
            </div>
            <div className="display-6">
                Hours&nbsp;<FaMinus  onClick={()=>{decHours(item)}}/>
                <span className="d-inline-block text-center" style={{width:"60px"}}>{item.hours}</span>
                <FaPlus onClick={()=>{incHours(item)}}/>
            </div>
            <div>
                Cost:&nbsp;{priceFormat(item.cost)}
            </div> 
            {
                bookindFormTogler 
                && 
                <div className="border p-2">
                    <div className="text-end">
                        <FaTimes className="text-danger" onClick={()=>{setBookingFormToddle(false)}}/>
                    </div>
                    <BookingForm item={item} closeForm={closeForm}/>
                </div>
            }
            {     
                !bookindFormTogler &&
                <div className="text-center p-2">
                    <button onClick={()=>{setBookingFormToddle(true)}} className="btn btn-secondary">Book Now</button>
                </div>      
            }
        </div>
    )
}

export default Item;