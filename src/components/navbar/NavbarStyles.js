import styled, { keyframes } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";

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
  padding: 1rem 2rem;
  position: relative;
`;

export const Logo = styled(Link)`
  font-size: 2rem;
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
  margin-left: 1rem;
  display: inline-block;

  &:hover {
    transform: scale(1.1);
  }
`;

export const PersonIconContainer = styled.div`
  position: relative;
  border-left: 2px solid black;
  margin-left: 1rem;
  padding-left: 1rem;
`;

export const UserLogoutContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  border: 1px solid black;
  background: #ffffff;
`;

export const LogoutButton = styled.button`
  border: none;
  outline: 0;
  padding: 5px 10px;
  background: white;
  color: black;
  font-family: "Scada", sans-serif;
  width: 100%;

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

export // Mobile Styled Componets

const show = keyframes`
  to {
    opacity: 1;
  }
`;

export const MobileUl = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 73px;
  left: 0;
  text-align: center;
  background: #ffffff7a;
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

  @media (max-width: 750px) {
    display: block;
  }
`;

export const MobileNavButton = styled(NavLink)`
  font-family: "Scada", sans-serif;
  background: ${(props) => (props.primary ? "#D8440F" : "transparent")};

  padding: 5px;
  color: ${(props) => (props.primary ? "#fff" : "#4f8175")};
  font-size: 1.1rem;

  display: inline-block;
  width: 100%;

  &:hover {
    background: #d8440f;
    color: white;
  }
`;
