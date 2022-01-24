import React, { useState } from "react";
import * as Styled from "./NavbarStyles.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showUserBox, setShowUserBox] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showMobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
  };

  const showUserBoxHandler = () => {
    setShowUserBox(!showUserBox);
  };

  const userLogoutHandler = () => {
    dispatch({ type: "setLogout" });
    navigate("/", { replace: true });
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
          {!user && (
            <React.Fragment>
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
            </React.Fragment>
          )}

          {user && (
            <Styled.PersonIconContainer
              onMouseLeave={showUserBoxHandler}
              onMouseEnter={showUserBoxHandler}
              onClick={showUserBoxHandler}
            >
              <Styled.PersonIcon />
              {showUserBox && (
                <Styled.UserLogoutContainer>
                  <Styled.Username>Hello, {user.displayName}</Styled.Username>
                  <Styled.UserAccount to="/accountsettings">
                    Account Details
                  </Styled.UserAccount>
                  <Styled.LogoutButton onClick={userLogoutHandler}>
                    Logout
                  </Styled.LogoutButton>
                </Styled.UserLogoutContainer>
              )}
            </Styled.PersonIconContainer>
          )}
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
                secondary="true"
                onClick={showMobileNavHandler}
              >
                Login
              </Styled.MobileNavButton>
            </li>
            <li>
              <Styled.MobileNavButton
                to="/joinnow"
                primary="true"
                last="true"
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
