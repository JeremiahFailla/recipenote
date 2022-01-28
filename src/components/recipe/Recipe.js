import React, { useState, useEffect } from "react";
import RecipeModal from "../modals/RecipeModal";
import * as Styled from "./RecipeStyle";

const Recipe = (props) => {
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    if (recipe) {
      setShowRecipeModal(!showRecipeModal);
    }
  }, [recipe]);

  const showModal = () => {
    fetchRecipe();
  };

  const closeModal = (e) => {
    if (e.target.dataset.modal) {
      setShowRecipeModal(false);
    }
  };

  const fetchRecipe = async () => {
    try {
      const KEY = "d64f14ae-0c48-436d-8097-4690e389d775";
      const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${props.id}?key=${KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipe(data.data.recipe);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      {showRecipeModal && <RecipeModal recipe={recipe} close={closeModal} />}
      <Styled.Card onClick={showModal}>
        <Styled.ImageContainer>
          <Styled.Image src={props.image} />
        </Styled.ImageContainer>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.Extra>
          <span>
            0 <Styled.Likes />
          </span>
          <span>
            0 <Styled.Comments />
          </span>
        </Styled.Extra>
      </Styled.Card>
    </React.Fragment>
  );
};

export default Recipe;
