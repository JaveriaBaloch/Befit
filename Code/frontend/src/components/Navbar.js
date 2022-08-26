import {Link} from 'react-router-dom';
import logo from '../img/homepage/logo.png'
export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand d-flex align-items-center" to="/"><img className="logo" src={logo}/> <h3 className="ms-3">BeFit</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
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
    </div>
  </div>
</nav>
  )
}