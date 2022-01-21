import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  padding: 2rem 2rem 1rem;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: max(300px, 27%);
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #d8440f;
  font-family: "Scada", sans-serif;
`;

export const ErrorMessage = styled.p`
  color: black;
  background: red;
  font-family: "Scada", sans-serif;
  padding: 5px 10px;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 0.2rem;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  display: block;
  margin-bottom: 5px;
  font-family: "Scada", sans-serif;
`;

export const Input = styled.input`
  padding: 10px 20px;
  font-size: 1rem;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: 0;
  background: #e7e7e7;
  font-family: "Scada", sans-serif;
  border: 1px solid
    ${(props) =>
      props.showErrorEmailInput ||
      props.showErrorPasswordInput ||
      props?.showErrorNameInput
        ? "red"
        : "transparent"};
  border-bottom: 1px solid
    ${(props) =>
      props.showErrorEmailInput ||
      props.showErrorPasswordInput ||
      props?.showErrorNameInput
        ? "red"
        : "#fdd87e"};
`;

export const ForgotPassword = styled(Link)`
  font-family: "Scada", sans-serif;
  color: #d8440f;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  display: inline-block;
`;

export const LoginButton = styled.button`
  padding: 10px;
  font-size: 1.3rem;
  text-align: center;
  background: #fdd87e;
  border-radius: 10000px;
  border: none;
  width: 100%;
  cursor: pointer;
  font-family: "Scada", sans-serif;
  margin-bottom: 4rem;
`;

export const JoinNowContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const JoinNow = styled(Link)`
  display: inline-block;
  color: #d8440f;
  font-size: 1rem;
  font-family: "Scada", sans-serif;
`;
