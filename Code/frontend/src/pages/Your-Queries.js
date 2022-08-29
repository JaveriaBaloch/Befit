import axios from 'axios'
//import json from 'json5'
import {useEffect, useState} from 'react'
import {useNavigate,Link} from "react-router-dom"

function YourQueries(){
    // Source for below fetching code:
    // https://stackoverflow.com/questions/56896037/using-react-hooks-axios-to-fetch-data-and-display-in-a-table
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/queries", {params : {email:localStorage.getItem("email")}}).then(json => setData(json.data))
    }, [])

    function renderTable(queries) {
        return queries.map(query => {
            return (
                <tr>
                    <td scope="row">{query.id}</td>
                    <td>{query.name}</td>
                    <td>{query.email}</td>
                    <td>{query.request}</td>
                    <td>{query.timestamp}</td>
                    <td>Something</td>
                </tr>
            )
        })

    }

    return(
        <section className="row" id="Contact">
            <main>
            <div className="heading mx-auto">
                    <h1 className="text-center mt-3 text-black">Your Queries</h1>
                    <div className="mx-auto mb-1 bg-black"/>
            </div>
            </main>
        
        <div className="container-fluid">
            
            <div className="row my-1 mb-5">
                
                <div className="mx-auto my-1 mb-5">
                    <div className='card card-body bg-white mx-auto'>
                        <table class="table table-bordered border-dark table-hover border-rounded">
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
                                {renderTable(data.queries)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default YourQueries;