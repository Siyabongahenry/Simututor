import{useContext, useEffect, useState} from "react";
import CreatePropInput from "./CreatePropInput";
import InputsContainer from "./InputsContainer";
import { FaAddressBook } from "react-icons/fa";
import { CVOwnerContext } from "..";
export default function AddressInput({saveAddress})
{
    const{address:_address} = useContext(CVOwnerContext);

    const[address,setAddress] = useState({
        surbub:"",
        town:"",
        postalCode:""
    });

    useEffect(()=>{
        if(!_address) return;

        setAddress({..._address});

    },[_address]);

    const handleInput =(e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }
    
    return(
        <InputsContainer icon={<FaAddressBook/>} headerText="Residential Address" savefunc={()=>{saveAddress(address)}}>          
            <div className="row">
                <div className="col-12 col-lg-4">
                    <CreatePropInput labelName="Surbub" name="surbub" value={address.surbub} onChange={handleInput} placeholder="Emzinoni Township" />
                </div>
                <div className="col-12 col-lg-4">
                    <CreatePropInput labelName="City/Town" name="town" value={address.town} onChange={handleInput} placeholder="Bethal" />
                </div>
                <div className="col-12 col-lg-4">
                    <CreatePropInput labelName="Postal Code" name="postalCode" value={address.postalCode} onChange={handleInput} placeholder="2310" />
                </div>
            </div>
        </InputsContainer>
    )
}