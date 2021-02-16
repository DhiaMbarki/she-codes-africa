import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./reducers/authReducer";

import editProfileReducer from "../redux/reducers/editProfileReducer";
import blogReducer from "../redux/reducers/blogsReducer";
import eventReducer from "../redux/reducers/eventsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  editProfile: editProfileReducer,
  blogs: blogReducer,
  events: eventReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
