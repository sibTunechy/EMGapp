import styled from 'styled-components';

export const Topdiv = styled.div`
    width: 100%;
    background: green;
    height: 80px;
`;

export const Bottomdiv = styled.div`
    width: 100%;
    // background: black;
    // height: 10px;
`;

export const MoreContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent
        100%);
        z-index: 2;
    }
`;

export const MoreBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const MoreContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 5px solid red;

    @media screen and (max-width: 650px) {
        // padding-top: 50px;
        // border: 5px solid black;
        margin-top: 50px;
        // margin-bottom: 50px;
    }
    // @media screen and (max-width: 550px) {
    //     border: 5px solid white;
    // }

    @media screen and (max-width: 480px) {
        // max-height: 30px;
        // padding-top: 100px;
        // border: 5px solid green;
    }
`;

export const MoreH1 = styled.h1`
    // color: #fff !important;
    // margin: 0 auto;
    position: relative;
    top: -20px;
    padding-bottom: 250px;
    font-size: 48px;
    text-align: center;
    background: linear-gradient(to bottom, #386753 85%, rgb(7, 127, 7) 40%);
    --webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media screen and (max-width: 900px) {
        //font-size: 48px;
        //padding-top: 20px;
    }

    @media screen and (max-width: 550px) {
        //font-size: 30px;
        //padding-top: 50px;
    }

    @media screen and (max-width: 480px) {
        //font-size: 25px;
        //padding-top: 50px;
    }
    // @media screen and (max-width: 300px) {
    //     font-size: 60px;
    // }
`;

export const MoreP = styled.p`
    position: relative;
    top: -70px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-top: -164px;
    // padding: 150px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 1200px;
    max-height: 900px;
    line-height: 180%;
    text-shadow: 1px -1px;
    overflow-y: auto;
    color: black;
    background-color: white;
    //box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    //box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 5px green, 0 0 10px green, 0 0 20px green;

    @media screen and (max-width: 900px) {
        font-size: 22px;
    }

    @media screen and (max-width: 768px) {
        // padding: 10px;
        // margin-top: 100px;
        line-height: 140%;
        font-size: 24px;
    }

    @media screen and (max-width: 650px) {
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

