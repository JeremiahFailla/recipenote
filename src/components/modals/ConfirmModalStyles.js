import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #0000007b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: white;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-family: "Scada", sans-serif;
  margin-bottom: 1rem;
  text-align: center;
`;
