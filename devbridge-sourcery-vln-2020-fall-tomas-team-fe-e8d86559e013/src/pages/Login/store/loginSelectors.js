export const getCurrentUser = state => state.login.currentUser;

export const getIsUserAuthenticating = state => state.login.isUserAuthenticating;

export const getIsUserAuthenticated = state => !!state.login.currentUser;

export const getIsUserAuthenticationError = state => state.login.isUserAuthenticationError;
