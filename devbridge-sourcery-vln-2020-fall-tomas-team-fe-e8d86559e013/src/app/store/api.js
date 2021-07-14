import axios from 'axios';
import { getAuthenticationToken, removeUserSession } from '../../utils/localStoreFunctions';

export const mockApi = {
  get: (_, response) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (Math.random() > 0.7) {
          reject(new Error('Ooops'));
        } else {
          resolve(response);
        }
      }, 1200)
    ),
};

const api = axios.create({
  timeout: 5000,
  baseURL: process.env.REACT_APP_API_ROOT,
});

api.interceptors.request.use(
  req => {
    req.headers.Authorization = `token ${getAuthenticationToken() || ''}`;
    return req;
  },

  err => Promise.reject(err)
);

api.interceptors.response.use(
  resp => resp,
  err => {
    const { response } = err;
    if (response && response.data.errorMessage === 'token expired') removeUserSession();
    return Promise.reject(err);
  }
);

export default api;
