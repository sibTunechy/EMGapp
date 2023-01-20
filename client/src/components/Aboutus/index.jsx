import React from 'react';
import '../../styles/Aboutus.css';

function Aboutus() {
  return (
    <div className='about-container'>
        <h1>About Us</h1>
        <div className='mission-container'>
            <h2>OUR MISSION</h2>
            <p>We create personalized, customer-centric experiences, the right technology and people with our solutions deployed across various channels to suit the demography of the target market and analyze the data from our two-way engagement with the market for the strategic use of clients.</p>
        </div>
        <div className='execution-container'>
            <h2>EXECUTION</h2>
            <p>A strong drive to see things through to completion as quickly, efficiently, and effectively as possible. We believe in the time to see projects through from start to finish in order to get exceptional results.</p>
        </div>
        <div className='enterprise-container'>
            <h2>ENTERPRISE</h2>
            <p> the will and commitment to go to any length to complete a task. What differentiates us in a competitive business atmosphere is our individual and collective duty to own our goals and lead creative projects leading us to achieving them.</p>
        </div>
        <div className='excellence-container'>
            <h2>EXCELLENCE</h2>
            <p>Consistently delivering exceptional results. Every employees's heart beat with the phrase "Excellence". To provide measureable value to our stakeholders, we go above and beyond the ordinary.</p>   
        </div>
    </div>
  )
}

export default Aboutus;