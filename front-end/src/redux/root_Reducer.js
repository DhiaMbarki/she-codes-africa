import { combineReducers } from "redux";
import eventsReducer from "./reducers/eventsReducer";
import authReducer from "./reducers/authReducer";
import editprofileReducer from "./reducers/editProfileReducer";
import blogReducer from "./reducers/blogsReducer";
import addressourcesreducers from './reducers/addressourcesreducers'
export default combineReducers({
  events: eventsReducer,
  auth: authReducer,
  editProfile: editprofileReducer,
  blogs: blogReducer,
  resrcs:addressourcesreducers
});
