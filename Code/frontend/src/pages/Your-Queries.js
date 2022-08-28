import axios from "axios"
import {useEffect,useState} from 'react'
import {QueriesMainPage} from '../components/main'
function YourQueries(){
    const [queries,setQueries] = useState([])
        axios.post("http://localhost:3001/YourQueries",{email:localStorage.getItem("email")}).then(response=>{
            setQueries(response.data.queries)
        })
       
    return(
        <div>
            <main>
                <QueriesMainPage/>
            </main>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default YourQueries