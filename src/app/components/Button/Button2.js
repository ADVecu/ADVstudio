import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #222;
  padding: 17px 60px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 500%;
    width: 120%;
    background: rgba(255, 255, 0, 1);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  &:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;

const ButtonText = styled.span`
  position: relative;
  max-width: fit-content;
  z-index: 1;
  text-shadow: 2px 2px 8px #000000;
`;

export function Button2(props) {
  const { text } = props;

  return (
    <BaseButton>
      <ButtonText>{text}</ButtonText>
    </BaseButton>
  );
}
