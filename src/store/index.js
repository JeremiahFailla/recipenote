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
      user: action.user,
    };
  }
  if (action.type === "setUserPassword") {
    return {
      ...state,
      password: action.password,
    };
  }
  if (action.type === "addFavorite") {
    return {
      ...state,
      favorites: state.favorites.push(action.recipe),
    };
  }
  return state;
};

const store = createStore(recipeReducer);

export default store;
