import styled from 'styled-components';
import img from '../../images/pinkandwhite.jpg';

export const Topdiv = styled.div`
    background-color: #000000;
    height: 150px;
`;

export const DigitalContainer = styled.div`
    color: #fff;
    background-image: url('${img}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const DigitalWrap = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    padding:  24px;
    justify-content: center;
`;

export const TopLine = styled.div`
    color: #01bf71;
    font-size: 30px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    // margin-bottom: 16px;
    text-align: center;
    padding-top: 150px;
    // margin-top: 30px;

    @media screen and (max-width: 768px) {
        padding: 10px;
        margin-top: 100px;
        margin-bottom: 50px;
        // line-height: 140%;
    }

    @media screen and (max-width: 480px) {
        padding: 2px;
        margin-top: 50px;
        // line-height: 140%;
        font-size: 25px;
    }
`;

export const Heading = styled.p`
    // font-family: Georgia, 'Times New Roman', Times, serif;
    margin-top: -24px;
    text-align: center;
    font-size: 24px;
    max-width: 900px;
    line-height: 180%;
    // text-shadow: 2px 2px black;
    font-weight: 600;
    color: black;
    margin-bottom: 50px;

    @media screen and (max-width : 480px) {
        font-size: 22px;
        padding: 10px;
        margin-top: 20px;
        line-height: 140%;
    }
`;