import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { FaAngleDoubleDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ModalVideo from "react-modal-video";
import { SiYoutubetv } from "react-icons/si";

import Chevron from "src/app/components/Icons/Chevron";

import { CircularProgress } from "@mui/material";
import { Image } from "react-shimmer";

import frame from "../../../assets/images/frame.png";
import gopro2 from "../../../assets/images/gopro2.png";

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  user-select: none;
  max-width: fit-content;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 15%;

  overflow-y: auto;
  overflow-x: auto;
  z-index: 2;
  scroll-snap-type: y proximity;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 2000px) {
    padding-left: 0px;
  }
`;

const FeatureContainer = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;

const InitFeatureContainer = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;

const TextContainer = styled.div`
  position: sticky;
  top: 0px;
  display: inline-block;
  max-width: 600px;
  width: 100%;
  cursor: grab;
  padding: 80px 80px 80px 80px;
  color: #a0a0a0;
  line-height: 1.6em;
  font-size: 15px;
  letter-spacing: 1.5px;
  height: 100vh;

  @media (max-width: 600px) {
    padding: 80px 50px 50px 50px;
    text-align: center;
  }

  h1 {
    -webkit-font-smoothing: auto;
    pointer-events: none;
    color: white;
    font-size: 4em;
    font-weight: 100;
    line-height: 1em;
    margin: 0;
    margin-bottom: 0.25em;

    @media (max-width: 600px) {
      font-size: 2.5em;
    }

    p {
      font-size: 2rem;
      padding-top: 20px;
      color: black;
    }
  }
`;

const TextParagraph = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-top: 2rem;

  ul {
    list-style-type: disc;
    list-style-position: inside;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  position: sticky;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-top: 5vh;

  @media (max-width: 600px) {
    padding-top: 5vh;
  }
`;

const IconContainer = styled.span`
  height: 40vh;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  display: flex;
  animation: breathing 1s ease-out infinite normal;
  color: #a0a0a0;

  @media (max-width: 600px) {
    height: 32vh;
  }

  @-webkit-keyframes breathing {
    0% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }

    25% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }

  @keyframes breathing {
    0% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    25% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
`;

const ScrollContainer = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

const ImageContainer = styled.div`
  border-radius: 40px;
  overflow: "hidden";
`;

