import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading } from "../misc/Headings.js";

import ModalVideo from "react-modal-video";

import interior from "../../../assets/images/interior.gif";
import exterior from "../../../assets/images/exterior.gif";
import producto from "../../../assets/images/producto.gif";
import deportivo from "../../../assets/images/deportivo.gif";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-400 text-center max-w-sm`;

const HeadingTitle = tw(SectionHeading)`text-white`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-96 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-white`;
const Description = tw.p`mt-2 text-sm leading-loose text-white`;
const Link = tw.a`inline-block mt-4 text-sm text-yellow-400 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

export default () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, SetVideoid] = useState();

  const cards = [
    {
      imageSrc: exterior,
      subtitle: "FPV",
      title: "Videos en Exterior",
      description:
        "Las tomas en espacios abiertos son perfectas para lograr el maximo rendimiento y velocidad de los drones FPV, son ideales para mostrar, por ejemplo, como llegar a un destino o enriqueser con tomas rapidas la locacion en su produccion.",
      url: "aBoGsmrFO-c",
      link: "Video Nevado del ruiz",
    },

    {
      imageSrc: interior,
      subtitle: "CineWhoop",
      title: "Videos en Interior",
      description:
        "Las tomas con drones FPV en interiores son sin duda de las mas atractivas actualmente, la mejor forma de mostrar su negocio de una manera unica y dinamica, se utiliza el dron tipo Cinewhoop para tener proteccion en las helices",
      url: "Ccpk03WK5-Y",
      link: "Video Nevado ",
    },

    {
      imageSrc: deportivo,
      subtitle: "FPV",
      title: "Eventos Deportivos",
      description:
        "Gracias a la velocidad y agilidad de los drones FPV se puede lograr tomas increibles en eventos deportivos, por ejemplo, carreras de motocross, motovelocidad o el ciclismo de ruta o montaña",
      url: "https://timerse.com",
      link: "Video interior",
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "CineWhoop",
      title: "Bienes Raizes",
      description:
        "De a conocer su propiedad de una manera diferente y unica, combinamos las tomas en exterior mostrando los alrededores y tomas en el interior haciendo un recorrido por todos los lugares de su propiedad",
      url: "https://timerse.com",
      link: "Video interior",
    },

    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/01/15/12/02/editing-1141505_960_720.jpg",
      subtitle: "Adobe Suite",
      title: "Edicion de Video",
      description:
        "Ofresemos el servicio de edicion de videos en dado caso que requiera una produccion completa de algun proyecto, incluyendo diseño de sonido y graficos animados entre otros.",
      url: "https://timerse.com",
      link: "Video interior",
    },

    {
      imageSrc:
        "https://images.pexels.com/photos/248515/pexels-photo-248515.png?auto=compress&cs=tinysrgb&h=750&w=1260",
      subtitle: "React",
      title: "Paginas Web",
      description:
        "Hoy en dia una buena pagina web es fundamental para darse a conoser digitalmente, ofresemos el servicio de desarrollo web totalmente personalizado a sus nesesidaes puntuales",
      url: "https://timerse.com",
      link: "Video interior",
    },
  ];

  return (
    <Container id="serv">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />

      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Nuestros Servicios</HeadingTitle>
          <HeadingDescription>
            Estos son los servicios que ofresemos, encontrara a manera de
            ejemplo un video realizado por nosotros
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link
                  onClick={() => {
                    setOpen(true);
                    SetVideoid(card.url);
                  }}
                >
                  {card.link}
                </Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
    </Container>
  );
};
