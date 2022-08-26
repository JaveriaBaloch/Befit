function Contact_Us(){

    return(
        <section className="row" id="Contact">
            <main>
            <div className="heading mx-auto">
                    <h1 className="text-center mt-3 text-black">Contact Us!</h1>
                    <div className="mx-auto mb-1 bg-black"/>
            </div>
            </main>
        
        <div className="container-fluid py-5">
            
            <div className="row my-1 pb-5">
                
                <div className="mx-auto my-1 mb-5">
                    <div className="card card-body bg-blue mx-auto">
                        <div className="part1 my-auto">
                            Email : <a href="mailto:Befit@gmail.org" className="text-black my-3  text-decoration-none">Befit@gmail.org</a>
                            <br/>
                            <br/>
                            Phone:<a href="tel:+178473998476" className="text-black my-3  text-decoration-none"> +1 78473998476</a>
                            <br/>
                            <br/>
                            Address: <a href="#address" className="text-black my-3 text-decoration-none">4 N Harvard Street, Aberdeen,sd, 53401  United States</a>
                        </div>
                        <div className="part2">
                        <input className="form-control my-2" placeholder="Name" required/>
                        <input className="form-control my-2" type="email" placeholder="Email"/>
                        <textarea className="form-control my-2" placeholder="Message" cols="10" rows="10"></textarea>
                        <button className="btn btn-black btn-lg">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Contact_Us;