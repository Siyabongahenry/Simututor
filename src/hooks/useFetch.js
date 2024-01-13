import { useEffect, useState } from "react";

export const useFetch = async(url)=>{

    const[data,setData] = useState();
    const[error,setError] = useState();
    const[loading,setLoading] =useState();

    useEffect(()=>{

        if(!url) return;

        fetch(url)
        .then(data=>data.json())
        .then(setData)
        .then(()=>setLoading(false))
        .catch(setError)

    },[url])

    return {loading,data,error};
}