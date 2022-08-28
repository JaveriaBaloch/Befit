import axios from 'axios'
import {useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
function SignIn(){
    const navigation = useNavigate()
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [msg,setMessage] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if(password === "" || email === ""){
            setMessage("All the flieds are required!")
        }else{
                axios.post('http://localhost:3001/Login',{email:email,password:password}).then((response)=>{
                    if(password==response.data.user[0].Password){
                    localStorage.setItem('name',response.data.user[0].Name)
                    localStorage.setItem('email',response.data.user[0].Email)
                    localStorage.setItem('role',response.data.user[0].role)
                    window.location.href = "/";   
                    }
                })
            .catch(err=>{
                setMessage("Invalid password or email")
            })
        } 
    }
    return(
        <section className="row" id="Contact">
        
        <div className="container-fluid py-5 my-5">
            
            <div className="row my-1 pb-5 mb-5">
                
                <div className="mx-auto my-1 mb-5 pb-5 mb-5">
                    {msg !== "" && <div className="alert alert-danger">{msg}</div>}
                    <form onSubmit={(e)=>submit(e)} className="card col-lg-7 col-md-8 col-sm-10 mx-auto mb-5">
                        <div className="card-header bg-black">
                            <h1 className="text-center mt-3 text-white">Sign In</h1>
                        </div>
                        <div className="card-body">
                        <input className="form-control form-control-lg my-3" type="email" placeholder="Email" required onChange={e=>setEmail(e.target.value)}/>
                        <input className="form-control form-control-lg my-3" type="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)}/>
                        <div className='mb-5 d-flex'><FontAwesomeIcon className='my-auto me-2 ms-1' icon={faArrowCircleRight} /> <Link className='text-black text-decoration-none my-auto' to="/Register">Register</Link></div> 
                        <button className="btn btn-black btn-lg w-100 mx-auto">Sign In</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignIn;