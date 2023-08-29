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
             <a  href="https://siyabongahenry.github.io/ParabolaFunction/">Parabola Functions</a>
            </div>    
        </div>
    );
}