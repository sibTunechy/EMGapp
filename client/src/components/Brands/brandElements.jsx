import styled from 'styled-components';
import img from '../../images/blackbggreen.jpg';

export const Topdiv = styled.div`
    width: 100%;
    background: green;
    height: 80px;
`;

export const BrandContainer = styled.div`
    color: #fff;
    background-image: linear-gradient(rgba(253, 253, 253, 0.8), rgba(253, 253, 253, 0.2)), url('${img}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const BrandWrap = styled.div`
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

export const Topline = styled.div`
    position: relative;
    // top: -20px;
    padding-bottom: 250px;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    background: linear-gradient(to bottom, #386753 85%, rgb(7, 127, 7) 40%);
    --webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: .5px;

    @media screen and (max-width: 768px) {
        top: -70px;
        padding-bottom: 100px;
        //margin-top: 100px;
        //margin-bottom: 50px;
        //line-height: 140%;
    }

    @media screen and (max-width: 480px) {
        padding-bottom: 100px;
       //margin-top: 50px;
       //line-height: 140%;
        font-size: 25px;
    }
`;

export const Heading = styled.p`
    position: relative;
    top: -140px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-top: -194px;
    //margin-bottom: 150px;
    //padding: 150px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 900px;
    max-height: 900px;
    line-height: 190%;
    text-shadow: 1px -1px;
    overflow-y: auto;
    color: black;
    //background-color: white;
    background: linear-gradient(#d9d9d9, #d9d9d9);
    box-shadow: 0 0 2px #131313, 0 0 2px #131313, 0 0 2px #131313;
    border-radius: 10px;
    @media screen and (max-width: 900px) {
        font-size: 22px;
    }

    @media screen and (max-width: 768px) {
        // padding: 10px;
        margin-bottom: 100px;
        line-height: 140%;
        font-size: 24px;
    }

    @media screen and (max-width: 650px) {
        padding-top: 50px;
        font-size: 22px;
    }
    @media screen and (max-width: 550px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        // padding: 10px;
        // margin-top: 100px;
        line-height: 140%;
        font-size: 19px;
        padding-bottom: 20px;
    }

`;