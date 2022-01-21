import React from "react";
import styled from "styled-components";
import AboutContent from "../components/aboutContent/AboutContent";

const Main = styled.main`
  background: #fdd87e;
  flex-grow: 2;
  display: grid;
  place-items: center;
  position: relative;
  & > * {
    grid-row: 1 / 2;
    grid-column: 1/2;
  }
  /* max-height: 100vh; */
  overflow: hidden;

  @media (min-width: 1080px) {
    max-height: 820px;
  }
`;

const About = () => {
  return (
    <Main>
      <AboutContent />
    </Main>
  );
};

export default About;
