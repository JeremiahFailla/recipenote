import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  background: white;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: "Scada", sans-serif;
  margin-bottom: 1rem;
`;

export const CurrentData = styled.p`
  font-size: 1.1rem;
  margin: 1.5rem 0 0.5rem;
  font-family: "Scada", sans-serif;

  &:first-of-type {
    margin: 1rem 0 0.5rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const ChangeInfoInput = styled.input`
  padding: 5px 15px;
  font-size: 1rem;
  border: none;
  background: #e7e7e7;
  border-radius: 5px 0 0 5px;
  font-family: "Scada", sans-serif;
  flex-grow: 1;

  &:focus {
    border: none;
    outline: 0;
  }
`;

export const ChangeInfoButton = styled.button`
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 1rem;
  font-family: "Scada", sans-serif;
  padding: 0 10px;
  background: #e7e7e7;
  cursor: pointer;

  &:hover {
    background: #fdd87e;
  }
`;
