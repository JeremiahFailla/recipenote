import React, { useState } from "react";
import * as Styled from "./NavbarStyles.js";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const showMobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
  };

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
        <Styled.MobileBars onClick={showMobileNavHandler} />
        {showMobileNav && (
          <Styled.MobileUl>
            <li>
              <Styled.MobileLink to="/" onClick={showMobileNavHandler}>
                Home
              </Styled.MobileLink>
            </li>
            <li>
              <Styled.MobileLink to="/about" onClick={showMobileNavHandler}>
                About
              </Styled.MobileLink>
            </li>
            <li>
              <Styled.MobileLink to="/recipes" onClick={showMobileNavHandler}>
                Recipes
              </Styled.MobileLink>
            </li>
            <li>
              <Styled.MobileNavButton
                to="/login"
                secondary
                onClick={showMobileNavHandler}
              >
                Login
              </Styled.MobileNavButton>
            </li>
            <li>
              <Styled.MobileNavButton
                to="/joinnow"
                primary
                last
                onClick={showMobileNavHandler}
              >
                Join Now
              </Styled.MobileNavButton>
            </li>
          </Styled.MobileUl>
        )}
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Navbar;
