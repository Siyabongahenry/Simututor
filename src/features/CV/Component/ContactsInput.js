import{useContext, useEffect, useState} from "react";
import InputsContainer from "./InputsContainer";
import { FaPhone } from "react-icons/fa";
import { CVOwnerContext } from "..";
export default function ContactsInput({saveContacts})
{

    const{contacts:_contacts} = useContext(CVOwnerContext);

    
    const[contacts,setContacts] = useState({
        mobileNo:"",
        alternative:"",
        email:"",
        home:""
    });

    useEffect(()=>{
        const addContacts=()=>{
            setContacts({..._contacts});
        }
        addContacts();
    },[_contacts]);

    const handleInput =(e)=>{
        setContacts({...contacts,[e.target.name]:e.target.value});
    }

    return(
        <InputsContainer icon={<FaPhone/>} headerText="Contacts information" savefunc={()=>{saveContacts(contacts)}}>           
             <div className="row">
                <div className="col-12 col-lg-6">
                    <label className="form-label">Mobile No</label>
                    <input name="mobileNo" value={contacts.mobileNo} onChange={handleInput}  className="form-control" placeholder="Example: 072 588 2344"/>
                </div>
                <div className="col-12 col-lg-6">
                    <label className="form-label">Alternative</label>
                    <input name="alternative" value={contacts.alternative} onChange={handleInput} className="form-control" placeholder="Example: 066 576 9906"/>
                </div>
                <div className="col-12 col-lg-6">
                    <label className="form-label">Home Contact</label>
                    <input name="home" value={contacts.home} onChange={handleInput} className="form-control" placeholder="Example: 073 789 9980"/>   
                </div>
                <div className="col-12 col-lg-6">
                    <label className="form-label">Email</label>
                    <input name="email" value={contacts.email} onChange={handleInput} className="form-control" placeholder="Example: siyabonga@gmail.com"/>
                </div>
            </div>
        </InputsContainer>
    );
}