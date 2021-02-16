import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root_Reducer";

const ReduxThunk = require("redux-thunk").default;
const initialState = {};
const middelware = [ReduxThunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware))
);
export default store;
