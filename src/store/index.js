import { createStore } from "redux";

const defaultState = {
  loggedIn: false,
  user: undefined,
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
  return state;
};

const store = createStore(recipeReducer);

export default store;
