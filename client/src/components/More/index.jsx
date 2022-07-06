import React from 'react'
import Video from '../../videos/cropvideo.mp4';
import { MoreContainer, MoreBg, VideoBg, MoreContent,  MoreP, MoreH1, Topdiv, Bottomdiv } from './MoreElements';

const More = () => {

  return (
    <>  
        <Topdiv>          
        </Topdiv>
        <MoreContainer>
            <MoreBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </MoreBg>
            <MoreContent>
                <MoreH1>General Merchandise</MoreH1>
                <MoreP>
                    Our Company serves in various capacities along the value chain stores, confectionary companies and juice companies in Africa and Globally. In Addition to the foregoing, and in order to strengthen our marketing and distribution capabilities, we have strategically partnered with distributors who serve all market niches across the country, as well as in the Nigerian Market.
                    Each Distribution Company has seperate staff and employees, including traveling salespeople, telemarketers, drivers warehouse personnel, accounting, data analysis/statistics and General Management.
                    We distribute to over 100,000 consumers, across our clientele base inclusive of major Supermarket Chains, Online markets and grocery stores; We sell to businessess such as hotels,bakeries, caterers, restaurants and industries. Our Logistics arrangement is versatile and caters for the customer needs with a mix of our fleet of transit delivery assets and strategic partnerships in e-commerce.
                </MoreP>
            </MoreContent>
        </MoreContainer>
        <Bottomdiv>
        </Bottomdiv>
    </>
  )
};

export default More;