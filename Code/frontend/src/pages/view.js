import { useParams } from "react-router-dom";
import axios from 'axios'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
function View(){
    const [data, setData] = useState([])
    const params = useParams()
    // console.log("params",params.id)
    useEffect(()=>{
        axios.post("http://localhost:3001/YourQuery",{email:localStorage.getItem("email"),id:params.id})
        .then(res=>setData(res.data.query[0]))
    })
    const deleteQuery =(id) =>{
        axios.post("http://localhost:3001/DeleteQuery",{id:id}).then(
            ()=> window.location.href ="http://localhost:3000/Queries"
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
                            <h3>Name: {data.name}</h3>
                            <small>Date: {data.timestamp}</small>
                            <small>Type: {data.type}</small>
                            <textarea className="row form-control rounded m-2" value={data.request} disabled></textarea>
                            <button className="btn btn-danger my-1 mx-auto w-100 rounded-pill" onClick={()=>deleteQuery(params.id)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default View