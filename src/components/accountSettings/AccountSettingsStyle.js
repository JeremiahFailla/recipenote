import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  border-radius: 5px;
  background: white;
  padding: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: "Scada", sans-serif;
  margin-bottom: 2rem;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Label = styled.p`
  font-size: 1.2rem;
  font-family: "Scada", sans-serif;
  flex-grow: 1;
`;

export const EditButtonContainer = styled.div`
  text-align: center;
`;

export const EditButton = styled(Link)`
  width: max-content;
  padding: 5px 15px;
  background: #d8440f;
  border: none;
  font-size: 1.2rem;
  font-family: "Scada", sans-serif;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05);
  }
`;
