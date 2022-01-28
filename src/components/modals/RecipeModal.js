import React, { useEffect, useState } from "react";
import * as Styled from "./RecipeModalStyles";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

const RecipeModal = (props) => {
  const modalId = document.getElementById("modals");
  const favorites = useSelector((state) => state.favorites);
  const [inFavorites, setInFavorites] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";
    return () => {
      document.querySelector("body").style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setInFavorites(favorites.some((rec) => rec.id === props.recipe.id));
  }, [favorites]);

  const addToFavorites = () => {
    dispatch({ type: "addFavorite", recipe: props.recipe });
  };

  const removeFromFavorites = () => {
    dispatch({ type: "removeFavorite", id: props.recipe.id });
  };

  return ReactDOM.createPortal(
    <Styled.Backdrop onClick={props.close} data-modal="modal">
      <Styled.Content>
        <Styled.Title>{props.recipe.title}</Styled.Title>
        <Styled.Image src={props.recipe.image_url} />
        <Styled.Container>
          <Styled.TimeAndServingData>
            Cooking Time: {props.recipe.cooking_time}
          </Styled.TimeAndServingData>
          <Styled.TimeAndServingData>
            Serving Size: {props.recipe.servings}
          </Styled.TimeAndServingData>
          {!inFavorites && (
            <Styled.FavoriteButton onClick={addToFavorites}>
              Add to Favorites
            </Styled.FavoriteButton>
          )}
          {inFavorites && (
            <Styled.UnfavoriteButton onClick={removeFromFavorites}>
              Unfavorite
            </Styled.UnfavoriteButton>
          )}
        </Styled.Container>
        <Styled.IngredientTitle>Ingredients</Styled.IngredientTitle>
        <Styled.IngredientsList>
          {props.recipe.ingredients.map((ing) => (
            <Styled.Ingredient key={Math.random() * 1000}>{`${
              ing.quantity ? ing.quantity : ""
            } ${ing.unit} ${ing.description}`}</Styled.Ingredient>
          ))}
        </Styled.IngredientsList>
        <Styled.DirectionsContainer>
          <Styled.Directions href={props.recipe.source_url} target="_blank">
            Recipe Directions
          </Styled.Directions>
        </Styled.DirectionsContainer>
        <Styled.LikeAndReviewsContainer>
          <span>
            0 <Styled.Likes />
          </span>
          <Styled.ReviewsButton>0 Reviews</Styled.ReviewsButton>
        </Styled.LikeAndReviewsContainer>
      </Styled.Content>
    </Styled.Backdrop>,
    modalId
  );
};

export default RecipeModal;
