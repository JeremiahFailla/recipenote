import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background: #fdd87e;
  padding: 1rem;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
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
  border-radius: 5px;
`;

export const Title = styled.p`
  font-size: 1.3rem;
`;

export const Extra = styled.div`
  padding: 0 2rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > * {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Likes = styled(AiFillHeart)`
  font-size: 1.5rem;
  & > * {
    color: #d8440f;
  }
`;

export const Comments = styled(FaCommentDots)`
  font-size: 1.5rem;
  & > * {
    color: #d8440f;
  }
`;
