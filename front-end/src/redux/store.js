import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root_Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middelware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware))
);
export default store;
