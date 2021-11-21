import React from "react";
import styled from "styled-components";

function Chevron() {
  const ScrollContainer = styled.div`
    display: flex;
    position: relative;
    width: 24px;
    height: 24px;
    margin-left: 45%;

    @media (min-width: 600px) {
      margin-top: 25%;
    }

    @media (min-width: 768px) {
      margin-top: 30%;
    }

    @media (min-width: 1024px) {
      margin-top: 25%;
    }

    @media (min-width: 1536px) {
      margin-top: 70%;
    }
  `;

  const ChevronElement = styled.div`
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;

    &:first-child {
      animation: move 3s ease-out 1s infinite;
    }

    &:nth-child(2) {
      animation: move 3s ease-out 2s infinite;
    }

    &:before,
    &:after {
      content: " ";
      position: absolute;
      top: 0;
      height: 100%;
      width: 51%;
      background: #fff;
    }

    &:before {
      left: 0;
      transform: skew(0deg, 30deg);
    }

    &:after {
      right: 0;
      width: 50%;
      transform: skew(0deg, -30deg);
    }

    @keyframes move {
      25% {
        opacity: 1;
      }
      33% {
        opacity: 1;
        transform: translateY(30px);
      }
      67% {
        opacity: 1;
        transform: translateY(40px);
      }
      100% {
        opacity: 0;
        transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
      }
    }
  `;

  const TextContainer = styled.span`
    display: block;
    margin-top: 75px;
    margin-left: -30px;
    font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0.25;
    animation: pulse 2s linear alternate infinite;

    @keyframes pulse {
      to {
        opacity: 1;
      }
    }
  `;

  return (
    <ScrollContainer>
      <ChevronElement />
      <ChevronElement />
      <ChevronElement />
      <TextContainer>Scroll down</TextContainer>
    </ScrollContainer>
  );
}

export default Chevron;
