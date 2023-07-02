import "./login.css";
export default function Login(){
    return(
        <div className="container" >
            <div className="login-container">
                <form className="text-center">
                    <h1 className="text-theme">Login</h1>
                    <div className="p-2">
                        <input className="form-control" name="email" type="email" placeholder="john@gmail.com"/>
                    </div>
                    <div className="p-2">
                        <input className="form-control" name="password" type="password" placeholder="password"/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}