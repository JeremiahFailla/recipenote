import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const SpinnerContianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdd87e;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 500;
`;

export const Spinner = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 20px solid #fdd87e;
  border-top: 20px solid #d8440f;
  animation: ${rotate} 1s linear infinite;
`;
