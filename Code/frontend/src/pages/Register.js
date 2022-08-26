function Register(){

    return(
        <section className="row" id="Contact">
            {/* <main>
            <div className="heading mx-auto">
                    <h1 className="text-center mt-3 text-black">Register!</h1>
                    <div className="mx-auto mb-1 bg-black"/>
            </div>
            </main> */}
        
        <div className="container-fluid py-5">
            
            <div className="row my-1 pb-5">
                
                <div className="mx-auto my-1 mb-5 pb-5 mb-5">
                    <div className="card col-lg-7 col-md-8 col-sm-10 mx-auto mb-5">
                        <div className="card-header">
                            <h1 className="text-center mt-3 text-black">Register!</h1>
                        </div>
                        <div className="card-body">
                        <input className="form-control my-2" placeholder="Name" required/>
                        <input className="form-control my-2" type="email" placeholder="Email" required/>
                        <input className="form-control my-2" type="password" placeholder="Password" required/>
                        <input className="form-control my-2" type="password" placeholder="Confirm Password" required/>
                        <input className="form-control my-2" type="file" placeholder="Profile Picture" required/>

                        <button className="btn btn-black btn-lg w-100 mx-auto">Register</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register;