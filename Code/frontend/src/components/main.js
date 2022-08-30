import { useState,useEffect } from "react"
import axios from "axios"
const MainForHomePage=()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [error,setError] = useState("")
    const [cls,setCls] = useState("")
    const subscription=(e) =>{
        e.preventDefault()
        if(email !== "" && name !==""){
            axios.post("http://localhost:3001/Subscribe",{name,email}).then((e)=>{
                console.log(e.data)
                    if(e.data.res=="success"){
                    setError("Subscribed!")
                    setCls("alert alert-primary")
                    }else{
                        setError("already subscribed!")
                        setCls("alert alert-danger")
                    }
                }
            ).catch(err=>{
                setError("Failed to subscribe!")
                setCls("alert alert-danger")
            })
        }else{
            setError("All flieds are required!")
            setCls("alert alert-danger")
        }
    }
    return(
        <div className="container py-5" id="#Contact">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-sm-8 col-md-6 my-3 mx-auto">
                    <h1>Be Healthy Be Happy</h1>
                    <p>Are you concerned about your health, weight and need a diet plan? We are here to help!</p>
                    <span>
                        <a className="btn btn-black my-1" href="#plan">Request Diet Plan</a>
                        <a className="btn btn-black my-1" href="#plan">Request Training Plan</a>
                    </span>
                </div>
                <div className="col-lg-5 col-sm-9 col-md-6 mx-auto">
                    {error!=="" && <div className={cls}>{error}</div>}
                    <form className="card card-body" onSubmit={e=>subscription(e)}>
                        <h3>Subscribe to our newsletter</h3>
                        <input className="form-control my-2" placeholder="Name" required onChange={e=>setName(e.target.value)}/>
                        <input className="form-control my-2" type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                        <button className="btn btn-lg btn-black mx-auto my-2 w-75">Subscribe</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
function QueriesMainPage (){
    return(<div className="container py-5 text-center" >
               <h1 className="mx-auto">Your Queries</h1>
        </div>
    )
}
export {MainForHomePage, QueriesMainPage}