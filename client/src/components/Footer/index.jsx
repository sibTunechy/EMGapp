import React from 'react';
import { FooterContainer, FooterLinkTitle, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinksWrapper, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, Footlogo } from './FooterElements';
import {FaFacebook, FaInstagram,  FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>ABOUT US</FooterLinkTitle>
                            {/* <FooterLink to='/about'>How it works</FooterLink> */}
                            {/* <FooterLink to='/about'>Testimonials</FooterLink> */}
                            {/* <FooterLink to='/about'>Careers</FooterLink> */}
                            {/* <FooterLink to='/thirdaboutpage'>Terms of Use</FooterLink> */}
                            <FooterLink to='/privacypage'>Privacy Policy</FooterLink>                     
                            <FooterLink to='/contactpage'>Contact</FooterLink>                     
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>QUICK LINKS</FooterLinkTitle>
                            <FooterLink to='/moreinfo'>General Merchandise</FooterLink>
                            <FooterLink to='/digital'>Digital Technology</FooterLink>
                            {/* <FooterLink to='/solutions'>Health Tech Solutions</FooterLink> */}
                            <FooterLink to='/brandpage'>Brand Activations</FooterLink>
                            <FooterLink to='/fleetpage'>Fleet Management</FooterLink>                     
                            {/* <FooterLink to='/estate'>Real Estate</FooterLink>                      */}
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>We are Social</FooterLinkTitle>
                            <FooterLink to='/'><FaFacebook/> Facebook</FooterLink>
                            <FooterLink to='/'><FaInstagram/> Instagram</FooterLink>
                            <FooterLink to='/'><FaYoutube/> Youtube</FooterLink>
                            <FooterLink to='/'><FaLinkedin/> LinkedIn</FooterLink>
                            <FooterLink to='/'><FaTwitter/> Twitter</FooterLink>                     
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        <Footlogo/>
                    </SocialLogo>
                    <WebsiteRights>
                        EMG &copy; {new Date().getFullYear()}.
                        All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        {/* <SocialIconLink href='/' target='_blank' aria-label='Facebook'/> */}
                        {/* <FaFacebook/> */}
                        {/* <SocialIconLink href='/' target='_blank' aria-label='Instagram'/> */}
                        {/* <FaInstagram/> */}
                        {/* <SocialIconLink href='/' target='_blank' aria-label='Youtube'/> */}
                        {/* <FaYoutube/> */}
                        {/* <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'/>
                        <FaLinkedIn/> */}
                        {/* <SocialIconLink href='/www.twitter.com' target='_blank' aria-label='Twitter'/> */}
                        {/* <FaTwitter/> */}
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;