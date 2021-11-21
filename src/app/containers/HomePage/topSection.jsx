import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "src/app/components/responsive";

import DribbleButton from "react-dribble-button";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  scroll-snap-align: start;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    pt-24
    sm:pt-32
    lg:pl-12
    lg:pr-12
    align-middle
    h-screen
    mx-auto
  `};
`;

const HeroContainer = styled.div`
  ${tw`
    flex
    flex-col
    h-screen
    align-middle
    justify-center
    sm:mt-8
    
    
    
  `};
`;

const Slogan = styled.h1`
  ${tw`
    relative
    text-center
    uppercase
    font-bold
    text-3xl
    px-2
    sm:text-6xl
    md:text-6xl
    xl:text-7xl
    lg:font-black
    md:font-extrabold
    text-white
    mb-4
    sm:ml-10
  `};

  text-shadow: 2px 2px 8px #000000;
`;

const Description = styled.p`
  ${tw`
    relative
    m-auto
    text-center
    drop-shadow
    text-lg
    sm:text-3xl
    text-white
    mb-4
    mt-4
    px-4
    md:px-0
    max-w-screen-lg
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};

  text-shadow: 2px 2px 8px #000000;
`;

const ButtonContainer = styled.div`
  ${tw`
  
  m-auto
  flex
  w-full
  flex-wrap
  sm:flex-nowrap
  sm:max-w-2xl
  max-w-xs
  sm:space-x-3
  space-y-3
  sm:space-y-0
  mt-4
  
  `}
`;

const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

const scrollToInfo = () => {
  scroller.scrollTo("info", {
    delay: 100,
    smooth: true,
  });
};

const scrollToContact = () => {
  scroller.scrollTo("contacto", {
    delay: 100,
    smooth: true,
  });
};

export function TopSection() {
  return (
    <TopSectionContainer id="hero">
      <HeroContainer>
        <Slogan>LA NUEVA GENERACION DE VIDEOS AEREOS</Slogan>
        <Description>
          Realizamos videos con drones FPV para sus producciones o productos, se
          parte de la nueva generacion de videos aereos!
        </Description>
        <ButtonContainer>
          <DribbleButton color="yellow" onClick={scrollToInfo}>
            Conose mas
          </DribbleButton>
          <DribbleButton color="blue-grey" onClick={scrollToContact}>
            Contactanos
          </DribbleButton>
        </ButtonContainer>
      </HeroContainer>
    </TopSectionContainer>
  );
}
