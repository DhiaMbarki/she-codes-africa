import { ADD_PROFILE } from "./editProfileTypes";
const addProfileAction = (
  PhotosprofileUrl,
  Firstname,
  Biography,
  Githubacountlink,
  Linkedincountlink,
  Websiteurl,
) => ({
  type: ADD_PROFILE,
  payload: {
    PhotosprofileUrl,
    Firstname,
    Biography,
    Githubacountlink,
    Linkedincountlink,
    Websiteurl,
  },
});
export default addProfileAction;
