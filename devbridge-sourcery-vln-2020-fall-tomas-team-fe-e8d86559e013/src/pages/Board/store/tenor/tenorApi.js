import axios from 'axios';

const tenor = axios.create({
  baseURL: 'https://api.tenor.com/v1',
  params: {
    limit: 18,
  },
  // paramsSerializer: params => qs.stringify(params) // import qs from 'qs'
});

const tenorApi = {
  request: query =>
    tenor.get('/search', {
      params: {
        q: query.replace(/\s+/g, '+'),
      },
    }),
  requestTrending: () => tenor.get('/trending'),
};

export default tenorApi;
