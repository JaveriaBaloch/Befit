import { useState,useEffect } from "react"
import { collection,addDoc } from "firebase/firestore"
import {db} from "../firebase/firebase-config"
const MainForHomePage=()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [error,setError] = useState("")
    const subCollectionRef = collection(db,"subscriptions")
    const subscription = async(e) =>{
        e.preventDefault()
        if(email !== "" && name !==""){
        await addDoc(subCollectionRef,{name:name,email:email})
        }else{
            setError("missing")
        }
    }
    return(
        <div className="container py-5" id="#Contact">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-sm-8 col-md-6 my-3 mx-auto">
                    <h1>Be Healthy Be Happy</h1>
                    <p>Are you concerned about your health, weight and need a diet plan? We are here to help!</p>
                    <span>
                        <a className="btn btn-black my-1" href="#plan">Request diet plane</a>
                        <a className="btn btn-black my-1" href="#plan">Request training plane</a>
                    </span>
                </div>
                <div className="col-lg-5 col-sm-9 col-md-6 mx-auto">
                    {error=="missing" && <div className="alert alert-danger">All fields are required!</div>}
                    <form className="card card-body">
                        <h3>Subscribe to our newsletter</h3>
                        <input className="form-control my-2" placeholder="Name" required onChange={e=>setName(e.target.value)}/>
                        <input className="form-control my-2" type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                        <button className="btn btn-lg btn-black mx-auto my-2 w-75" onClick={e=>subscription(e)}>Subscribe</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export {MainForHomePage}