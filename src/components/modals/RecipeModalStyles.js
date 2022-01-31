import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #0000007b;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  overflow: auto;
  padding: 2rem;
`;

export const Content = styled.div`
  background: white;
  border-radius: 5px;
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-family: "Scada", sans-serif;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Container = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.1rem 0 0.4rem;
  border-bottom: 1px solid black;
`;

export const FavoriteButton = styled.button`
  padding: 3px 15px;
  border: 1px solid #d8440f;
  outline: 0;
  border-radius: 10000px;
  background: #d8440f;
  color: white;
  font-family: "Scada", sans-serif;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const UnfavoriteButton = styled.button`
  padding: 3px 15px;
  border: 1px solid #d8440f;
  outline: 0;
  border-radius: 10000px;
  background: transparent;
  color: #d8440f;
  font-family: "Scada", sans-serif;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const TimeAndServingData = styled.p`
  font-size: 1rem;
  font-family: "Scada", sans-serif;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IngredientTitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  font-family: "Scada", sans-serif;
  padding-top: 0.5rem;
`;

export const IngredientsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-top: 1rem;
`;

export const Ingredient = styled.p`
  font-size: 1.1rem;
  font-family: "Scada", sans-serif;
  max-width: 300px;
`;

export const DirectionsContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin-top: 1rem;

  &:after {
    content: "";
    position: absolute;
    border-bottom: 1px solid black;
    top: 53%;
    left: 0;
    width: 100%;
    z-index: 200;
  }
`;

export const Directions = styled.a`
  font-size: 1.2rem;
  display: inline-block;
  background: white;
  z-index: 300;
  position: relative;
  padding: 0 10px;
  font-family: "Scada", sans-serif;
  border: 1px solid #d8440f;
  border-radius: 5px;
  color: #d8440f;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LikeAndReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding-top: 2rem;
  width: 100%;

  & span {
    display: flex;
    align-items: center;
  }
`;

export const Like = styled(AiFillHeart)`
  font-size: 1.4rem;
  margin-bottom: -2px;
  cursor: pointer;

  & > * {
    color: #d8440f;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Unlike = styled(AiOutlineHeart)`
  font-size: 1.4rem;
  margin-bottom: -2px;
  cursor: pointer;

  & > * {
    color: #d8440f;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const ReviewsButton = styled.button`
  padding: 3px 15px;
  background: #fdd87e;
  border-radius: 20000px;
  white-space: nowrap;
  border: none;
  outline: 0;
  font-size: 1.2rem;
  font-family: "Scada", sans-serif;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NotLoggedIn = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-family: "Scada", sans-serif;
`;

export const NoReviews = styled.p`
  font-size: 1rem;
  font-family: "Scada", sans-serif;
  padding: 1rem 1rem 0;
`;

export const LoginLink = styled(Link)`
  font-size: 1.1rem;
  font-family: "Scada", sans-serif;
  color: #d8440f;
`;
