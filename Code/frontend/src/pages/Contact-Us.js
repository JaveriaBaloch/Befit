import axios from 'axios'
import {useState} from 'react'

function Contact_Us(){
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [msg,setMsg] = useState("")
    const [cls,setCls] = useState("")
    const [err, setErr] = useState("")
    const submit = (e) =>{
        e.preventDefault()
        if(username === "" || email === "" || msg ===""){
            setErr("All the fields must be filled in!")
            setCls("alert alert-danger")
        }else{
            axios.post("http://localhost:3001/SendMessage",{username,email,msg}).then(e=>{
                setErr("Your message has been sent successfully!")
                setCls("alert alert-primary")
            }).catch(e=>{
                setErr("Failed to send your query!")
                setCls("alert alert-danger")
            })
        }
    }
    return(
        <section className="row" id="Contact">
            <main>
            <div className="heading mx-auto">
                    <h1 className="text-center mt-3 text-black">Contact Us!</h1>
                    <div className="mx-auto mb-1 bg-black"/>
            </div>
            </main>
        
        <div className="container-fluid">
            
            <div className="row my-1 mb-5">
                
                <div className="mx-auto my-1 mb-5">
                    {err!==""&&<div className={`${cls} col-9 mx-auto`}>{err}</div>}
                    <form onSubmit={(e)=>submit(e)} className="card card-body bg-blue mx-auto">
                        <div className="part1 my-auto text-left text-md-center">
                            Email: <a href="mailto:Befit@gmail.org" className="text-black my-3  text-decoration-none">Befit@gmail.org</a>
                            <br/>
                            <br/>
                            Phone:<a href="tel:+178473998476" className="text-black my-3  text-decoration-none"> +1 78473998476</a>
                            <br/>
                            <br/>
                            Address: <a href="#address" className="text-black my-3 text-decoration-none">4 N Harvard Street, Aberdeen,sd, 53401  United States</a>
                        </div>
                        <div className="part2 my-auto">
                        <input className="form-control form-control-lg my-2" placeholder="Name" required onChange={e=>setUsername(e.target.value)}/>
                        <input className="form-control form-control-lg my-2" type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                        <textarea className="form-control form-control-lg my-2" placeholder="Message" cols="10" rows="10" onChange={e=>setMsg(e.target.value)}></textarea>
                        <button className="btn btn-black btn-lg">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Contact_Us;
