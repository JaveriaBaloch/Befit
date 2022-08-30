import axios from 'axios'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Instructor(){
    const [data, setData] = useState([])
            
    useEffect(() => {
        axios.post("http://localhost:3001/Instructor",{email:localStorage.getItem("email")})
        .then(res=>setData(res.data.queries))
            
    }, [])
    
const deleteQuery =(id) =>{
        axios.post("http://localhost:3001/DeleteQuery",{id:id})
        .then(()=>axios.post("http://localhost:3001/Instructor",{email:localStorage.getItem("email")}).then(res=>setData(res.data.queries))
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
                    <h1 className="text-center mt-3 text-black">Instructor</h1>
                    <div className="mx-auto mb-1 bg-black"/>
            </div>
            </main>
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
                    </div>
                 </div>
             </div>
        </div>
    </section>
    )
}
export default Instructor