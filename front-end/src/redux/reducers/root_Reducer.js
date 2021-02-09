import { combineReducers } from "redux";
import authReducer from './authReducer'

import blogReducer from './blogsReducer'

import eventReducer from './eventsReducer'

export default combineReducers({
  events: eventReducer,
  auth: authReducer,
  blogs:blogReducer,
});
