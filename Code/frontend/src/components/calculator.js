import img from "../img/homepage/Asset 6-20.jpg"
function Calculate(){
    return( 
    <section className="my-5 BMI-Calculator">
         <div className="heading mx-auto">
            <h1 className="text-center mt-3">Check your BMI!</h1>
            <div className="mx-auto mb-4"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-8 mx-auto">
                    <div className="card card-body text-center blue-card">
                        <div>
                            <h2>BMI Calculator</h2>
                            <hr/>
                        </div>
                        <input className="form-control my-2" placeholder="Name" required/>
                        <input className="form-control my-2" placeholder="Weight" required/>
                        <input className="form-control my-2" placeholder="Height" required/>
                        <input className="form-control my-2" placeholder="Age" required/>
                        <button class="btn button active mx-auto text-black">Calculator</button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-8 mx-auto my-3">
                    <h3>Findings</h3>
                    <p>Results:</p>
                </div>
                <div className="d-xsm-none col-lg-4 ms-auto d-lg-block d-md-none d-sm-none">
                     <img src={img}/>
                </div>
            </div>
        </div>
    </section>
)}
export default Calculate