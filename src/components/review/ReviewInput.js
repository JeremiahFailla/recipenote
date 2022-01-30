import { useState } from "react";
import * as Styled from "./ReviewInputStyle";
import { useSelector } from "react-redux";

const ReviewInput = (props) => {
  const [review, setReview] = useState("");
  const user = useSelector((state) => state.user);

  const submitReview = (e) => {
    e.preventDefault();
    if (review.length > 0) {
      const content = `${user.uid}.${user.displayName}.${review}`;
      props.addReview(content);
      setReview("");
    }
  };

  return (
    <Styled.Container onSubmit={submitReview}>
      <Styled.Input
        placeholder="Add a Review"
        aria-label="add review"
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button
        type="submit"
        style={{ border: "none", outline: "0", background: "transparent" }}
      >
        <Styled.EnterButton />
      </button>
    </Styled.Container>
  );
};

export default ReviewInput;
