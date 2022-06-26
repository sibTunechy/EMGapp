import React from 'react';
import Icon1 from '../../images/svg-4.png';
import Icon2 from '../../images/svg-5.png';
import Icon3 from '../../images/svg-7.png';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Digital Technology</ServicesH2>
                <ServicesP>Building Cloud Solutions and bridging the gap</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Brand Activation</ServicesH2>
                <ServicesP>We provide a memorable and dynamic brand experience</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Fleet Management</ServicesH2>
                <ServicesP>We build up structures and controls to run operations and maximize profit</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;