import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducer";
import { combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
let reducer = combineReducers({
  rootReducer: rootReducer,
});
const initalState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initalState,
  applyMiddleware(...middleware)
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
