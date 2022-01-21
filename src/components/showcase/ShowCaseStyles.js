import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export const Img = styled.img`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  max-height: 100%;

  @media (max-width: 605px) {
    aspect-ratio: 1/1.2;
  }
`;

export const TextContent = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "title"
    "quote"
    "quoteName"
    "searchBar";

  @media (max-width: 605px) {
    grid-row-start: 1;
  }
`;

export const Title = styled.h1`
  grid-area: title;
  font-size: clamp(1.7rem, 2.5vw, 3rem);
  border-bottom: 2px solid black;
  align-self: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: max-content;
`;

export const Quote = styled.p`
  grid-area: quote;
  align-self: center;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  text-align: center;
`;

export const QuoteName = styled.p`
  grid-area: quoteName;
  text-align: center;
  align-items: center;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  padding-bottom: 2rem;
`;

export const SeachBar = styled.form`
  grid-area: searchBar;
  display: flex;
  justify-content: center;
  align-self: flex-end;
`;

export const SearchIconContainer = styled.div`
  display: flex;
  place-items: center;
  background: #d8440f;
  padding: 10px 20px;
  border-radius: 5px 0 0 5px;
`;

export const SubmitButton = styled.button`
  background: #d8440f;
  border-radius: 5px 0 0 5px;
  padding: 5px 20px;
  cursor: pointer;
  outline: 0;
  border: none;
`;

export const SearchIcon = styled(FaSearch)`
  font-size: 2rem;
`;

export const SearchInput = styled.input`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  padding: 8px 15px;
  background: #e9e9e9b7;
  height: 100%;
  outline: 0;
  border: none;
  border-radius: 0 5px 5px 0;
  width: max(250px, 90%);
`;
