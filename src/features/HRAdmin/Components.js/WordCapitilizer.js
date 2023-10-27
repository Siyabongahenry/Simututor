import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";

const WordCapitilizer = ()=>{

    const[words,setWords] = useState("");

    const handleInput = (e)=>{
            const upperCaseInput = (e.target.value).toUpperCase();
            setWords(upperCaseInput);
            copy(upperCaseInput);
            
    }

    const copyWords = ()=>{
        copy(words)
    }

    return(
        <section>
            <h3 className="text-white text-center">Word Capitilization</h3>
            <div className="input-group">
                <textarea name="words" className="form-control" value={words} onChange={handleInput} placeholder="Type or Paste your words here.."/>
                <button className="btn btn-primary" onClick={copyWords}><FaCopy/></button>
            </div>
        </section>
    );
}

export default WordCapitilizer;