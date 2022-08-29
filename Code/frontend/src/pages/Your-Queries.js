import axios from 'axios'
import json from 'json5'
import {useState} from 'react'
import {useNavigate,Link} from "react-router-dom"

function YourQueries(){
    var tableData = "";
    axios.get('http://localhost:3001/queries', {params : {email:localStorage.getItem("email")}}).then(query => {
        var data = json.parse(query.request.response);
        for(let i = 0; i < data.queries.length; i++) {
            tableData = tableData + "<td scope='row'>Test</td>";
        }
    })
    .catch(response => {
        console.error(response);
    })

    console.log(tableData);

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
                                {tableData}
                                {/* <tr>
                                    <td scope="row">Something</td>
                                    <td>Something</td>
                                    <td>Something</td>
                                    <td>Something</td>
                                    <td>Something</td>
                                    <td>Something</td>
                                </tr> */}
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