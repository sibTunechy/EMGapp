import React from 'react';
// import '../../styles/Brand.css';
import {BrandContainer, Topdiv, BrandWrap, Topline, Heading } from '../Brands/brandElements';

function Brand () {
  return (
    <>
    <Topdiv></Topdiv>
      <BrandContainer>
          <BrandWrap>
              <Topline>Brand Activation</Topline>
              <Heading>
              We provide a memorable, dynamic brand experience whenever a customer engages with our clients based in Nigeria, ensuring brand affinity, loyalty, and sales growth. Our event-based marketing tactics are well thought out and deployed in order to have a favorable impact on the customers purchasing patterns. We use a tried-and-true strategy for evaluating experential programs, combining qualitative and quantitative techniques to determine the quantity of business potential created, as well as the influence on brand affinity, relationship impact, and experience quality.
              </Heading>
          </BrandWrap>
      </BrandContainer>

      {/* <section>
        <div className='top-div'></div>                
        <div className='brand-container'>
            <div className='brand-wrap'>
                  <h1>Brand Activation</h1>
                  <div className='content-div'>
                    <p>We provide a memorable, dynamic brand experience whenever a customer engages with our clients based in Nigeria, ensuring brand affinity, loyalty, and sales growth. Our event-based marketing tactics are well thought out and deployed in order to have a favorable impact on the customers purchasing patterns. We use a tried-and-true strategy for evaluating experential programs, combining qualitative and quantitative techniques to determine the quantity of business potential created, as well as the influence on brand affinity, relationship impact, and experience quality. </p>
                  </div> 
            </div>
        </div>
      </section> */}
    </>
  )
}

export default Brand;

