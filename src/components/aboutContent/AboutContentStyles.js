import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackdropImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 50;
  padding: 2rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.897);
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 1rem;

  @media (max-width: 460px) {
    margin: 80px 1rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #a8a8a853;
  z-index: 10;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  width: fit-content;
  border-bottom: 2px solid black;
  margin-bottom: 2rem;
  align-self: center;
`;

export const Desciption = styled.p`
  font-size: 1.5rem;
  line-height: 35px;
`;

export const SignUpFeatures = styled.p`
  font-size: 1.5rem;
  line-height: 35px;
  margin-top: 3rem;
`;

export const Link = styled(NavLink)`
  color: rgba(216, 68, 15, 1);
`;

export const Bonuses = styled.li`
  font-size: 1.5rem;
  line-height: 35px;
  margin-left: 1rem;
  &:first-of-type {
    margin-top: 0.5rem;
  }
`;
