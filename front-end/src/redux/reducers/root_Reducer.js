import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import authReducer from './authReducer'
import editprofileReducer from'./editprofileRducer'
export default combineReducers({
  events: eventReducer,
  auth: authReducer,
  edditprof:editprofileReducer,
});
