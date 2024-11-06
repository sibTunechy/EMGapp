import React from 'react';
// import Fleetsimg from '../../images/stepbulb.jpg';
// import '../../styles/Fleets.css';
import {Topdiv, FleetContainer, FleetWrap, Topline, Heading} from '../Fleet/FleetElements';

const Fleets = () => {
  return (
    <>  
    <Topdiv></Topdiv>
      <FleetContainer>
          <FleetWrap>
              <Topline>FLEET MANAGEMENT</Topline>
              <Heading>
              Whether it is a financial lease, an operations lease, or any other lease solution, we build up structures and controls to run fleet operations and maximize profit. We handle operations for your fleet using our innovative and professional employees, advanced technology, and pool of knowledge. To decrease theft and loss and improve operational efficiency, we identify, track and monitor the condition of your cars in real time.    
              Depending on your specific needs, we provide a variety of tracking solutions. Our solutions will provide you a clear, thorough picture of your fleet, reducing delays and expenses. We provide necessary products and services to help you manage your fleet effectively and efficiently.
              </Heading>
          </FleetWrap>
      </FleetContainer>
    </>
  )
}

export default Fleets;