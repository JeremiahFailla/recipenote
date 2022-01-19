import React from "react";
import * as Styled from "./NavbarStyles.js";

const Navbar = () => {
  return (
    <Styled.Header>
      <Styled.Nav>
        <Styled.Logo to="/">RecipeNote</Styled.Logo>
        <Styled.Ul>
          <li>
            <Styled.Navlink to="/">Home</Styled.Navlink>
          </li>
          <li>
            <Styled.Navlink to="/about">About</Styled.Navlink>
          </li>
          <li>
            <Styled.Navlink to="/recipes">Recipes</Styled.Navlink>
          </li>
          <li>
            <Styled.NavButton to="/login" secondary>
              Login
            </Styled.NavButton>
          </li>
          <li>
            <Styled.NavButton to="/joinnow" primary last>
              Join Now
            </Styled.NavButton>
          </li>
        </Styled.Ul>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Navbar;
