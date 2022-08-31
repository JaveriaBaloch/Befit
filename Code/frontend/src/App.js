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
import Profile from './pages/profile';
import Client from './pages/Client';
import EditUser from './pages/editUser';
import Dietitian from './pages/Dietitian';
import Admin from './pages/Admin';
import Instructor from './pages/Instructor';
import Contact_Us_Messages from './pages/Contact_Us_Msg';
function App() {

  return (
    <div className="App">
      <Nav/>
      {localStorage.getItem("role") == undefined &&
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Contact" exact element={<Contact_Us/>}/>
        <Route path="/Register" exact element={<Register/>}/>
        <Route path="/SignIn" exact element={<SignIn/>}/>
      </Routes>
      }
       {localStorage.getItem("role") == "user" &&
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Contact" exact element={<Contact_Us/>}/>
           <Route path="/Queries" exact element={<YourQueries/>}/>
        <Route path="*" exact element={<PageNotFound/>}/>
        <Route path="/Queries/Edit/:id" element={<View/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
}
{localStorage.getItem("role") == "dietitian" &&
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Contact" exact element={<Contact_Us/>}/>
        <Route path="/Queries" exact element={<YourQueries/>}/>
        <Route path="*" exact element={<PageNotFound/>}/>
        <Route path="/Queries/Edit/:id" element={<View/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
}
{localStorage.getItem("role") == "instructor" &&
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Contact" exact element={<Contact_Us/>}/>
       <Route path="/Queries" exact element={<YourQueries/>}/>
        <Route path="*" exact element={<PageNotFound/>}/>
        <Route path="/Queries/Edit/:id" element={<View/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
}
{localStorage.getItem("role") == "admin" &&
 <Routes>
 <Route path="/" exact element={<Home/>}/>
 <Route path="/Contact" exact element={<Contact_Us/>}/>
 <Route path="/Queries" exact element={<YourQueries/>}/>
 <Route path="*" exact element={<PageNotFound/>}/>
 <Route path="/Queries/Edit/:id" element={<View/>}/>
 <Route path="/Profile" element={<Profile/>}/>
 <Route path="/Clients" element={<Client/>}/>
 <Route path="/Dietitians" element={<Dietitian/>}/>
 <Route path="/Admins" element={<Admin/>}/>
 <Route path="/Instructors" element={<Instructor/>}/>
 <Route path="/Clients/Edit/:id" element={<EditUser/>}/>
 <Route path="/Admins/Edit/:id" element={<EditUser/>}/>
 <Route path="/Instructors/Edit/:id" element={<EditUser/>}/>
 <Route path="/Dietitians/Edit/:id" element={<EditUser/>}/>
 <Route path="/ContactMessages" element={<Contact_Us_Messages/>}/>

</Routes>
}
      <Footer/>
    </div>
  );
}

export default App
