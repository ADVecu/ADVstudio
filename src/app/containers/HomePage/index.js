import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "src/app/components/Navbar/Navbar";
import { TopSection } from "./topSection";

import Zoom from "react-reveal/Zoom";
import ConoseMas from "./ConoseMas";
import videoBGi from "../../../assets/video/bgpagina.m4v";

import Videogallery from "src/app/components/Videogallery/Videogallery";
import Faqs from "src/app/components/Faqs/Faqs";
import Contacto from "src/app/components/Contacto/Contacto";
import Footer from "src/app/components/Footer/Footer";
import Services from "src/app/components/Services/Services";

const PageContainer = styled.div`
  //background: radial-gradient(circle at bottom center, #212121 0%, #101010 80%);
  ${tw`
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const VideoContainer = styled.video`
  z-index: -2;
  ${tw`
  absolute
  left-0
  top-0
  w-full
  h-full
  object-cover
  `}
`;

const VideoOverlay = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  //mix-blend-mode: overlay;
`;

export function HomePage() {
  const Scroll = require("react-scroll");
  const scroller = Scroll.scroller;
  const [range, setrange] = useState(false);

  const scrollSnap = () => {
    if (window.scrollY >= 400 && window.scrollY <= 700) {
      setrange(true);
    } else {
      setrange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollSnap);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (range)
        scroller.scrollTo("info", {
          delay: 100,
          smooth: true,
        });
    }, 500);
    return () => clearTimeout(timer);
  }, [range]);

  return (
    <PageContainer>
      <VideoOverlay />
      <VideoContainer autoPlay={true} loop muted>
        <source src={videoBGi} type="video/mp4" />
      </VideoContainer>
      <Navbar />
      <TopSection />
      <Zoom>
        <ConoseMas />
      </Zoom>

      <Services />

      <Zoom>
        <Videogallery />
      </Zoom>
      <Zoom>
        <Faqs />
      </Zoom>
      <Zoom>
        <Contacto />
      </Zoom>
      <Footer />
    </PageContainer>
  );
}
