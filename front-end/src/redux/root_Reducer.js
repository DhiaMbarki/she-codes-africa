import { combineReducers } from "redux";
import eventsReducer from "./reducers/eventsReducer";
import authReducer from "./reducers/authReducer";
import editProfileReducer from "./reducers/editProfileReducer";
import blogReducer from "./reducers/blogsReducer";
import addressourcesreducers from "./reducers/addressourcesreducers";

export default combineReducers({
  auth: authReducer,
  editProfile: editProfileReducer,
  events: eventsReducer,
  blogs: blogReducer,
  resrcs: addressourcesreducers,
});


