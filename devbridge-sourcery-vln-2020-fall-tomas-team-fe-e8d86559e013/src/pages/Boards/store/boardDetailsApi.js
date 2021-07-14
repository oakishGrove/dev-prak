import api from '../../../app/store/api';

const boardDetailsApi = {
  getBoardDetails: boardId => api.get(`boards/${boardId}/boardDetails`),
};

export default boardDetailsApi;
