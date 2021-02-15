import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root_Reducer";
import { composeWithDevTools } from "redux-devtools-extension";


const ReduxThunk = require('redux-thunk').default
const initialState = {};
const middelware = [ReduxThunk]  ;

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware))
  applyMiddleware(...middelware)


);
console.log ("store",store.getState() )
export default store;
