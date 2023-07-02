export default function Signup()
{
    return(
        <div className="container">
            <h1 className="text-center text-theme">Sign Up</h1>
            <form> 
                <div className="p-2">
                    <label className="form-label text-white">First Name<sup className="text-danger">*</sup></label>
                    <input className="form-control" type="text" name="firstName" placeholder="example: John"/>
                </div>
                <div className="p-2">
                    <label className="form-label text-white">Last Name<sup className="text-danger">*</sup></label>
                    <input className="form-control" type="text" name="lastName" placeholder="example: Nkosi"/>
                </div>
                <div className="p-2">
                    <label className="form-label text-white">Email<sup className="text-danger">*</sup></label>
                    <input className="form-control" name="email" type="email" placeholder="example: siyavil@gmail.com"/>
                </div>
                <div className="p-2">
                    <label className="form-label text-white">New Password<sup className="text-danger">*</sup></label>
                    <input className="form-control" name="password" type="password" placeholder="Create password"/>
                </div>
                <div className="p-2">
                    <label className="form-label text-white">Confirm Password<sup className="text-danger">*</sup></label>
                    <input className="form-control" name="confirmPassword" type="password" placeholder="Confirm password"/>
                </div>
            </form>
        </div>
    );
}