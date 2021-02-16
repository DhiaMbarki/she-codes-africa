import { combineReducers } from "redux";
import eventsReducer from "./reducers/eventsReducer";
import authReducer from "./reducers/authReducer";
import editprofileReducer from "./reducers/editProfileReducer";
import blogReducer from "./reducers/blogsReducer";
import addressourcesreducers from "./reducers/addressourcesreducers";

export default combineReducers({
  auth: authReducer,
  editProfile: editprofileReducer,
  events: eventsReducer,
  blogs: blogReducer,
  resrcs: addressourcesreducers,
});
