import './App.css'
import Nav from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/homepage';
import Footer from './components/footer'
import Contact_Us from './pages/Contact-Us';
import Register from './pages/Register';
import SignIn from './pages/SignIn';


function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Contact" exact element={<Contact_Us/>}/>
        <Route path="/Register" exact element={<Register/>}/>
        <Route path="/SignIn" exact element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
