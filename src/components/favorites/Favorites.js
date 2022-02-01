import { useSelector } from "react-redux";
import * as Styled from "./FavoritesStyles";
import React from "react";
import { useNavigate } from "react-router-dom";

const Favorites = (props) => {
  const recipes = useSelector((state) => state.favorites);
  const navigate = useNavigate();

  const showRecipeHandler = (recipe, id) => {
    props.close();
    navigate(`/recipes/${recipe}/${id}`);
  };

  return (
    <Styled.FavoritesContainer mobile={props.mobile}>
      {recipes.length === 0 ? (
        <Styled.NoRecipes>You have no favorited recipes</Styled.NoRecipes>
      ) : (
        recipes.map((rec) => (
          <Styled.Recipe
            key={rec.id}
            onClick={() => showRecipeHandler(rec.title, rec.id)}
          >
            <Styled.RecipeImage src={rec.image_url} />
            <Styled.RecipeTitle>{rec.title}</Styled.RecipeTitle>
          </Styled.Recipe>
        ))
      )}
      <Styled.Point></Styled.Point>
    </Styled.FavoritesContainer>
  );
};

export default React.memo(Favorites);
