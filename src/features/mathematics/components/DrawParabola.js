import { useState } from "react";
import{convertToCurvePath} from "../../../utils/convertToSVGPath";

const initCurvePoints={
    x1:50,
    y1:50,
    x2:90,
    y2:116,
    x3:110,
    y3:116,
    x4:150,
    y4:50
}

export default function DrawParabola({isForBeginners=true}){

    const[equationObj,setEquationObj] = useState({
        a:1,
        p:0,
        q:0
    });

    const[curvePoints,setCurvePoints] = useState({...initCurvePoints});

    const inputHandler = (e)=>{
        setEquationObj((prev)=>
            ({
                ...prev,
                [e.target.name]:parseInt(e.target.value)
            }));
    }
    return(
        <div className="text-center">
             <div>
                {
                    isForBeginners || !Math.abs(equationObj.p)?
                    <div>
                        f(x) = {equationObj.a===1?"":equationObj.a}x<sup>2</sup>
                        {Math.abs(equationObj.q) ===0?"":equationObj.q>0?"+"+equationObj.q:equationObj.q}
                    </div>:
                    <div>
                        f(x) = {equationObj.a}(x {equationObj.p})<sup>2</sup>
                        {Math.abs(equationObj.q) ===0?"":equationObj.q>0?"+"+equationObj.q:equationObj.q}
                    </div>
                }
            </div>
            <svg  width="200" height="200" viewBox="0 0 200 200">
                <path d={convertToCurvePath(curvePoints)} strokeWidth="2" stroke="red" fill="none"/>
                <line x1="100" y1="0" x2="100" y2="200" stroke="black" strokeWidth="2"/>
                <line x1="0" y1="100" x2="200" y2="100" stroke="black" strokeWidth="2"/>
            </svg>
            <div>
                <input name="a" value={equationObj.a}   type="range" min="1" max="10" onChange={inputHandler}/>
                a = {equationObj.a}
            </div>
            {
                !isForBeginners &&
                <div>
                    <input name="p" value={equationObj.p}   type="range" min="-5" max="5" onChange={inputHandler}/>
                    p = {equationObj.p}
                </div> 
            } 
            <div>
                <input name="q" value={equationObj.q}   type="range" min="-5" max="5" onChange={inputHandler}/>
                q = {equationObj.q}
            </div>      
        </div>
    );
}