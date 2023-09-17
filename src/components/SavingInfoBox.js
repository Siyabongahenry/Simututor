import { FaFilePdf, FaInfoCircle, FaLaptop, FaMobile } from "react-icons/fa";
const SavingInfoBox = ()=>{
    return(
        <section className="alert alert-info d-inline-block">
            <p>
                <FaInfoCircle/> 
            </p>
            <p className="text-start">
                &nbsp;
                <h3>HOW TO SAVE YOUR CV IN YOUR MOBILE DEVICE <FaMobile/></h3>
                <ol>
                    <li>Click the "SAVE MY CV" button below</li>
                    <li>Look for "PAPER SIZE" and select A4</li>
                    <li>Now click the yellow pdf download button</li>
                    <li>Choose a folder in your device and press save</li>

                </ol>
            </p>
            <p>
                <FaLaptop/>&nbsp;If you're using a Desktop select "Print To PDF", then "Print" to save your document Locally.
            </p>
        </section>
    )
}

export default SavingInfoBox;