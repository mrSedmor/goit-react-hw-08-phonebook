export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectAuth = state => {
  const { isLoggedIn, token } = state.auth;
  return { isLoggedIn, token };
};

export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
