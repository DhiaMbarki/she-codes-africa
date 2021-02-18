import { ADD_COMPANY_PROFILE } from "../actions/editProfileTypes";

const initialState = {
    Profilelimage:"",
    aboutCompany:"",
    companyName:"",
    location:"",
    website:"",
    linkedin:"",
    field:"",
};

const editCompanyprofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY_PROFILE:
      return {
        ...state,
        Profilelimage: action.payload.Profilelimage,
        aboutCompany: action.payload.aboutCompany,
        companyName: action.payload.companyName,
        location: action.payload.location,
        website: action.payload.website,
        linkedin: action.payload.linkedin,
        field: action.payload.field,
      };
    default:
      return state;
  }
};
export default editCompanyprofileReducer;
