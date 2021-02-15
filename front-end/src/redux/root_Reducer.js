import { combineReducers } from "redux";
import eventsReducer from "./reducers/eventsReducer";
import authReducer from "./reducers/authReducer";
import editprofileReducer from "./reducers/editprofileReducer";
import blogReducer from "./reducers/blogsReducer";

export default combineReducers({
  events: eventsReducer,
  auth: authReducer,
  editProfile: editprofileReducer,
  blogs: blogReducer,
});
