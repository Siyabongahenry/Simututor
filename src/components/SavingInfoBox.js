import { FaInfoCircle, FaLaptop, FaMobile } from "react-icons/fa";
const SavingInfoBox = ()=>{
    return(
        <div className="alert alert-info d-inline-block">
            <p>
                <FaInfoCircle/> 
            </p>
            <p>
                <FaMobile/>&nbsp;
                To save your document as a PDF please click the button below and click "Save as PDF"
                if you're using a mobile device.
            </p>
            <p>
                <FaLaptop/>&nbsp;If you're using a Desktop select "Print To PDF", then "Print" to save your document Locally.
            </p>
        </div>
    )
}

export default SavingInfoBox;