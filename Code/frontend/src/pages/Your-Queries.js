import axios from 'axios'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function YourQueries(){
    const [data, setData] = useState([])
            
    useEffect(() => {
        axios.post("http://localhost:3001/YourQueries",{email:localStorage.getItem("email")})
        .then(res=>setData(res.data.queries))
            
    }, [])
    
const deleteQuery =(id) =>{
        axios.post("http://localhost:3001/DeleteQuery",{id:id})
        .then(()=>axios.post("http://localhost:3001/YourQueries",{email:localStorage.getItem("email")}).then(res=>setData(res.data.queries))
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
                    <td>
                    <button className="btn btn-danger my-1 mx-auto w-100 rounded-pill" onClick={()=>deleteQuery(query.id)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                    <Link className="btn btn-black my-1 mx-auto w-100 rounded-pill" to={link}> <FontAwesomeIcon icon={faEye} /> View</Link>
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
<<<<<<< Updated upstream
        
        <div className="container my-5">
            
            <div className="row my-1 mb-5">
                
                <div className="mx-auto my-1 mb-5 col-12 mb-5">
                    <div className='mx-auto col-10 mb-5'>
                        <table class="table table-bordered border-dark table-hover rounded-pill">
                            <thead>
                                <tr class="table-dark">
                                    <th scope="col">S.no</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">E-Mail</th>
                                    <th scope="col">Issue</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTable()}
                            </tbody>
                        </table>
=======
            <div className="container">
                <div className="row">
                    <div className="col-9 mx-auto">
                        {queries.map(query=>{
                            return(
                                    <div key={query.id} className="card card-body my-4 rounded-2">
                                        <div>{query.request}</div>
                                        <small className="text-muted">uploaded on:{query.timestamp}</small>
                                        <div className="btn-group">
                                        <button className="btn btn-warning btn-lg rounded-pills">Edit</button>
                                        <button className="btn btn-danger btn-lg rounded-pills">Delete</button>
                                        </div>
                                    </div>
                            )
                        })}
>>>>>>> Stashed changes
                    </div>
                 </div>
             </div>
        </div>
    </section>
    )
}
export default YourQueries;