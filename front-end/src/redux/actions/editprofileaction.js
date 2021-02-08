import ADD_PROFILE from './eventTypes'
export const addprofileaction = ({ PhotosprofileUrl ,Firstname, Biography,Githubacountlink ,Linkedincountlink,Websiteurl}) => ({
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
  
