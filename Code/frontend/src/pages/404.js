import axios from 'axios'
import {useState} from 'react'
import {useNavigate,Link} from "react-router-dom"

function NotFound(){
    return(
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="heading mx-auto">
                        <h1 className="text-center mt-3 text-black">404 - Page not found</h1>
                        <div className="mx-auto bg-black mb-5"/>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default NotFound;