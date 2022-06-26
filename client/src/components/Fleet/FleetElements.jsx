import styled from 'styled-components';

export const FleetContainer = styled.div`
    color: crimson;
    background-color: crimson;

    @media screen and (max-width) {
        padding: 100px 0;
    }
    border: 10px solid brown;
`;

export const FleetWrap = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    border: 3px solid purple;
`;

export const FleetRows = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
    }
    border: 5px solid yellow;
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    border: 5px solid red;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    border: 10px solid green;
`;

export const FleetHead = styled.p`
    color: #01bf71;
    font-size: 25px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.p`
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.3;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? 'black': '#010606')};

    @media screen and (max-width : 480px) {
        font-size: 32px;
    }
`;


export const TextWrap = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    border: 10px solid black;
`;

export const Fleetdetails = styled.p`
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.3;
    font-weight: 600;
    // color: ${({lightText}) => (lightText ? 'black' : '#010606')};
    color: black;

    @media screen and (max-width : 480px) {
        font-size: 32px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 500px;
    margin-bottom: 200px;
    border: 10px solid black;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border: 5px dashed red;
`;

// correct the css of the borders