const Overlay = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, SetVideoid] = useState();

  return (
    <OverlayContainer>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <InitFeatureContainer>
        <TextContainer>
          <h1>¿Que es FPV?</h1>
          <TextParagraph>
            Significa First Person View (vista en primera persona) donde el
            piloto ve lo que el drone esta viendo, es como estar dentro de la
            cabina del drone
          </TextParagraph>

          <TextParagraph>
            Los drones son construidos a la medida, son resistentes, agiles y
            pueden llevar camaras de accion de altisima calidad.
          </TextParagraph>

          <Chevron />
        </TextContainer>
      </InitFeatureContainer>

      <FeatureContainer>
        <TextContainer>
          <h1>¿Porque FPV?</h1>

          <TextParagraph>
            Tenemos Total Control del movimiento, ademas de vuelos muy cerca del
            objetivo con una agilidad suprema que viene del adn de carreras de
            los drones FPV. De esta manera estamos donde esta la accion, y no
            mirando hacia abajo como susede con los drones tradicionales.
          </TextParagraph>

          <ButtonContainer>
            <AwesomeButton
              onPress={() => {
                setOpen(true);
                SetVideoid("qkURF3jYRHo");
              }}
            >
              <IconContext.Provider value={{ size: 30, color: "red" }}>
                <SiYoutubetv />
              </IconContext.Provider>
              Ver Video
            </AwesomeButton>
          </ButtonContainer>

          <TextParagraph>
            En los ultimos años los drones FPV estan cada dia mas presentes en
            grandes producciones y marcas como RedBull los utilizan para sus
            deportes extremos!
          </TextParagraph>
        </TextContainer>
      </FeatureContainer>
      <FeatureContainer>
        <TextContainer>
          <h1>Equipo FPV</h1>

          <TextParagraph>
            Consiste en una camara especial de video de muy baja latencia y un
            transmisor de video que emite esta señal hacia el piloto.
          </TextParagraph>

          <Image
            src="https://cdn.pixabay.com/photo/2017/01/18/09/53/headset-1989325_960_720.jpg"
            fallback={<CircularProgress />}
            NativeImgProps={{
              style: {
                borderRadius: "40px",
                maxWidth: "100%",
                marginTop: "3vh",
                boxShadow: "box-shadow: 10px 10px 5px",
              },
            }}
          />

          <TextParagraph>
            la señal del trasmisor llega unas gafas que reciven la señal de
            video, de esta manera vemos lo que el dron ve en primera persona
          </TextParagraph>
        </TextContainer>
      </FeatureContainer>
      <FeatureContainer>
        <TextContainer>
          <h1>Radio Control</h1>

          <TextParagraph>
            Ofrese un alcanze de mas de 2 kilometros, utiliza protocolos de
            comunicacion avanzados para garantizar baja latencia y calidad de
            enlaze optima
          </TextParagraph>

          <Image
            src="https://cdn.pixabay.com/photo/2017/04/30/08/03/pilot-2272298_960_720.jpg"
            fallback={<CircularProgress />}
            NativeImgProps={{
              style: {
                borderRadius: "40px",
                margin: "0px auto",
                paddingTop: "3vh",
                maxWidth: "70%",
                boxShadow: "box-shadow: 10px 10px 5px",
              },
            }}
          />
        </TextContainer>
      </FeatureContainer>
      <FeatureContainer>
        <TextContainer>
          <h1>Camara de Video</h1>

          <TextParagraph>
            Utilizamos principalmente camaras de accion Gopro, con capaciodad de
            grabar hasta 4k a 60fps, y 2.7k a 120fps que permite tomas en camara
            lenta, tambien es posible utilizar camaras 360 como la Insta360
          </TextParagraph>

          <Image
            src={gopro2}
            fallback={<CircularProgress />}
            NativeImgProps={{
              style: {
                borderRadius: "40px",
                margin: "0px auto",
                paddingTop: "3vh",
                maxWidth: "70%",
                boxShadow: "box-shadow: 10px 10px 5px",
              },
            }}
          />

          <TextParagraph>
            Todas las tomas pasan por un software de edicion posterior al rodaje
            que logra imagenes perfectamente estabilizadas.
          </TextParagraph>
        </TextContainer>
      </FeatureContainer>
      <FeatureContainer>
        <TextContainer>
          <h1>Ligero y Resistente</h1>

          <TextParagraph>
            Construidos en fibra de carbono y materiles ligeros como aluminio y
            titanio permiten un peso muy bajo, logrando una agilidad insuperable
            y poder cargar con camaras cada vez mas pesadas.
          </TextParagraph>

          <Image
            src={frame}
            fallback={<CircularProgress />}
            NativeImgProps={{
              style: {
                borderRadius: "40px",
                margin: "0px auto",
                paddingTop: "3vh",
                maxWidth: "100%",
                boxShadow: "box-shadow: 10px 10px 5px",
              },
            }}
          />

          <TextParagraph>
            Son armados a la medida y por nosotros, lo que permite repararlos en
            el campo rapidamente si algun problema ocurre
          </TextParagraph>
        </TextContainer>
      </FeatureContainer>
      <FeatureContainer>
        <TextContainer>
          <h1>Especificaciones</h1>

          <TextParagraph>
            <ul>
              <li>Peso de 700 gramos aproximadamente</li>
              <li>Alcansa una velocidad de mas de 120 km/h</li>
              <li>GPS incorporado para retorno casa</li>
              <li>Tiempo de vuelo aproximado de 5 - 7 minutos por bateria</li>
              <li>
                Tenemos suficientes baterias para todo un dia de grabacion
              </li>
              <li>
                Motores sin escobillas que giran a mas de 30.000 revoluciones
                por minuto
              </li>
            </ul>
          </TextParagraph>
        </TextContainer>
      </FeatureContainer>
    </OverlayContainer>
  );
};

export default Overlay;
