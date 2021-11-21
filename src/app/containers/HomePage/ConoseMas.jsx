import React, { Suspense, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Model from "src/app/components/3Dmodel/Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Overlay from "./Overlay";
import { WifiLoader } from "react-awesome-loaders";

const CmSectionContainer = styled.div`
  background: radial-gradient(circle at bottom center, #212121 0%, #101010 80%);
  scroll-snap-type: mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
  ${tw`
      flex
      flex-col
      md:flex-row
      h-screen
      w-screen
      items-center
      pt-3
      justify-between
      relative
 
      
   `}
`;

const CanvasContainer = styled.div`
  background-color: transparent;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-align: start;
  ${tw`
      flex
      flex-col
      md:flex-row
      h-full
      w-screen
      items-center
      bg-opacity-0
      sm:ml-60
      relative
      
   `}
`;

export default function ConoseMas() {
  const ref = useRef();
  return (
    <CmSectionContainer id="info">
      <Overlay />
      <CanvasContainer>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
          <Suspense fallback={null}>
            <Stage
              controls={ref}
              preset="rembrandt"
              intensity={1}
              environment="city"
            >
              <Model />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate enableZoom={false} />
        </Canvas>
      </CanvasContainer>
    </CmSectionContainer>
  );
}
