import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import gnvpLogo from "../../../assets/images/gnvp.png";
import advstudio from "../../../assets/images/advstudio.png";
import { Link, animateScroll as scroll } from "react-scroll";

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
        ml-4
        md:ml-0
    `}
`;

const LogoText = styled.div`
  .logocolor {
    color: red;
  }

  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-white
    ml-2
    align-bottom
    cursor-pointer
    hover:text-red-700
    hover:tracking-wider
  
    `}
`;

const Image = styled.div`
  width: auto;
  cursor: pointer;

  ${tw`
        h-6
        md:h-8
    `};

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
          <img src={advstudio} />
        </Link>
      </Image>
      {/*<LogoText>FpvMate</LogoText>*/}
    </LogoContainer>
  );
}
