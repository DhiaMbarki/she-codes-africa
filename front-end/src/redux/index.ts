import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
 import editProfileReducer from "../redux/reducers/editprofileReducer";
 import blogReducer from "../redux/reducers/blogsReducer";  
 import eventReducer from "../redux/reducers/eventsReducer";



const rootReducer = combineReducers({
  auth: authReducer,
  editProfile: editProfileReducer,
  blogs: blogReducer,
  events: eventReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;




// import { combineReducers } from "redux";
// // import eventReducer from "./eventReducer";
// import authReducer from "./authReducer";
// import editProfileReducer from "./editProfileReducer";

// import blogReducer from "./blogsReducer";

// import eventReducer from "./eventsReducer";

// export default combineReducers({
//   events: eventReducer,
//   auth: authReducer,
//   editProfile: editProfileReducer,
//   blogs: blogReducer,
// });