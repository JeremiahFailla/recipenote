import React, { useEffect } from "react";
import * as Styled from "./FooterStyle";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <Styled.Footer location={location.pathname}>
      <p>&copy; 2022 RecipeNote</p>
      <p>
        Developed By{" "}
        <a href="https://jeremiahfailla.com" target="_blank">
          Jeremiah
        </a>
      </p>
    </Styled.Footer>
  );
};

export default Footer;
