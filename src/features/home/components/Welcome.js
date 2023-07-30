import "./welcome.css";
import Chatbox from "./Chatbox";
import { useEffect, useState } from "react";

const messages = ["Hi.",
     "Looking for a fast way of creating your CV or Applying, you're at the rigt place.",
    ];

let isFirstRender = true;

export default function Welcome()
{
    
    const[chats,setChats] = useState([]);

    useEffect(()=>{
        if(!isFirstRender) return;
        isFirstRender = false;
        (()=>
        {
            for(let i=0; i< messages.length;i++)
            {
                setTimeout(()=>{
                    setChats(prev=>[...prev,messages[i]]);
                },i*2000);
            }
        })();
       
    },[]);

    

    return(
        <div className="text-center welcome-">
            <h1 className="text-white p-2 sow" >Do it the easy way.</h1>
            <svg className="chatting-robot" width="100" height="100">
                <path d="M10 40 C10 10 90 10 90 40" stroke="white" strokeWidth="2" fill="transparent"/>
                <circle className="eye"  cx="30" cy="40" r="10" stroke="black" strokeWidth="2" fill="white"/>
                <circle className="eye" cx="70" cy="40" r="10"stroke="black" strokeWidth="2" fill="white"/>
                <ellipse className="mouth" cx="50" cy="60" rx="15" ry="3" stroke="white"/>
            </svg>
            
            {
                chats.map((chat,index)=>
                    <div className="p-2" key={index}>
                        <Chatbox  message={chat}/>
                    </div>
                )
            }
                
            
        </div>
    );
}