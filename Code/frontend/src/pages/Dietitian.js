import axios from 'axios'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Dietitian(){
    const [data, setData] = useState([])
            
    useEffect(() => {
        axios.post("http://localhost:3001/Client",{role:"dietitian"})
        .then(res=>setData(res.data.queries))
            
    }, [])
    
const deleteQuery =(id) =>{
        axios.post("http://localhost:3001/ClientDeleteQuery",{id:id})
        .then(()=>axios.post("http://localhost:3001/Client",{email:localStorage.getItem("email")}).then(res=>setData(res.data.queries))
        )
        .catch()
        console.log(id)
    }
    function renderTable() {
       let i=0
       return data.map(query => {
        const link = `Edit/${query.ID}`
                 i++
            return (
                <tr key={query.id}>
                    <td>{i}</td>
                    <td>{query.Name}</td>
                    <td>{query.Email}</td>
                    <td>{query.role}</td>
                    <td>
                    <button className="btn btn-danger my-1 mx-auto w-100 rounded-pill" onClick={()=>deleteQuery(query.ID)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                    <Link className="btn btn-info my-1 mx-auto w-100 rounded-pill" to={link}> <FontAwesomeIcon icon={faUserEdit} /> Update</Link>

                    </td>
                </tr>
            )
        })

    }

    return(
        <section className="row mb-5" id="Contact">
            <main>
            <div className="heading mx-auto mb-5">
                    <h1 className="text-center mt-3 text-black">Dietitians</h1>
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
                                    <th scope="col">Role</th>
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
export default Dietitian