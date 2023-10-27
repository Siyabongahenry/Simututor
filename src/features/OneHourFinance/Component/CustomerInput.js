const CustomerInput =()=>{
    return (
        <section>
            <h3>Fill in the Form Below</h3>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <label>Amount</label>
                    <input className="form-control"/>
                </div>
                <div className="col-12 col-lg-6">
                    <label>Date of Return</label>
                    <input className="form-control"/>
                </div>
            </div>
            
        </section>
    )
}
export default CustomerInput;