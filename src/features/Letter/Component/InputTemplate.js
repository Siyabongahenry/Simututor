import { FaEdit, FaInfoCircle, FaPen, FaSignature,FaUpload,FaSave} from "react-icons/fa";
import { useIncInputSize } from "../hooks/useIncInputSize";
import { useRef,useEffect } from "react";
import Signature from "../../../assets/images/signature.jpg";

export default function InputTemplate({handleInput,handleSignatureInput,details,saveChanges}){

    const signatureImageRef = useRef();
    const fileInputRef = useRef();
    

    const{inputRef:address1Ref,incInputSize:incAddress1Input} = useIncInputSize();
    const{inputRef:address2Ref,incInputSize:incAddress2Input} = useIncInputSize();
    const{inputRef:introRef,incInputSize:incIntroInput} = useIncInputSize();
    const{inputRef:bodyRef,incInputSize:incBodyInput} = useIncInputSize();
    const{inputRef:endingRef,incInputSize:incEndingInput} = useIncInputSize();


    useEffect(()=>{
             signatureImageRef.current.src = localStorage.getItem("signature-image");
    },[]);

    const displayImage = ()=>{
        let img = signatureImageRef.current;
        let input = fileInputRef.current;

        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                img.src = e.target.result;
                img.display = "initial";
                handleSignatureInput(e.target.result);
                localStorage.setItem("signature-image",e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

    return(
        <div className="container p-2 text-white">
            <div  className="border rounded p-2 mb-2">
                <h4>Address 1&nbsp;<FaEdit/></h4>
                <p className="text-info text-center">
                    <FaInfoCircle/>&nbsp; Your postal address.
                </p>
                <textarea ref={address1Ref} type="text" name="address1" value={details.address1} onChange={(e)=>{incAddress1Input();handleInput(e);}} placeholder="Your Residential Address/postal Address" className="form-control"/>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges} disabled={details.address1===""}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
            <div  className="border rounded p-2 mb-2">   
                <h4>Writing Date&nbsp;<FaEdit/></h4>
                <input type="date" name="date" value={details.date}  onChange={handleInput}   className="form-control"/>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
            <div  className="border rounded p-2 mb-2">
                <h4>Address 2&nbsp;<FaEdit/></h4>
                <p className="text-info text-center">
                    <FaInfoCircle/>&nbsp;The company or person you're writing to postal address.
                </p>
                <textarea ref={address2Ref}   type="text" name="address2" value={details.address2}  onChange={(e)=>{incAddress2Input();handleInput(e);}}  placeholder="Company Address" className="form-control"/>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
            <div  className="border rounded p-2 mb-2">   
                <h4>Subject&nbsp;<FaEdit/></h4>
                <p className="text-info text-center">
                    <FaInfoCircle/>&nbsp;What is this letter for?
                </p>
                <input name="subject" value={details.subject}  onChange={handleInput} placeholder="e.g. Application for cashier position"   className="form-control"/>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
            <div className="border rounded p-2 mb-2">
                <h4>Person You Are Writing To&nbsp;<FaEdit/></h4>
                <input name="person" value={details.person}   onChange={handleInput} placeholder="e.g. Sir/Madam" className="form-control"/>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
            <div  className="border rounded p-2 mb-2">
                <h4>Introduction&nbsp;<FaEdit/></h4>
                <textarea ref={introRef}  name="intro" value={details.intro}  onChange={(e)=>{incIntroInput();handleInput(e)}} className="form-control" placeholder="e.g I am writing to.."/>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
            <div  className="border rounded p-2 mb-2">
                <h4>Body&nbsp;<FaEdit/></h4>
                <textarea  ref={bodyRef}  name="body" value={details.body}  onChange={(e)=>{incBodyInput();handleInput(e);}}   className="form-control" placeholder="...."/>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
            <div  className="border rounded p-2 mb-2">
                <h4>Ending Paragraph&nbsp;<FaEdit/></h4>
                <textarea ref={endingRef} name="ending" value={details.ending}  onChange={(e)=>{incEndingInput();handleInput(e);}} className="form-control"placeholder="e.g. Thank you for  your time and.."/>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
            <div  className="border rounded p-2 mb-2">   
                <h4>You Name and Surname&nbsp;<FaEdit/></h4>
                <input type="text" name="names" value={details.signatureFile}  onChange={handleInput}   className="form-control" placeholder="e.g. Andile Nkosi"/>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
            <div  className="border rounded p-2 mb-2">   
                <h4>Signature&nbsp;<FaSignature/></h4>
                <div className="text-center text-info p-2">
                    <FaPen/>&nbsp;Write your signature in a blank white paper using a black pen, and upload the image here.
                </div>
                <div className="text-center p-2">
                    <label className="btn btn-primary" htmlFor="signature-image-input"><FaUpload/> Upload Signature</label>
                    <input className="d-none" id="signature-image-input" ref={fileInputRef} name="names" value={details.signature}  onChange={displayImage} type="file"  accept="image/*"/>
                </div>
                <div className="text-center p-2">
                    <img ref={signatureImageRef} src={Signature} alt="Signature" width="100"/>
                </div>
                <div className="text-center p-2">
                    <button className="btn btn-primary" onClick={saveChanges} disabled={details.value ===""}><FaSave/>&nbsp;save changes</button>
                </div>
            </div>
        </div>
    );
}