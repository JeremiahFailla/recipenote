import styled from "styled-components";
import RecipesContent from "../components/recipesContent/RecipesContent";

const Main = styled.main`
  background: #fdd87e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 1rem 2rem;
  flex-grow: 1;
`;

const Recipes = () => {
  return (
    <Main>
      <RecipesContent />
    </Main>
  );
};

export default Recipes;
