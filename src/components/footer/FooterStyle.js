import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #000000;
  padding: 1rem;
  flex-grow: 1;

  & p,
  a {
    color: white;
    font-family: "Scada", sans-serif;
    margin-top: 5px;
  }
  & a {
    color: #f69775;
  }
`;
