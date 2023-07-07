import{useState} from "react";
import InputsContainer from "./InputsContainer";
import { FaPhone } from "react-icons/fa";
export default function ContactsInput({contacts:_contacts,saveContacts})
{
    const[contacts,setContact] = useState({
        mobileNo:"",
        alternative:"",
        email:"",
        home:""
    });

    const handleInput =(e)=>{
        setContact({...contacts,[e.target.name]:e.target.value});
    }

    return(
        <InputsContainer icon={<FaPhone/>} headerText="Contacts information" savefunc={()=>{saveContacts(contacts)}}>           
            <label className="form-label">Mobile No</label>
            <input name="cellNo" value={contacts.mobileNo} onChange={handleInput}  className="form-control" placeholder="Example: 072 588 2344"/>
           
            <label className="form-label">Alternative</label>
            <input name="email" value={contacts.alternative} onChange={handleInput} className="form-control" placeholder="Example: 066 576 9906"/>
            
            <label className="form-label">Email</label>
            <input name="email" value={contacts.email} onChange={handleInput} className="form-control" placeholder="Example: siyabonga@gmail.com"/>
        
            <label className="form-label">Home Contact</label>
            <input name="home" value={contacts.home} onChange={handleInput} className="form-control" placeholder="Example: 073 789 9980"/>   
        </InputsContainer>
    );
}