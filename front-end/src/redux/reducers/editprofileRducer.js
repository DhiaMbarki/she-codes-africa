const initialState = {
    PhotosprofileUrl:"",
        Firstname:"",
        Biography:"",
        Githubacountlink:"",
        Linkedincountlink:"",
        Websiteurl:"",
  };
  
  export default  editprofileReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PROFILE:
        return [
          ...state,
          action.message
        ];
      default:
        return state;
    }
  };