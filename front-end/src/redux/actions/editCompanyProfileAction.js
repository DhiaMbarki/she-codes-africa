import {ADD_COMPANY_PROFILE}   from "./editProfileTypes"


const addcompanyprofileaction = ({ Profilelimage ,aboutCompany, companyName,location ,website,linkedin,field}) => ({
    type: ADD_COMPANY_PROFILE,
    payload: {
        Profilelimage,
        aboutCompany,
        companyName,
        location,
        website,
        linkedin,
        field
    },
  });
  
  export default addcompanyprofileaction