const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user;
const getToken = state => state.auth.token;
const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getIsRefreshing,
};

export default authSelectors;
