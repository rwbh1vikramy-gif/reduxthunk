import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";         // npm i redux-thunk
import { reducer } from "../components/reducer";
// import { reducer } from "./Reducerf"

export const store = createStore(
  reducer,
  applyMiddleware(thunk)                // ⬅️ added thunk middleware
);

// console.log("store running", store.getState());
