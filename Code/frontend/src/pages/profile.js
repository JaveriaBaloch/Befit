import axios from 'axios'
import {useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

function Profile() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [cls, setCls] = useState("");
    const [err, setErr] = useState("");
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const submit = (e) => {
        e.preventDefault();
        if(username === "" || password === "" || repeatPassword === "") {
            setErr("All fields are required");
            setCls("alert alert-danger");
        }
        else {
            if(password === repeatPassword) {
                if(strongRegex.test(password)) {
                    let email = localStorage.getItem("email");
                    axios.put("http://localhost:3001/user", {"username": username, "password": password, "email": email}).then(e => {
                        if(e.status === 202) {
                            setErr("Changed data successfully");
                            setCls("alert alert-primary");
                            localStorage.setItem("name", username);
                        }
                        else {
                            let errors = {
                                500: "The server ran into an issue when processing your request",
                                410: "There is no database entry for the E-Mail you're currently using"
                            }
                            setErr(errors[e.status]);
                            setCls("alert alert-danger")
                        }
                    }).catch(e => {
                        setErr("The server ran into an issue when processing your request");
                        setCls("alert alert-danger");
                    })
                }
                else {
                    setErr("The password must contain at least 8 characters, and must include one capital and lowercase letter, a number and a special character");
                    setCls("alert alert-danger");
                }
            }
            else {
                setErr("The passwords don't match");
                setCls("alert alert-danger");
            }
        }
    }

    return (
        <div className='row m-5 p-5 justify-content-center'>
            {err !== "" && <div className={`${cls} col-9 mx-auto`}>{err}</div>}
            <div className='my-auto col-md-6'>
                <h1>Profile</h1>
                <p><Link className='text-black text-decoration-none my-auto' to="/queries">Your Queries <FontAwesomeIcon className='my-auto me-2 ms-1' icon={faArrowCircleRight}/></Link></p>
                <p><Link className='text-black text-decoration-none my-auto' to="/replies">Replies <FontAwesomeIcon className='my-auto me-2 ms-1' icon={faArrowCircleRight}/></Link></p>
            </div>
            <div className='card my-auto col-md-4 shadow p-3'>
                <h1 className='text-center text-black'>Update your Profile</h1>
                <form onSubmit={(e) => submit(e)}>
                    <input className='form-control form-control-lg my-2' placeholder="Name" required onChange={e => setUsername(e.target.value)}/>
                    <input className='form-control form-control-lg my-2' type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
                    <input className='form-control form-control-lg my-2' type="password" placeholder="Repeat Password" required onChange={e => setRepeatPassword(e.target.value)}/>
                    <button className='btn btn-black btn-lg mt-3'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;