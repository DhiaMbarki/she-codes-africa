import { combineReducers } from "redux";
import eventsReducer from "./reducers/eventsReducer";
import authReducer from "./reducers/authReducer";
import editprofileReducer from "./reducers/editprofileReducer";
import blogReducer from "./reducers/blogsReducer";

export default combineReducers({
  auth: authReducer,
  editProfile: editprofileReducer,
  events: eventsReducer,
  blogs: blogReducer,
});
