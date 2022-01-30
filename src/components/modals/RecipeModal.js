import React, { useEffect, useState } from "react";
import * as Styled from "./RecipeModalStyles";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Review from "../review/Review";
import ReviewInput from "../review/ReviewInput";

const RecipeModal = (props) => {
  const modalId = document.getElementById("modals");
  const favorites = useSelector((state) => state.favorites);
  const [inFavorites, setInFavorites] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [liked, setLiked] = useState(false);
  const [recipeData, setRecipeData] = useState({
    id: props.recipe.id,
    likes: 0,
    title: props.recipe.title,
    reviews: [],
  });
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const docRef = doc(db, "recipes", props.recipe.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setRecipeData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        // Add a new document in collection "cities"
        await setDoc(doc(db, "recipes", props.recipe.id), {
          id: props.recipe.id,
          likes: 0,
          title: props.recipe.title,
          reviews: [],
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const incrementLikes = async () => {
    try {
      await updateDoc(doc(db, "recipes", props.recipe.id), {
        likes: increment(1),
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const decrementLikes = async () => {
    try {
      await updateDoc(doc(db, "recipes", props.recipe.id), {
        likes: increment(-1),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToFavorites = () => {
    dispatch({ type: "addFavorite", recipe: props.recipe });
  };

  const removeFromFavorites = () => {
    dispatch({ type: "removeFavorite", id: props.recipe.id });
  };

  const hitLike = () => {
    if (liked) {
      decrementLikes();
      setRecipeData((prevState) => {
        return {
          ...prevState,
          likes: prevState.likes - 1,
        };
      });
      setLiked(false);
    } else {
      incrementLikes();
      setRecipeData((prevState) => {
        return {
          ...prevState,
          likes: prevState.likes + 1,
        };
      });
      setLiked(true);
    }
  };

  const addReview = (review) => {
    setRecipeData((prevState) => {
      prevState.reviews.unshift(review);
      return {
        ...prevState,
        reviews: prevState.reviews,
      };
    });
  };

  useEffect(() => {
    console.log(recipeData);
  }, [recipeData]);

  useEffect(() => {
    getData();
    document.querySelector("body").style.overflow = "hidden";
    return () => {
      document.querySelector("body").style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setInFavorites(favorites.some((rec) => rec.id === props.recipe.id));
  }, [favorites]);

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
            {recipeData.likes} {!liked && <Styled.Unlike onClick={hitLike} />}
            {liked && <Styled.Like onClick={hitLike} />}
          </span>
          <Styled.ReviewsButton onClick={() => setShowReviews(!showReviews)}>
            {recipeData.reviews.length} Reviews
          </Styled.ReviewsButton>
        </Styled.LikeAndReviewsContainer>
        {showReviews && (
          <div style={{ marginTop: "1rem" }}>
            <ReviewInput addReview={addReview} />
            {recipeData.reviews.map((review) => (
              <Review content={review} key={review} />
            ))}
          </div>
        )}
      </Styled.Content>
    </Styled.Backdrop>,
    modalId
  );
};

export default RecipeModal;
