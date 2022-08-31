import { useParams } from "react-router-dom";
import axios from 'axios'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function EditUser(){
    const [data, setData] = useState([])
    const [userRole, setUserRole] = useState("")
    const params = useParams()
    // console.log("params",params.id)
    let roles = ["admin","user","instructor","dietitian"]
    useEffect(()=>{
        console.log(userRole)
        axios.post("http://localhost:3001/YourClient",{email:localStorage.getItem("email"),id:params.id})
        .then(res=>setData(res.data.query[0]))
       
        roles.filter(e => e != data.role)
    })
    const deleteQuery =(id) =>{
        axios.post("http://localhost:3001/ClientDeleteQuery",{id:id}).then(
            ()=> window.location.href ="http://localhost:3000/Clients"
        )
        .catch()
    }
    const updateQuery =(id) =>{
        axios.post("http://localhost:3001/UpdateClient",{id:id,role: userRole}).then(
            ()=> window.location.href ="http://localhost:3000/Clients"
        )
        .catch()
    }
   
    return(
        <div>
            <main className="py-5">
                <h1 className="py-5 mt-5 text-center">Your Query</h1>
            </main>
            <div className="container">
                <div className="row">
                    <div className="col-9 mx-auto my-5">
                        <div className="card card-body">
                            <h3>Name: {data.Name}</h3>
                            <small>Email: {data.Email}</small>
                            <small>Role: 
                            <select onChange={e=>setUserRole(e.target.value)}>
                <option value={data.role}>{data.role}</option>
                        {roles.map(element => {
                            return(
                                <option value={element}>{element}</option>
                            )
                        }) 
                        }
                        </select>
                     </small>
                     <button className="btn btn-info my-1 mx-auto w-100 rounded-pill" onClick={()=>updateQuery(params.id)}> <FontAwesomeIcon icon={faCheck} /> Update</button>
                            <button className="btn btn-danger my-1 mx-auto w-100 rounded-pill" onClick={()=>deleteQuery(params.id)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditUser