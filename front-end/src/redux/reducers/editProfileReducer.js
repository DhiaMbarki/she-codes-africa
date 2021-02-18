
import { ADD_PROFILE } from "../actions/editProfileTypes";
const initialState = {
  PhotosprofileUrl: "",
  Firstname: "",
  Biography: "",
  Githubacountlink: "",
  Linkedincountlink: "",
  Websiteurl: "",
};

const editprofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        PhotosprofileUrl: action.payload.PhotosprofileUrl,
        Firstname: action.payload.Firstname,
        Biography: action.payload.Biography,
        Githubacountlink: action.payload.Githubacountlink,
        Linkedincountlink: action.payload.Linkedincountlink,
        Websiteurl: action.payload.Websiteurl,
      };
    default:
      return state;
  }
};
export default editprofileReducer;
