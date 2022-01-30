import styled from "styled-components";
import { GrFormPrevious } from "react-icons/gr";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const Input = styled.input`
  border: none;
  outline: 0;
  padding: 5px 10px;
  font-size: 1rem;
  border-bottom: 1px solid #fdd87e;
  flex-grow: 1;
  min-width: 0;
  font-family: "Scada", sans-serif;
`;

export const EnterButton = styled(GrFormPrevious)`
  transform: rotate(180deg);
  font-size: 1.5rem;
  width: 30px;
  cursor: pointer;
  & > * {
    padding: 10px;
  }
`;
