import img from "../img/homepage/Asset 2-20.jpg"
import img1 from "../img/homepage/food1.png"
import img2 from "../img/homepage/tranning.png"
import {Link} from "react-router-dom"
import Calculate from '../components/calculator'
import {MainForHomePage} from '../components/main'
function Home(){
 return(<div>
            <main>
                <MainForHomePage/>
            </main>
            <Calculate/>
            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="card card-body mx-auto card-why">
                            <div className="d-flex">
                                <div className="img d-xsm-none d-lg-block d-md-none d-sm-none">
                                    <img src={img}/>
                                </div>
                                <div className="text ms-4">
                                        <div className="heading">
                                            <h1 className="text-blue">why BMI is Important?</h1>
                                            <div className="mb-3"/>
                                        </div>
                                        <p>BMI assists researchers in learning the pattern of eating that contributes to obesity in a population or collection of people. Knowing one's BMI allows medical professionals to reduce the health risks connected with obesity. However, it is a simplistic formula that does not discriminate between fat and lean muscle tissue. It also does not take into account whether the fat is subcutaneous or visceral. If you have any concerns, speak with your doctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-4 homepageEnd">
                <div className="container mt-5 pb-4">
                    <div className="heading mb-5 mx-auto">
                        <h1 className="text-white">Still Worried about your Health!</h1>
                        <div className="mb-3 mx-auto bg-white"/>
                    </div>
                    <div className="row d-flex justify-content-center" id="plan">
                        <div className=" col-5 d-xl-none d-lg-block d-md-none d-xsm-none d-sm-none mx-auto">
                            <img src={img1}/>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mx-4 my-3">
                            <div className="card card-body">
                                <h3>Request trainning</h3>
                                <div className="mx-auto">
                                    <Link to="/Register" className="btn btn-black">Request</Link>
                                    <Link to="/login" className="btn btn-black">Login</Link>
                                </div>
                                </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 col-md-5 col-sm-10 mx-4 my-3">
                            <div className="card card-body">
                                <h3>Request a Diet plan</h3>
                                <div className="mx-auto">
                                    <Link to="/Register" className="btn btn-black">Request</Link>
                                    <Link to="/login" className="btn btn-black">Login</Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-xsm-none col-5 d-xl-none d-lg-block d-md-none d-sm-none mx-auto">
                            <img src={img2}/>
                        </div>
            </div>
                </div>
            </section>
      </div>)
}
export default Home