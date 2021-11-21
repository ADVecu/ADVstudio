import React, { useState } from "react";
import Carousel from "t-a-e-3d-carousel-reactjs";
import styled from "styled-components";
import tw from "twin.macro";
import ModalVideo from "react-modal-video";

const CarouselPage = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  ${tw`
      flex-col
      h-screen
      w-screen
      pt-6
      justify-center
      align-middle
   `}
`;

const CarouselContainer = styled.div`
  padding-left: 5vw;
  ${tw`
    justify-center
    justify-items-center
    items-center
    mt-5
   `}
`;

const CarouselTitle = styled.h1`
  ${tw`
    
    flex
    text-center
    uppercase
    font-bold
    sm:text-6xl
    md:text-7xl
    xl:text-7xl
    lg:font-black
    md:font-extrabold
    text-white
    mt-20
    justify-center
    align-middle
  `};

  text-shadow: 2px 2px 8px #000000;
`;

function Carouselcomp() {
  const [isOpen, setOpen] = useState(false);
  const [videoId, SetVideoid] = useState();

  const Images = [
    {
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <CarouselPage>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <CarouselTitle>Nuestro Trabajo</CarouselTitle>
      <CarouselContainer>
        <Carousel
          imageList={Images}
          onClick={() => {
            setOpen(true);
            SetVideoid("GTifvVZBNWs");
          }}
        />
      </CarouselContainer>
    </CarouselPage>
  );
}

export default Carouselcomp;
