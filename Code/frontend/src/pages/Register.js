import axios from 'axios'
import {useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
function Register(){
    const navigation = useNavigate()
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState("")
    const [msg,setMessage] = useState("")
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const submit = (e) => {
        e.preventDefault()
        if(password === "" || email === "" || confirmPassword === "" ||username === ""){
            setMessage("All the fields are required!")
        }else if (password !== confirmPassword) {
            setMessage("password is not matching!")
        }else if (strongRegex.test(password)){
            axios.post('http://localhost:3001/AddUser',{name:username,email:email.toLowerCase(),password:password})
            .then(e=>{
                setMessage(e.data.user)
                if(e.data.user == "Account is created successfully"){
                    localStorage.setItem("name",username)
                    localStorage.setItem("email",email)
                    localStorage.setItem("role","user")
                    window.location.href ="http://localhost:3000"
                }
            })
            .catch(err=>{
                setMessage("Failed to create an account")
            })
        } 
        else{
            setMessage(`Your Password should contain followings:\n
             a Capital letter, a small letter, a number, a special character
             and 8 characters`)
    }
}
    return(
        <section className="row" id="Contact">
        
        <div className="container-fluid py-5">
            
            <div className="row my-1 pb-5">
                
                <div className="mx-auto my-1 mb-5 pb-5 mb-5">
                    {msg !== "" && <div className="alert alert-danger">{msg}</div>}
                    <form onSubmit={(e)=>submit(e)} className="card col-lg-7 col-md-8 col-sm-10 mx-auto mb-5">
                        <div className="card-header bg-black">
                            <h1 className="text-center mt-3 text-white">Register!</h1>
                        </div>
                        <div className="card-body">
                        <input className="form-control form-control-lg my-3" placeholder="Name" required onChange={e=>setUsername(e.target.value)}/>
                        <input className="form-control form-control-lg my-3" type="email" placeholder="Email" required onChange={e=>setEmail(e.target.value)}/>
                        <input className="form-control form-control-lg my-3" type="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)}/>
                        <input className="form-control form-control-lg my-3" type="password" placeholder="Confirm Password" required onChange={e=>setConfirmPassword(e.target.value)}/>
                        <div className='mb-5 d-flex'><FontAwesomeIcon className='my-auto me-2 ms-1' icon={faArrowCircleRight} /> <Link className='text-black text-decoration-none my-auto' to="/SignIn">Sign In</Link></div> 
                        <button className="btn btn-black btn-lg w-100 mx-auto">Register</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register;