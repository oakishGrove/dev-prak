export const getAuthenticationToken = () => {
  const serializeState = localStorage.getItem('authenticationToken');
  if (serializeState) {
    return serializeState;
  }
  return null;
};

export const getUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};

export const saveAuthDataLocal = data => {
  if (data && data.token && data.user) {
    localStorage.setItem('authenticationToken', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  } else {
    throw new Error('Incorrect data format in saveAuthData');
  }
};

export const removeUserSession = () => {
  localStorage.removeItem('authenticationToken');
  localStorage.removeItem('user');
};
