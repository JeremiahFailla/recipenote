import React, { useState } from "react";
import * as Styled from "./NavbarStyles.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.js";
import { signOut } from "firebase/auth";
import Favorites from "../favorites/Favorites.js";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showUserBox, setShowUserBox] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showFavoritesMobile, setShowFavoritesMobile] = useState(false);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showMobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
    setShowUserBox(false);
    setShowFavorites(false);
    setShowFavoritesMobile(false);
  };

  const showUserBoxHandler = () => {
    setShowMobileNav(false);
    setShowUserBox(!showUserBox);
    setShowFavorites(false);
    setShowFavoritesMobile(false);
  };

  const userLogoutHandler = () => {
    dispatch({ type: "setLogout" });
    signOut(auth);
    navigate("/", { replace: true });
  };

  const showFavoritesHandler = () => {
    setShowFavorites(!showFavorites);
    setShowMobileNav(false);
    setShowUserBox(false);
  };

  const showFavoritesMobileHandle = () => {
    setShowFavoritesMobile(!showFavoritesMobile);
    setShowMobileNav(false);
    setShowUserBox(false);
  };

  const closeAll = () => {
    setShowMobileNav(false);
    setShowUserBox(false);
    setShowFavorites(false);
    setShowFavoritesMobile(false);
  };

  return (
    <Styled.Header>
      <Styled.Nav>
        <Styled.Logo to="/" onClick={closeAll}>
          RecipeNote
        </Styled.Logo>
        <Styled.Ul>
          <li>
            <Styled.Navlink to="/" onClick={closeAll}>
              Home
            </Styled.Navlink>
          </li>
          <li>
            <Styled.Navlink to="/about" onClick={closeAll}>
              About
            </Styled.Navlink>
          </li>
          <li>
            <Styled.Navlink to="/recipes" onClick={closeAll}>
              Recipes
            </Styled.Navlink>
          </li>
          {userState && (
            <li>
              <Styled.FavoritesContainer>
                <Styled.Favorites onClick={showFavoritesHandler}>
                  Favorited
                </Styled.Favorites>
                {showFavorites && <Favorites close={closeAll} />}
              </Styled.FavoritesContainer>
            </li>
          )}
          {!userState && (
            <React.Fragment>
              <li>
                <Styled.NavButton to="/login" onClick={closeAll} secondary>
                  Login
                </Styled.NavButton>
              </li>
              <li>
                <Styled.NavButton to="/joinnow" onClick={closeAll} primary last>
                  Join Now
                </Styled.NavButton>
              </li>
            </React.Fragment>
          )}
        </Styled.Ul>
        <Styled.FavoritesContainer>
          <Styled.FavoritesIcon onClick={showFavoritesMobileHandle} />
          {showFavoritesMobile && <Favorites mobile={-32} />}
        </Styled.FavoritesContainer>
        {userState && (
          <Styled.PersonIconContainer onClick={showUserBoxHandler}>
            <Styled.PersonIcon />
            {showUserBox && (
              <Styled.UserLogoutContainer>
                <Styled.Username>
                  Hello, {userState.displayName}
                </Styled.Username>
                <Styled.UserAccount to="/accountsettings" onClick={closeAll}>
                  Account Details
                </Styled.UserAccount>
                <Styled.LogoutButton onClick={userLogoutHandler}>
                  Logout
                </Styled.LogoutButton>
                <Styled.Point></Styled.Point>
              </Styled.UserLogoutContainer>
            )}
          </Styled.PersonIconContainer>
        )}
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
              <Styled.MobileLink to="/recipes/" onClick={showMobileNavHandler}>
                Recipes
              </Styled.MobileLink>
            </li>
            {!userState && (
              <React.Fragment>
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
              </React.Fragment>
            )}
          </Styled.MobileUl>
        )}
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Navbar;
