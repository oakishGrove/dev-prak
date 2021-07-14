import api, { mockApi } from '../../../app/store/api';

const authenticateUserMock = {
  data: {
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJuZW9AbmVvLm5lbyIsImV4cCI6MTYwNjc3NzgzNSwiaWF0IjoxNjA0NjUzODM1fQ.frLvZLzNPxwNVdWO5Q4nZR3VsltlYF3rhWwkzIttdy5iQwprq-LNvrQ4TtkKIXt0Tk1ySj4zSglOvruvOBBaEA',
    user: {
      name: 'John',
      grantedAuthorities: ['ROLE_USER'],
    },
  },
};

const loginApi = {
  authenticateUser: email => mockApi.get(`login/${email}`, authenticateUserMock),
  authenticateUser2: credentials => api.post('/login', credentials),
  authorization: () => ({ data: ['ROLE_USER'] }),
  authorization2: () => api.get('/auth'),
  getTestAdmin: () => api.get('/test-admin'),
  getTestUser: () => api.get('/test-user'),
};

export default loginApi;
