import styled from "styled-components";

export const Card = styled.form`
  border-radius: 5px;
  background: white;
  padding: 2.5rem;
  width: max(305px, 35%);
  /* width: 300px */
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: "Scada", sans-serif;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-family: "Scada", sans-serif;
  margin-bottom: 3rem;
  text-align: center;
`;

export const ErrorMessageContiner = styled.div`
  position: relative;
`;

export const ErrorMessageBar = styled.p`
  color: black;
  background: red;
  font-family: "Scada", sans-serif;
  padding: 5px 10px;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  top: -45px;
  left: 0;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-family: "Scada", sans-serif;
  white-space: nowrap;
  padding: 5px 0;
`;

export const PasswordInput = styled.input`
  font-size: 1.2rem;
  font-family: "Scada", sans-serif;
  padding: 5px 15px;
  background: #e9e9e9;
  border-radius: 5px;
  border: none;
`;

export const EditButtonContainer = styled.div`
  text-align: center;
`;

export const EditButton = styled.button`
  width: max-content;
  padding: 5px 15px;
  background: #d8440f;
  border: none;
  font-size: 1.2rem;
  font-family: "Scada", sans-serif;
  border-radius: 5px;
  color: white;

  &:hover {
    transform: scale(1.05);
  }
`;
