import styled from 'styled-components';
import {Link} from 'react-router-dom';
import svg from "../../images/removebg.png";

export const FooterContainer = styled.footer`
    background-color: #6da832;
    // height: 50vh ;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;


    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px ) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: green;
        transition: 0.1s ease-in;
    }
`;

export const FooterLinkTitle =styled.h2`
    font-size: 16px;
    margin-bottom: 15px;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px ) {
        flex-direction: column; 
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    // border: 5px solid red;
`;

export const Footlogo = styled.svg`
    width: 100px;
    height: 80px;
    margin: -5px;
    background-image: url(${svg});
    transform: scale(4);
    background-size: contain;
    // border: 5px solid red;
    // background-position: center;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;


export const WebsiteRights = styled.small`
    color: black;
    margin-bottom: 16px;
    font-size: 1.1rem;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    color: green; 
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;