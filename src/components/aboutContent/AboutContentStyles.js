import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Backdrop = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${require("../../imgs/about.jpg")});
  background-repeat: no-repeat;
  /* background-size: cover; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 2000px;
`;

export const TextContent = styled.div`
  padding: 2rem;
  border-radius: 5px;
  background: rgba(234, 234, 234, 0.94);
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1000px;
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
