import React from "react";
import * as Styled from "./AboutContentStyles";

const AboutContent = () => {
  return (
    <Styled.Backdrop>
      <Styled.TextContent>
        <Styled.Title>About Recipe Note</Styled.Title>
        <Styled.Desciption>
          Looking for something new to eat? If yes, then Recipe Note is the
          place for you as we have over thousands of different recipes ranging
          Chocolate pie to BBQ Chicken.{" "}
        </Styled.Desciption>
        <Styled.SignUpFeatures>
          <Styled.Link to="/joinnow">Join Now</Styled.Link> to get bonus
          features such as:
        </Styled.SignUpFeatures>
        <ul>
          <Styled.Bonuses>- Favorite Recipes</Styled.Bonuses>
          <Styled.Bonuses>- Write Reviews</Styled.Bonuses>
          <Styled.Bonuses>- Rate Recipes</Styled.Bonuses>
        </ul>
      </Styled.TextContent>
    </Styled.Backdrop>
  );
};

export default AboutContent;
