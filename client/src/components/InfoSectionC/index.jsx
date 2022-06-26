import React from 'react';
// import { Button } from '../ButtonElements';
// import { Link as LinkF } from 'react-router-dom';
import { InfoContain, InfoWrap, InfoRow, Column1, TextWrap, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img} from './InfoSectionCElements';

function InfoSectC({lightBg, id, imgStart,topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) {
  return (
    <>
        <InfoContain lightBg={lightBg} id={id}>
            <InfoWrap>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrap>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                {/* <Button 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                ><LinkF to='/'>
                                    More Links
                                </LinkF>
                                </Button> */}
                            </BtnWrap>
                        </TextWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrap>
        </InfoContain>
    </>
  )
}

export default InfoSectC;