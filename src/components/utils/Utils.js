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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${(props) => props.notFirstLoad || props.firstLoad || "500"};
`;

export const Spinner = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 20px solid #fdd87e;
  border-top: 20px solid #d8440f;
  animation: ${rotate} 1s linear infinite;
`;
