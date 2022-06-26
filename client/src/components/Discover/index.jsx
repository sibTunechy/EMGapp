import React from 'react';
import { Link as LinkE } from 'react-router-dom';
import { Button } from '../ButtonElements';
import { InfoCon, InfoWraps, InfoRows, Column1, TextWraps, TopLine, Heading, Subtitle, BtnWraps, Column2, ImgWraps, Img } from '../Discover/DiscoverElements';

const Discover = ({lightBg, id, imgStart, topLine, lightText, headline, description, darkText, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
        <InfoCon lightBg={lightBg} id={id}>
            <InfoWraps>
                <InfoRows imgStart={imgStart}>
                    <Column1>
                        <TextWraps>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWraps>
                                <Button 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                ><LinkE to='/moreinfo'>
                                    More
                                </LinkE>
                                </Button>
                            </BtnWraps>
                        </TextWraps>
                    </Column1>
                    <Column2>
                        <ImgWraps>
                            <Img src={img} alt={alt}/>
                        </ImgWraps>
                    </Column2>
                </InfoRows>
            </InfoWraps>
        </InfoCon>
    </>
  )
}

export default Discover;