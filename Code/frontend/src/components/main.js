const MainForHomePage=()=>{
    return(
        <div className="container py-5">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-sm-8 col-md-6 my-3 mx-auto">
                    <h1>Be healthy Be Happy</h1>
                    <p>Are you concern about your health, weight and need a diet plan. We are here to help.</p>
                    <span>
                        <a className="btn btn-black my-1" href="#plan">request deit plane</a>
                        <a className="btn btn-black my-1" href="#plan">request trainning plane</a>
                    </span>
                </div>
                <div className="col-lg-5 col-sm-9 col-md-6 mx-auto">
                    <form className="card card-body">
                        <h3>Subscribe for our newsletter!</h3>
                        <input className="form-control my-2" placeholder="Name" required/>
                        <input className="form-control my-2" type="email" placeholder="Email"/>
                        <button className="btn btn-lg btn-black mx-auto my-2 w-75">Subscribe</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export {MainForHomePage}