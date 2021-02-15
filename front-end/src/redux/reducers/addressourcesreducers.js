import { ADD_RESSOURCE}from "../actions/addressourcesTypes";

const initialState = {
    article : []
};

const addressourcesreducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESSOURCE:
      return {
        ...state,
        article : [...state.article ,...action.payload ],
      };
    default:
      return state;
  }
};
export default addressourcesreducers;