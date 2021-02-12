import { combineReducers } from "redux";
import authReducer from "./authReducer";
import editprofileReducer from "./editprofileRducer";
import blogReducer from "./blogsReducer";
import eventReducer from "./eventsReducer";




export default combineReducers({
  events: eventReducer,
  auth: authReducer,
  editProfile: editprofileReducer,
  blogs: blogReducer,
});
