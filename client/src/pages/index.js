import React from 'react';
// import { useState } from 'react';
// import Sidebar from '../components/Sidebar'
// import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSectionC from '../components/InfoSectionC';
import { homeObjTwo } from '../components/InfoSectionC/Data';
import Services from '../components/Services';
import { homeObjOne } from '../components/InfoSection/Data';
import Discover from '../components/Discover';
import { homeObjThree } from '../components/Discover/Data';
// import Digital from '../components/DigitalPage';
// import { digital } from '../components/DigitalPage/Data';
// import Footer from '../components/Footer';

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // }

  return (
    <>
        {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
        {/* <Navbar toggle={toggle}/> */}
        <HeroSection/>
        <InfoSection {...homeObjOne}/> 
        {/* <InfoSection {...homeObjTwo}/> */}
        <InfoSectionC {...homeObjTwo}/>
        <Services/>
        <Discover {...homeObjThree}/>
        {/* <Digital {...digital}/> */}
        {/* <InfoSection {...homeObjThree}/> */}
        {/* <Footer/>  */}
    </>
  )
}

export default Home;