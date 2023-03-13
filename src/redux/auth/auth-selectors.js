export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectAuth = state => {
  const { isLoggedIn, token } = state.auth;
  return { isLoggedIn, token };
};

export const selectUser = state => state.auth.user;
