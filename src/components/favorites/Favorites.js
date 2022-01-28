import { useSelector } from "react-redux";
import * as Styled from "./FavoritesStyles";

const Favorites = (props) => {
  const recipes = useSelector((state) => state.favorites);
  return (
    <Styled.FavoritesContainer mobile={props.mobile}>
      {recipes.length === 0 ? (
        <Styled.NoRecipes>You have no favorited recipes</Styled.NoRecipes>
      ) : (
        recipes.map((rec) => (
          <Styled.Recipe>
            <Styled.RecipeImage src={rec.image_url} />
            <Styled.RecipeTitle>{rec.title}</Styled.RecipeTitle>
          </Styled.Recipe>
        ))
      )}
      <Styled.Point></Styled.Point>
    </Styled.FavoritesContainer>
  );
};

export default Favorites;
