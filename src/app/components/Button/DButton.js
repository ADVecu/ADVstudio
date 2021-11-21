import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 0 15px;
  perspective: 1000px;
`;

const ButtonD = styled.a`
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform 0.25s;
  font-family: "Montserrat", sans-serif;

  &:before,
  &:after {
    position: absolute;
    content: ${(props) => props.text};
    height: 55px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid black;
    box-sizing: border-box;
    border-radius: 5px;
  }
  &:before {
    color: #fff;
    background: #000;
    transform: rotateY(0deg) translateZ(25px);
  }
  &:after {
    color: #000;
    transform: rotateX(90deg) translateZ(25px);
  }
  &:hover {
    transform: translateZ(-25px) rotateX(-90deg);
  }
`;

export function DButton(props) {
  const { text } = props;

  return (
    <ButtonContainer>
      <ButtonD props />
    </ButtonContainer>
  );
}
