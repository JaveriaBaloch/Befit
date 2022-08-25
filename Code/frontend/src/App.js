import './App.css'
import Nav from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/homepage';
import Footer from './components/footer'
function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
