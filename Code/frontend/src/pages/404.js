import axios from 'axios'
import {useState} from 'react'
import {useNavigate,Link} from "react-router-dom"

function NotFound(){
    return(
        <div>
            <section>
                <h1>404 - Page not found</h1>
            </section>
        </div>
    )
}
export default NotFound;