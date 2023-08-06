import { useState } from "react";
import Items from "./Component/Items";

const PhotoShoot = ()=>{
    const[items,setItems] = useState([
        {
            name:"Videoshoot",
            hours:1,
            originalCost:146.5,
            cost:146.5,
            photographer:"Phillo"
        },
        {
            name:"Photoshoot",
            hours:1,
            originalCost:245.5,
            cost:245.5,
            photographer:"Phillo"
        }
    ]);

    const incHours =(item)=>{
        let newItems = items.map(_item=>{
            if(_item.name === item.name)
            {
                _item.hours =_item.hours + 0.5;
                _item.cost =_item.originalCost * _item.hours;
            }
            return _item;
        });

        setItems(newItems);
    }
    const decHours=(item)=>{
        let newItems = items.map(_item=>{
            if(_item.name === item.name && _item.hours > 1)
            {
                _item.hours =_item.hours - 0.5;
                _item.cost =_item.originalCost * _item.hours;
            }
            return _item;
        });

        setItems(newItems);
    }

    return(
        <div className="container-fluid">
            <h1 className="text-theme text-center">Photo/Video Booking</h1>
            <Items items={items} incHours={incHours} decHours={decHours}/>
        </div>
    );
}

export default PhotoShoot;