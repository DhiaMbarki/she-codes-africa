import PostReducer from "./postReducer";
import { combineReducers } from "redux";
import postReducer from "./blogsReducer";

export default combineReducers({
  post: postReducer,
});
