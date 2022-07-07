import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import JoinusPage from './pages/joinus';
import Moreinfo from './pages/moreinfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Contact from './components/Contact';
import Contactpage from './components/ContactPage';
// import Aboutus from './components/Aboutus';
import Sidebar from './components/Sidebar';
import Digital from './components/DigitalPage';
import Fleet from './components/Fleet';
import Brand from './components/Brands';
import Privacy from './components/Privacy';
import Auth from './components/Auth/Auth';
import Welcome from './components/Welcome';
// import Secabout from './components/Secabout';
import Thirdabout from './components/Thirdabout';


function App() {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/joinus' element={<JoinusPage/>}/>
                <Route path='/moreinfo' element={<Moreinfo/>}/>
                <Route path='/contactpage' element={<Contactpage/>}/>
                <Route path='/digital' element={<Digital/>} />
                <Route path='/fleetpage' element={<Fleet/>}/>
                <Route path='/brandpage' element={<Brand/>} />
                <Route path='/privacypage' element={<Privacy/>} />
                <Route path='/auth' element={<Auth/>} />
                <Route path='/welcome' element={<Welcome/>} />
                <Route path='/aboutpage' element={<Thirdabout/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}


export default App;