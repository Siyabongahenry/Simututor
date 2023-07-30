import { useRef } from "react";

export function useIncInputSize(input)
{
    const inputRef = useRef();

    const incInputSize=()=>{
        const input = inputRef.current;
        input.style.height = "auto";
        input.style.height = input.scrollHeight + "px";
    }

    return {inputRef,incInputSize}
}