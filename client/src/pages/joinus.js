import React from 'react';
// import {useState} from 'react';
import Signin from '../components/Signin';
// import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import ScrollToTop from '../components/Signin/ScrollToTop';


const JoinusPage = () => {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //     setIsOpen(!isOpen);
  // }

  
  return (
    <>  
        {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
        {/* <Navbar toggle={toggle}/> */}
        <ScrollToTop/>
        <Signin/>
        {/* <Footer/> */}
    </>
  )
}

export default JoinusPage;