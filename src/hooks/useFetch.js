export const usePost = async(url,content)=>{

    const response = await useFetch("http:localhost:5000/api"+url,{
        method:"POST",
        headers:{
            contentType:""
        },
        body:JSON.stringify(content)
    });


    return response.JSON();
}