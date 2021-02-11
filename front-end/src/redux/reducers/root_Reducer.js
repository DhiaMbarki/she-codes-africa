import { combineReducers } from "redux";
import authReducer from "./authReducer";
import editProfileReducer from "./editProfileReducer";

import blogReducer from "./blogsReducer";

import eventReducer from "./eventsReducer";

export default combineReducers({
  events: eventReducer,
  auth: authReducer,
  editProfile: editProfileReducer,
  blogs: blogReducer,
});
