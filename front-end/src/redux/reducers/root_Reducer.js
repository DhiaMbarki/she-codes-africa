import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import authReducer from './authReducer';
import editProfileReducer from'./editProfileReducer';

export default combineReducers({
  events: eventReducer,
  auth: authReducer,
  editProfile:editProfileReducer,
});
