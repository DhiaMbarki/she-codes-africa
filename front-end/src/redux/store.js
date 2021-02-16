import { createStore, applyMiddleware } from "redux";
<<<<<<< HEAD
import thunk from "redux-thunk";
import rootReducer from "./reducers/root_Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
=======
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root_Reducer";
>>>>>>> ae4d4867ce21df429699c2f38d8da65e88933046

const ReduxThunk = require("redux-thunk").default;
const initialState = {};
const middelware = [ReduxThunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware))
);
export default store;
