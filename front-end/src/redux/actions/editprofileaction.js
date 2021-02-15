import {ADD_PROFILE}   from './editProfileTypes'
const addprofileaction = ( PhotosprofileUrl ,Firstname, Biography,Githubacountlink ,Linkedincountlink,Websiteurl) => ({
   type: ADD_PROFILE,
   payload: {
       PhotosprofileUrl,
       Firstname,
       Biography,
       Githubacountlink,
       Linkedincountlink,
       Websiteurl
   },
 });
 
 
 export default addprofileaction