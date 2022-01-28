import styled, { keyframes } from "styled-components";

const show = keyframes`
  to {
    opacity:1;
  }
`;

export const FavoritesContainer = styled.div`
  position: absolute;
  top: 30px;
  right: ${(props) => props.mobile || "20"}px;
  border: 1px solid black;
  background: #ffffff;
  border-radius: 5px;
  width: 250px;
  opacity: 0;
  animation: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  z-index: 8000;
`;

export const NoRecipes = styled.p`
  font-family: "Scada", sans-serif;
  font-size: 1rem;
  padding: 8px 15px;
  text-align: center;
`;

export const Point = styled.div`
  position: absolute;
  top: -5px;
  right: 40px;
  border: 1px solid black;
  border-right: none;
  border-bottom: none;
  background: white;
  width: 9px;
  height: 9px;
  transform: rotate(45deg);
`;

export const Recipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-height: 50px;
`;

export const RecipeImage = styled.img`
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

export const RecipeTitle = styled.p`
  font-family: "Scada", sans-serif;
  font-size: 1rem;
  padding: 8px 15px;
  text-align: center;
  font-size: 1rem;
  flex-grow: 1;
`;
