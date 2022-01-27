import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background: white;
  padding: 0.5rem;
  width: 100%;
  text-align: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(235, 211, 108, 0.198);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Title = styled.p`
  font-size: 1.3rem;
`;
