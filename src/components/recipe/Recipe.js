import React from "react";
import * as Styled from "./RecipeStyle";

const Recipe = (props) => {
  <Styled.Image src={props.image} />;
  return (
    <Styled.Card>
      <Styled.ImageContainer></Styled.ImageContainer>
      <Styled.Title>{props.title}</Styled.Title>
    </Styled.Card>
  );
};

export default Recipe;
