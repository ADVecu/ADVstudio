import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../Logo/Logo.js";
import { NavItems } from "./navItems.jsx";

const NavbarBackground = styled.div`
  min-height: 70px;
  background-color: ${({ scrollNav }) =>
    scrollNav ? "rgba(0, 0, 0, 0.75)" : "transparent"};
  transition: background-color 0.5s ease;
  ${tw`
      flex
      w-full
      fixed
      justify-center
      z-50
   `}
`;

const NavbarContainer = styled.nav`
  min-height: 60px;
  ${tw`
      w-full
      max-w-screen-2xl
      flex
      flex-row
      items-center
      pt-1
      lg:pl-12
      lg:pr-12
      justify-between
      z-50
      fixed
      
   `}
`;

const LogoContainer = styled.div``;

export function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 160) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <NavbarBackground scrollNav={scrollNav}>
      <NavbarContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavItems />
      </NavbarContainer>
    </NavbarBackground>
  );
}
