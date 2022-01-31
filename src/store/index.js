import { createStore } from "redux";

const defaultState = {
  loggedIn: false,
  user: undefined,
  favorites: [],
};

const recipeReducer = (state = defaultState, action) => {
  if (action.type === "siteLoaded") {
    return {
      ...state,
      siteLoaded: true,
    };
  }
  if (action.type === "setLogout") {
    return {
      ...state,
      user: undefined,
    };
  }
  if (action.type === "setUser") {
    return {
      ...state,
      user: { ...action.user, reviews: action.reviews },
    };
  }
  if (action.tpye === "setReviews") {
    return {
      ...state,
      user: { ...state.user, reviews: action.reviews },
    };
  }
  if (action.type === "setUserPassword") {
    return {
      ...state,
      password: action.password,
    };
  }
  if (action.type === "addFavorite") {
    const favorites = [action.recipe, ...state.favorites];
    return {
      ...state,
      favorites: favorites,
    };
  }
  if (action.type === "removeFavorite") {
    const favorites = state.favorites.filter((rec) => {
      return rec.id !== action.id;
    });
    return {
      ...state,
      favorites: favorites,
    };
  }
  return state;
};

const store = createStore(recipeReducer);

export default store;
