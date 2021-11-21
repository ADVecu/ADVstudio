import React from "react";
import "./App.css";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { HomePage } from "./app/containers/HomePage/";
import ReactFullpage from "@fullpage/react-fullpage";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
