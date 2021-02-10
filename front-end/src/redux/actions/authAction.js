export const signInAction = ({ email, password }) => ({
  type: "SIGN_IN",
  payload: {
    email,
    password,
  },
});

export const signOutAction = () => ({
  type: "SIGN_OUT",
});
