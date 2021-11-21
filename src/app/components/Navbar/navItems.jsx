import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { stack as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyle from "./menuStyle";
import { Link, animateScroll as scroll } from "react-scroll";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
    z-50
    `}
`;

const NavItem = styled.li`
  ${tw`
    text-xl
    md:text-base
    text-white
    font-medium
    mr-1
    h-full
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    pb-5
    pt-5
    border-transparent
    border-b-4
    hover:border-yellow-400
    
    
 `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
    text-black
    text-xl
    mb-3
    focus:text-white
    `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyle}>
        <ListContainer>
          <NavItem menu>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Inicio
            </Link>
          </NavItem>
          <NavItem menu>
            <Link
              to="info"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              Conoce Mas
            </Link>
          </NavItem>
          <NavItem menu>
            <Link
              to="serv"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              Servicios
            </Link>
          </NavItem>
          <NavItem menu>
            <Link
              to="video"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Nuestro Trabajo
            </Link>
          </NavItem>
          <NavItem menu>
            <Link
              to="faqs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Faqs
            </Link>
          </NavItem>
          <NavItem menu>
            <Link
              to="contacto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacto
            </Link>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
          Inicio
        </Link>
      </NavItem>
      <NavItem>
        <Link to="info" spy={true} smooth={true} offset={-10} duration={500}>
          Conoce Mas
        </Link>
      </NavItem>
      <NavItem>
        <Link to="serv" spy={true} smooth={true} offset={-10} duration={500}>
          Servicios
        </Link>
      </NavItem>
      <NavItem>
        <Link to="video" spy={true} smooth={true} offset={-70} duration={500}>
          Nuestro Trabajo
        </Link>
      </NavItem>
      <NavItem>
        <Link to="faqs" spy={true} smooth={true} offset={-70} duration={500}>
          Faqs
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="contacto"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contacto
        </Link>
      </NavItem>
    </ListContainer>
  );
}
