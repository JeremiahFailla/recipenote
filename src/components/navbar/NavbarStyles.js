import styled, { keyframes } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";

const show = keyframes`
  to {
    opacity:1;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff7d;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: min(1600px, 100%);
  padding: 0.5rem 1.5rem;
  position: relative;
`;

export const Logo = styled(Link)`
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-family: "Scada", sans-serif;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Navlink = styled(NavLink)`
  margin: 1rem;
  font-size: 1.4rem;
  font-family: "Scada", sans-serif;
  transition: all 0.5s ease;
  &.active {
    color: #d8440f;
  }

  &:hover {
    color: #d3582c;
  }
`;

export const NavButton = styled(NavLink)`
  font-family: "Scada", sans-serif;
  border-radius: 5px;
  background: ${(props) => (props.primary ? "#D8440F" : "transparent")};
  border: 2px solid #d8440f;
  padding: 5px 12px;
  color: ${(props) => (props.primary ? "#fff" : "#D8440F")};
  font-size: 1.4rem;
  margin: 0.5rem;
  margin-left: 1rem;
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Favorites = styled.p`
  margin: 1rem;
  font-size: 1.4rem;
  font-family: "Scada", sans-serif;
  transition: all 0.5s ease;
  cursor: pointer;
  &.active {
    color: #d8440f;
  }

  &:hover {
    color: #d3582c;
  }
`;

export const FavoritesContainer = styled.div`
  position: relative;
`;

export const PersonIconContainer = styled.div`
  border-left: 2px solid black;
  margin-left: 1rem;
  padding-left: 1rem;
  position: relative;
`;

export const UserContainer = styled.div`
  position: absolute;
  top: 35px;
  right: -15px;
  border: 1px solid black;
  background: #ffffff;
  opacity: 0;
  animation: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  border-radius: 5px;
  z-index: 8000;
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: #75757561;
  z-index: 7000;
  opacity: 0;
  animation: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const Point = styled.div`
  position: absolute;
  top: -5px;
  right: 25px;
  border: 1px solid black;
  border-right: none;
  border-bottom: none;
  background: white;
  width: 9px;
  height: 9px;
  transform: rotate(45deg);
`;

export const UserAccount = styled(Link)`
  padding: 5px 10px;
  background: white;
  color: black;
  font-family: "Scada", sans-serif;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  display: inline-block;

  &:hover {
    background: #d8440f;
    color: white;
  }
`;

export const LogoutButton = styled.button`
  border: none;
  outline: 0;
  padding: 5px 10px;
  background: white;
  color: black;
  font-family: "Scada", sans-serif;
  width: 100%;
  font-size: 1rem;
  border-radius: 0 0 5px 5px;

  &:hover {
    background: #d8440f;
    color: white;
  }
`;

export const Username = styled.p`
  font-size: 1rem;
  padding: 5px 10px;
  text-align: center;
  color: black;
  font-family: "Scada", sans-serif;
  white-space: nowrap;
`;

export const PersonIcon = styled(BsFillPersonFill)`
  font-size: 2rem;
  cursor: pointer;

  & path {
    color: #d8440f;
  }
`;

// Mobile Styled Componets

export const MobileUl = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 73px;
  left: 0;
  text-align: center;
  background: #ffffffeb;
  width: 100%;
  animation-name: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

export const MobileLink = styled(NavLink)`
  padding: 5px;
  font-family: "Scada", sans-serif;
  font-size: 1.1rem;
  background: transparent;

  width: 100%;
  display: inline-block;
  &.active {
    color: #d8440f;
  }

  &:hover {
    color: white;
    background: #d8440f;
  }
`;

export const MobileBars = styled(CgDetailsMore)`
  font-size: 2rem;
  cursor: pointer;
  display: none;
  margin: 0.9rem 1rem;

  @media (max-width: 750px) {
    display: block;
  }
`;

export const MobileNavButton = styled(NavLink)`
  font-family: "Scada", sans-serif;
  background: ${(props) => (props.primary ? "#D8440F" : "transparent")};

  padding: 5px;
  color: ${(props) => (props.primary ? "#fff" : "#D8440F")};
  font-size: 1.1rem;

  display: inline-block;
  width: 100%;

  &:hover {
    background: #d8440f;
    color: white;
  }
`;

export const FavoritesIcon = styled(BsBookmarkFill)`
  font-size: 1.6rem;
  display: none;
  cursor: pointer;

  & > *:hover {
    color: #d8440f;
    padding: 8px;
  }

  @media (max-width: 750px) {
    display: block;
  }
`;
