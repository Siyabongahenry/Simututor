import { useState } from "react";
import { FaCamera, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { priceFormat } from "../../../utils/formatCurrency";
import CameraImage from "./camera-man2.jpg";
import VideoCameraImage from "./camera-man.jpg";
import{NavLink} from "react-router-dom";

const Item =({item,incHours,decHours})=>{

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
                <div className="text-center p-2">
                    <NavLink to={`bookings/id=${item.id}`} className="btn btn-secondary">Book Now</NavLink>
                </div>      
            }
        </div>
    )
}

export default Item;