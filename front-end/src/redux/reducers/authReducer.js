const initState = { user: null };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
