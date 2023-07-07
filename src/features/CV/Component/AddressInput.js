import{useState} from "react";
import CreatePropInput from "./CreatePropInput";
import InputsContainer from "./InputsContainer";
import { FaAddressBook } from "react-icons/fa";
export default function AddressInput({address:_address,saveAddress})
{
    const[address,setAddress] = useState({
        surbub:"",
        town:"",
        postalCode:""
    });
    const handleInput =(e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }
    return(
        <InputsContainer icon={<FaAddressBook/>} headerText="Residential Address" savefunc={()=>{saveAddress(address)}}>          
            <CreatePropInput labelName="Surbub" name="suburb" value={address.surbub} onChange={handleInput} placeholder="Emzinoni Township" />
            <CreatePropInput labelName="City/Town" name="town" value={address.town} onChange={handleInput} placeholder="Bethal" />
            <CreatePropInput labelName="Postal Code" name="postalCode" value={address.postalCode} onChange={handleInput} placeholder="2310" />
        </InputsContainer>
    )
}