import { createStore } from "redux";

const defaultState = {
  loggedIn: false,
};

const recipeReducer = (state = defaultState, action) => {
  if (action.type === "setLoggedIn") {
    return {
      ...state,
      loggedIn: action.loggedIn,
    };
  }
  return state;
};

const store = createStore(recipeReducer);

export default store;
