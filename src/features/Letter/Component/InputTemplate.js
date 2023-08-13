import { FaInfoCircle, FaPen, FaSignature,FaUpload,FaSave} from "react-icons/fa";
import { useIncInputSize } from "../hooks/useIncInputSize";
import { useRef,useEffect } from "react";
import Signature from "../../../assets/images/signature.jpg";
import InputContainer from "./InputContainer";

export default function InputTemplate({handleInput,handleSignatureInput,details,saveChanges}){

    const signatureImageRef = useRef();
    const fileInputRef = useRef();
    

    const{inputRef:address1Ref,incInputSize:incAddress1Input} = useIncInputSize();
    const{inputRef:address2Ref,incInputSize:incAddress2Input} = useIncInputSize();
    const{inputRef:introRef,incInputSize:incIntroInput} = useIncInputSize();
    const{inputRef:bodyRef,incInputSize:incBodyInput} = useIncInputSize();
    const{inputRef:endingRef,incInputSize:incEndingInput} = useIncInputSize();


    useEffect(()=>{
             let savedSignature = localStorage.getItem("signature-image");

             if(!(signatureImageRef.current && savedSignature)) return;

             signatureImageRef.current.src = savedSignature;

    },[signatureImageRef]);

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
            <div className="row">
                <div className="col-12 col-lg-6">
                    <InputContainer name="Sender Postal Address"  value={details.address1} saveChanges={saveChanges}>
                        <textarea ref={address1Ref} type="text" name="address1" value={details.address1} onChange={(e)=>{incAddress1Input();handleInput(e);}} placeholder="Your Residential Address/postal Address" className="form-control"/>
                    </InputContainer>
                </div>
                <div className="col-12 col-lg-6">
                    <InputContainer name="Date of Writing" value={details.date} saveChanges={saveChanges}>
                        <input type="date" name="date" value={details.date}  onChange={handleInput}   className="form-control"/>
                    </InputContainer>
                </div>

                <div className="col-12 col-lg-6">
                    <InputContainer name="Receiver Postal Address"  value={details.address2} saveChanges={saveChanges}>
                        <p className="text-info text-center">
                            <FaInfoCircle/>&nbsp;The company or person you're writing to postal address.
                        </p>
                        <textarea ref={address2Ref}   type="text" name="address2" value={details.address2}  onChange={(e)=>{incAddress2Input();handleInput(e);}}  placeholder="Company Address" className="form-control"/>
                    </InputContainer>
                </div>

                <div className="col-12 col-lg-6">
                    <InputContainer name="Receiver title"  value={details.person} saveChanges={saveChanges}>
                        <input name="person" value={details.person}   onChange={handleInput} placeholder="e.g. Sir/Madam" className="form-control"/>
                    </InputContainer>
                </div>
            </div>
    
            <InputContainer name="Heading"  value={details.subject} saveChanges={saveChanges}>
                <input name="subject" value={details.subject}  onChange={handleInput} placeholder="e.g. Application for cashier position"   className="form-control"/>
            </InputContainer>    

            <InputContainer name="Introduction or First Paragraph"   value={details.intro} saveChanges={saveChanges} >
                <p>
                    Why are you writing this letter?
                </p>
                <textarea ref={introRef}  name="intro" value={details.intro}  onChange={(e)=>{incIntroInput();handleInput(e)}} className="form-control" placeholder="e.g I am writing to.."/>
            </InputContainer>
           
            <InputContainer name="Body"   value={details.body} saveChanges={saveChanges}>
                <textarea  ref={bodyRef}  name="body" value={details.body}  onChange={(e)=>{incBodyInput();handleInput(e);}}   className="form-control" placeholder="...."/>       
            </InputContainer>
           
           <InputContainer name="Last Paragraph"   value={details.ending} saveChanges={saveChanges}>
                <textarea ref={endingRef} name="ending" value={details.ending}  onChange={(e)=>{incEndingInput();handleInput(e);}} className="form-control"placeholder="e.g. Thank you for  your time and.."/>
           </InputContainer>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <InputContainer name="Sender Name" saveChanges={saveChanges}>
                        <input type="text" name="names" value={details.names}  onChange={handleInput}   className="form-control" placeholder="e.g. Siyabonga Vilakazi"/>
                    </InputContainer>
                </div>
                <div className="col-12 col-lg-6">
                    <InputContainer name="Sender Signature"   value={details.signature} saveChanges={saveChanges}>
                        <div   div className="text-center text-info p-2">
                            <FaPen/>&nbsp;Write your signature in a blank white paper using a black pen, and upload the image here.
                        </div>
                        <div className="text-center p-2">
                            <label className="btn btn-primary" htmlFor="signature-image-input"><FaUpload/> Upload Signature</label>
                            <input className="d-none" id="signature-image-input" ref={fileInputRef} name="names" value={details.signature}  onChange={displayImage} type="file"  accept="image/*"/>
                        </div>
                        <div className="text-center p-2">
                            <img ref={signatureImageRef} src={Signature} alt="Signature" width="100"/>
                        </div>
                    </InputContainer>
                </div>
            </div>
        </div>
    );
}