import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import styled from "styled-components";
import tw from "twin.macro";
import videoAutofloresta from "../../../assets/video/Autofloresta.m4v";

const VideogalleryPage = styled.div`
  ${tw`
      overflow-y-auto
      h-full
      w-screen
      pt-20
   `}
`;

const VideogalleryContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-center
   `}
`;

const HoverVideoContainer = styled.div`
  ${tw`
    m-5
    max-w-xl
   `}
`;

const VideogallerylTitle = styled.h1`
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
    my-10
    justify-center
    align-middle
  `};

  text-shadow: 2px 2px 8px #000000;
`;

const VideoGallerytext = styled.p`
  ${tw`
    relative
    m-auto
    text-center
    drop-shadow
    text-2xl
    text-white
    mb-4
    mt-4
    max-w-screen-md
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};

  text-shadow: 2px 2px 8px #000000;
`;

function Videogallery() {
  return (
    <VideogalleryPage id="video">
      <VideogallerylTitle>Nuestro Trabajo</VideogallerylTitle>
      <VideoGallerytext>
        Estos son algunos de nuetros trabajos y videos que hemos realizado
      </VideoGallerytext>
      <VideogalleryContainer>
        <HoverVideoContainer>
          <HoverVideoPlayer
            videoSrc={videoAutofloresta}
            pausedOverlay={
              <img
                src="src\assets\images\gnvp.png"
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
            controls
          />
        </HoverVideoContainer>

        <HoverVideoContainer>
          <HoverVideoPlayer
            videoSrc={videoAutofloresta}
            pausedOverlay={
              <img
                src="src\assets\images\gnvp.png"
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </HoverVideoContainer>
      </VideogalleryContainer>

      <VideogalleryContainer>
        <HoverVideoContainer>
          <HoverVideoPlayer
            videoSrc={videoAutofloresta}
            pausedOverlay={
              <img
                src="src\assets\images\gnvp.png"
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </HoverVideoContainer>

        <HoverVideoContainer>
          <HoverVideoPlayer
            videoSrc={videoAutofloresta}
            pausedOverlay={
              <img
                src="src\assets\images\gnvp.png"
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </HoverVideoContainer>
      </VideogalleryContainer>

      <VideogalleryContainer>
        <HoverVideoContainer>
          <HoverVideoPlayer
            videoSrc={videoAutofloresta}
            pausedOverlay={
              <img
                src="src\assets\images\gnvp.png"
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </HoverVideoContainer>

        <HoverVideoContainer>
          <HoverVideoPlayer
            videoSrc={videoAutofloresta}
            pausedOverlay={
              <img
                src="src\assets\images\gnvp.png"
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </HoverVideoContainer>
      </VideogalleryContainer>
    </VideogalleryPage>
  );
}

export default Videogallery;
