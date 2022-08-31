import axios from 'axios'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Contact_Us_Messages(){
    const [data, setData] = useState([])
            
    useEffect(() => {
        axios.post("http://localhost:3001/ContactForm",{role:"admin"})
        .then(res=>setData(res.data.messages))
            
    }, [])
    
const deleteQuery =(id) =>{
        axios.post("http://localhost:3001/ContactFormDeleteQuery",{id:id,role:localStorage.getItem("role")})
        .then(axios.post("http://localhost:3001/ContactForm",{role:"admin"})
        .then(res=>setData(res.data.messages))
        )
        .catch()
        console.log(id)
    }
    function renderTable() {
       let i=0
       return data.map(query => {
        const link = `mailto:${query.email}`
                 i++
            return (
                <tr key={query.id}>
                    <td>{i}</td>
                    <td>{query.username}</td>
                    <td>{query.email}</td>
                    <td>{query.msg}</td>
                    <td>
                    <a className="btn btn-black my-1 mx-auto w-100 rounded-pill" href={link}> <FontAwesomeIcon icon={faEnvelope} /> Reply</a>
                    <button className="btn btn-danger my-1 mx-auto w-100 rounded-pill" onClick={()=>deleteQuery(query.id)}> <FontAwesomeIcon icon={faTrash} /> Delete</button>
                   
                    </td>
                </tr>
            )
        })

    }

    return(
        <section className="row mb-5" id="Contact">
            <main>
            <div className="heading mx-auto mb-5">
                    <h1 className="text-center mt-3 text-black">Messages From Contact From</h1>
                    <div className="mx-auto mb-1 bg-black"/>
            </div>
            </main>
        <div className="container my-5">
            
            <div className="row my-1 mb-5">
                
                <div className="mx-auto my-1 mb-5 col-12 mb-5">
                    <div className='mx-auto col-10 mb-5'>
    {data.length>0 &&
                        <table class="table table-bordered border-dark table-hover rounded-pill">
                            <thead>
                                <tr class="table-dark">
                                    <th scope="col">S.no</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">E-Mail</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTable()}
                            </tbody>
                        </table>
}
{data.length==0 &&<div className='py-5 text-center'>
    <b>No Messages</b>
    </div>}
                    </div>
                 </div>
             </div>
        </div>
    </section>
    )
}
export default Contact_Us_Messages