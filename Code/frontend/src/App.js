import './App.css'
import Nav from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import PageNotFound from './pages/404';
import Home from './pages/homepage';
import Footer from './components/footer'
import Contact_Us from './pages/Contact-Us';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import YourQueries from './pages/Your-Queries';
import View from './pages/view';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Contact" exact element={<Contact_Us/>}/>
        <Route path="/Register" exact element={<Register/>}/>
        <Route path="/SignIn" exact element={<SignIn/>}/>
        <Route path="/Queries" exact element={<YourQueries/>}/>
        <Route path="*" exact element={<PageNotFound/>}/>
        <Route path="/Queries/Edit/:id" element={<View/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
