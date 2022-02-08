import styled, { keyframes } from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Card = styled.div`
  border-radius: 5px;
  background: #ffffff90;
  padding: 1.5rem 2rem;
  /* flex-grow: 1; */
  max-width: 1600px;
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  width: fit-content;
  border-bottom: 1px solid black;
  letter-spacing: 3px;
  margin: 0 auto;
`;

export const InputContainer = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  padding: 1rem 2rem 2rem;

  @media (max-width: 420px) {
    padding: 1rem 0 2rem;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  height: 100%;
  background: #d8440f;
  padding: 9px 10px;
  border-radius: 5px 0 0 5px;
  border: none;
  outline: 0;
`;

export const SearchIcon = styled(FaSearch)`
  font-size: 1.5rem;
`;

export const SearchInput = styled.input`
  padding: 5px 10px;
  border-radius: 0 5px 5px 0;
  font-size: 1.5rem;
  outline: 0;
  border: none;
  min-width: 0;
  max-width: 350px;
  background: #fffffff7;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const RecipesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-content: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 1rem;
`;

export const Page = styled.button`
  font-size: 1rem;
  padding: 8px;
  border-radius: 5px;
  background: #d8440f;
  font-family: "Scada", sans-serif;
  color: white;
  border: none;
  outline: 0;
  cursor: pointer;
`;

export const PopularRecipesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  margin-top: 2rem;
  padding: 1rem;
  gap: 3rem;

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PopularTitle = styled.h2`
  font-size: 1.2rem;
`;

export const PopularRecipeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

export const PopularRecipeList = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;

  & span {
    white-space: nowrap;
  }
`;

export const Recipe = styled.p`
  font-size: 1.2rem;
  border-bottom: 1px solid black;
  line-height: 25px;
  display: inline-block;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #d8440f;
    border-color: #d8440f;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const Loader = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 20px solid #fdd87e;
  border-top: 20px solid #d8440f;
  animation: ${rotate} 1s linear infinite;
  margin: 0 auto;
`;

export const PageNumber = styled.div`
  font-size: 1rem;
  padding: 8px 0;
  background: transparent;
  font-family: "Scada", sans-serif;
  color: #d8440f;
`;
