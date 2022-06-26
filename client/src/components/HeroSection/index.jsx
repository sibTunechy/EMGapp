import React, { useState} from 'react';
import Video from '../../videos/video.mp4';
import { Link as LinkA } from 'react-router-dom';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Elizabeth Mattew Group</HeroH1>
            <HeroP>
                Sign up for a new account on EMG
            </HeroP>
            <HeroBtnWrapper>
                <Button
                onMouseEnter={onHover} 
                onMouseLeave={onHover} 
                primary='true' 
                dark='true'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80} 
                    >
                    <LinkA to='/auth'>Get Started</LinkA>{hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer> 
  )
}

export default HeroSection;