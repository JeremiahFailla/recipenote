import React from "react";
import * as Styled from "./FooterStyle";

const Footer = () => {
  return (
    <Styled.Footer>
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
