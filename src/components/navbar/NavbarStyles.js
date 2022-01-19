import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.58);
  position: fixed;
  left: 0;
  top: 0;
`;

export const Nav = styled.nav`
  display: flex;
  width: min(1600px, 100%);
  padding: 1rem 2rem;
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
