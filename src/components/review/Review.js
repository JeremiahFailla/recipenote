import React from "react";
import * as Styled from "./ReviewStyle";

const Review = (props) => {
  const firstDot = props.content.indexOf(".");
  const id = props.content.slice(0, firstDot);
  const secondDot = props.content.slice(firstDot + 1).indexOf(".");
  const name = props.content.slice(firstDot + 1, firstDot + secondDot + 1);
  const review = props.content.slice(firstDot + secondDot + 2);
  return (
    <Styled.ReviewCard>
      <Styled.ReviewName>{name}</Styled.ReviewName>
      <Styled.ReviewContent>{review}</Styled.ReviewContent>
    </Styled.ReviewCard>
  );
};

export default Review;
