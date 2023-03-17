import React from 'react';
import video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg,HeroContent, HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight  } from './HeroStyles';
import { useState } from 'react';
import { Button } from '../ButtonStyle';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type = 'video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1> Writing has never been easier </HeroH1>
            <HeroP>
                Sign up now and receive 7 days free
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true' dark='true'>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight/> }
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection