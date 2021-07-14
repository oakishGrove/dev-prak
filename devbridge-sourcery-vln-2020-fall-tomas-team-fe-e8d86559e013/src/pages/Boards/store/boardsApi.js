import api from '../../../app/store/api';

const boardsApi = {
  getBoards: () => api.get('/boards'),
};

export default boardsApi;
