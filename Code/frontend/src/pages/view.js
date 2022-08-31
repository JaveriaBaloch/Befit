import { useParams } from "react-router-dom";
import axios from 'axios'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function View(){
    const [data, setData] = useState([])
    const params = useParams()
    // console.log("params",params.id)
    useEffect(()=>{
        axios.post("http://localhost:3001/YourQuery",{id:params.id,role:localStorage.getItem("role"),email:localStorage.getItem("email")})
        .then(res=>setData(res.data.query[0]))
    })
    const deleteQuery =(id) =>{
        axios.post("http://localhost:3001/DeleteQuery",{id:id}).then(
            ()=> window.location.href ="http://localhost:3000"
        )
        .catch()
    }
    const ResolveQuery =(id) =>{
        axios.post("http://localhost:3001/ResolveQuery",{id:id}).then(
            ()=> window.location.href ="http://localhost:3000"
        )
        .catch()
    }
    const usermail = "mailto:"+data.email
    return(
        <div>
            <main className="py-5 mb-5">
                <h1 className="py-5 mt-5 text-center mb-4">Your Query</h1>
            </main>
            <div className="container">
                <div className="row  my-3">
                    <div className="col-9 mx-auto my-2  mb-5">
                        <div className="card card-body mb-5">
                            <h3>Name: {data.name}</h3>
                            <small>Date: {data.timestamp}</small>
                            <small>Type: {data.type}</small>
                            {localStorage.getItem("role")!=="user" && <a href={usermail} className="btn btn-dark">send a email</a> }
                            <textarea className="row form-control rounded m-2" value={data.request} disabled></textarea>
                            <button className="btn btn-info my-1 mx-auto w-100 rounded-pill" onClick={()=>ResolveQuery(params.id)}> <FontAwesomeIcon icon={faTrash} /> Resolved</button>
                            {localStorage.getItem("role") == "user" && 
                            <button className="btn btn-danger my-1 mx-auto w-100 rounded-pill" onClick={()=>deleteQuery(params.id)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                              }
                               {localStorage.getItem("role") == "admin" && 
                            <button className="btn btn-danger my-1 mx-auto w-100 rounded-pill" onClick={()=>deleteQuery(params.id)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                              }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default View