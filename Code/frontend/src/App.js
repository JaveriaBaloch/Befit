import './App.css'
import Nav from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/homepage';
import Footer from './components/footer'
import Contact_Us from './pages/Contact-Us';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import YourQueries from './pages/Your-Queries';


function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Contact" element={<Contact_Us/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Queries"  element={<YourQueries/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
