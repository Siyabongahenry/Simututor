import { useFetch } from "../hooks/useFetch"

const Fetch = (url,renderSuccess,renderError=null,renderLoading=null)=>{

    const{loading,error,data} = useFetch(url);
     
    if(loading) return renderLoading?<p>Loading please wait..</p>:renderLoading;

    if(error) return renderError?<p>An error occured..</p>:renderError(error);

    return renderSuccess(data);
}
export default Fetch;