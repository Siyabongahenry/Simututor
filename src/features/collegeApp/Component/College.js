const College =({college})=>{
    return(
        <section className="bg-white p-2">
            <h2 className="bg-theme text-white text-center">{college.name}</h2>
            <div className="border p-1 mt-1 mb-1 rounded">
                <p>
                    Opening Date: {college.openingDate}
                </p>
                <p>
                    Opening Date: {college.closingDate}
                </p>
            </div>
            <div className="row text-center">
                <div className="col-6">
                    <a className="btn btn-secondary" href={college.homePage}>View Home Page</a>
                </div>
                <div className="col-6">
                    <a className="btn btn-primary" href={college.applicationLink}>Online Application</a>
                </div>
            </div>
        </section>
    )
}

export default College;