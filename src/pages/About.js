import React from "react";
import styled from "styled-components";
import AboutContent from "../components/aboutContent/AboutContent";

const Main = styled.main`
  background: white;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const About = () => {
  return (
    <Main>
      <AboutContent />
    </Main>
  );
};

export default About;
