import {Link} from 'react-router-dom';
import logo from '../img/homepage/logo.png'

export default function Navbar() {
  const logout = () =>{
    localStorage.clear();
    window.location.href = "http://localhost:3000"
  }
  return (
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand d-flex align-items-center" to="/"><img className="logo" src={logo}/> <h3 className="ms-3">BeFit</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
       {/* navbar for logged In  user */
      localStorage.getItem("role") === "admin" &&
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link button" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Profile">Profile</Link>
        </li>
        <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle button" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Queries</a>
        <ul class="dropdown-menu">
          <li><Link class="dropdown-item" to="/Queries">Queries</Link></li>
          <li><Link class="dropdown-item" to="/Admins">Admins</Link></li>
          <li><Link class="dropdown-item" to="/Clients">Clients</Link></li>
          <li><Link class="dropdown-item" to="/Dietitians">Dietitians</Link></li>
          <li><Link class="dropdown-item" to="/Instructors">Instructors</Link></li>
          <li><Link class="dropdown-item" to="/ContactMessages">ContactMessages</Link></li>

        </ul>
      </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger rounded-pill" onClick={logout}>Logout</button>
        </li>
      </ul>
      }
      {/* navbar for logged In  user */
      localStorage.getItem("role") == "user" &&
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link button" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Queries">Your Queries</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger rounded-pill" onClick={logout}>Logout</button>
        </li>
      </ul>
      }
       {/* navbar for logged In  user */
      localStorage.getItem("role") == "instructor" &&
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link button" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Queries">Your Queries</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger rounded-pill" onClick={logout}>Logout</button>
        </li>
      </ul>
      }
      {
       localStorage.getItem("role") == "dietitian" &&
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link button" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Queries">Your Queries</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger rounded-pill" onClick={logout}>Logout</button>
        </li>
      </ul>
      }
      {/* navbar for user */
      localStorage.getItem("role") == undefined &&
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link button" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link button" to="/Register">Register</Link>
        </li>
      </ul>
      }
    </div>
  </div>
</nav>
  )
}