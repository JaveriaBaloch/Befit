import axios from 'axios'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function YourQueries(){
    const [data, setData] = useState([])
    const [show, setShow] = useState("All")      
    useEffect(() => {
        axios.post("http://localhost:3001/YourQueries",{email:localStorage.getItem("email"),role:localStorage.getItem("role")})
        .then(res=>setData(res.data.query))
            
    }, [])
function inProgress(){
    axios.post("http://localhost:3001/InProgress",{email:localStorage.getItem("email"),role:localStorage.getItem("role")})
        .then(res=>setData(res.data.query))
        setShow("InProgress")
}  
function inResolved(){
    axios.post("http://localhost:3001/Resolved",{email:localStorage.getItem("email"),role:localStorage.getItem("role")})
        .then(res=>setData(res.data.query))
}  
const deleteQuery =(id) =>{
        axios.post("http://localhost:3001/DeleteQuery",{id:id})
        .then(()=>axios.post("http://localhost:3001/YourQueries",{email:localStorage.getItem("email"),role:localStorage.getItem("role")})
        .then(res=>setData(res.data.query))
        )
        .catch()
        console.log(id)
    }
    function renderTable() {
       let i=0
       return data.map(query => {
        const link = `Edit/${query.id}`
                 i++
            return (
                <tr key={query.id}>
                    <td>{i}</td>
                    <td>{query.name}</td>
                    <td>{query.email}</td>
                    <td>{query.request}</td>
                    <td>{query.timestamp}</td>
                    {localStorage.getItem("role")== "user"&&
                     <td>
                     <button className="btn btn-danger my-1 mx-auto w-100 rounded-pill" onClick={()=>deleteQuery(query.id,query.email)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                     <Link className="btn btn-black my-1 mx-auto w-100 rounded-pill" to={link}> <FontAwesomeIcon icon={faEye} /> View</Link>
                     </td>
                    }
                    {localStorage.getItem("role") == "admin"&&
                     <td>
                     <button className="btn btn-danger my-1 mx-auto w-100 rounded-pill" onClick={()=>deleteQuery(query.id,query.email)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                     <Link className="btn btn-black my-1 mx-auto w-100 rounded-pill" to={link}> <FontAwesomeIcon icon={faEye} /> View</Link>
                     </td>
                    }
                    {localStorage.getItem("role") == "instructor"&&
                     <td>                     
                        <Link className="btn btn-black my-1 mx-auto w-100 rounded-pill" to={link}> <FontAwesomeIcon icon={faEye} /> View</Link>
                     </td>
                    }
                     {localStorage.getItem("role") == "dietitian"&&
                     <td>                     
                        <Link className="btn btn-black my-1 mx-auto w-100 rounded-pill" to={link}> <FontAwesomeIcon icon={faEye} /> View</Link>
                     </td>
                    }
                    <td>
                        {query.reply == 1&& <b className='text-success'>resolved</b>}
                        {!query.reply&& <b className='text-primary'>in progress</b>}
                    </td>
                </tr>
            )
        })

    }

    return(
        <section className="row mb-5" id="Contact">
            <main>
            <div className="heading mx-auto mb-5">
                    <h1 className="text-center mt-3 text-black">Your Queries</h1>
                    <div className="mx-auto mb-1 bg-black"/>
            </div>
            </main>
          
        <div className="container my-5">
            
            <div className="row my-1 mb-5">
                
                <div className="mx-auto my-1 mb-5 col-12 mb-5">
                    <div className='mx-auto col-10 mb-5'>
                    <div className='btn-group w-100'>
                     <button className="btn btn-info" onClick={inProgress}>In Progress</button>
                     <button className="btn btn-success" onClick={inResolved}>Resolved</button>
                     </div>
                        <table class="table table-bordered border-dark table-hover rounded-pill">
                            <thead>
                                <tr class="table-dark">
                                    <th scope="col">S.no</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">E-Mail</th>
                                    <th scope="col">Issue</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {renderTable()}
                               
                            </tbody>
                        </table>
                    </div>
                 </div>
             </div>
        </div>
    </section>
    )
}
export default YourQueries
