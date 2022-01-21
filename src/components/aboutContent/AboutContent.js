import React, { useState } from "react";
import * as Styled from "./AboutContentStyles";
import * as Spinner from "./../utils/Utils";

const AboutContent = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  const onImageLoadHandler = () => {
    console.log("hide spinner");
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  };

  return (
    <React.Fragment>
      {showSpinner && (
        <Spinner.SpinnerContianer>
          <Spinner.Spinner></Spinner.Spinner>
        </Spinner.SpinnerContianer>
      )}
      <Styled.BackdropImage
        src={require("../../imgs/about.jpg")}
        onLoad={onImageLoadHandler}
        height="100%"
      />
      <Styled.Overlay></Styled.Overlay>
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
    </React.Fragment>
  );
};

export default AboutContent;
