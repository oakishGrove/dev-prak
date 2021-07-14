import api, { mockApi } from '../../../app/store/api';

const boardApi = {
  updateVote: (boardId, columnId, itemId) =>
    api.put(`/boards/${boardId}/columns/${columnId}/items/${itemId}/upvote`),
  addItem: () => mockApi.get('', { data: true }),
  addItem2: (boardId, columnId, item) =>
    api.post(`/boards/${boardId}/columns/${columnId}/items`, item),
  addComment: (boardId, columnId, itemId, comment) =>
    api.post(`/boards/${boardId}/columns/${columnId}/items/${itemId}/comments`, comment),
  fetchBoardDetails: id => api.get(`/boards/${id}`),
  updateItemsMock: () => mockApi.get('', { data: true }),
  boardColumnsIdList: boardId => api.get(`/boards/${boardId}/columns`),
  columnItems: (boardId, columnId) => api.get(`/boards/${boardId}/columns/${columnId}/items`),
  itemComments: (boardId, columnId, itemId) =>
    api.get(`/boards/${boardId}/columns/${columnId}/items/${itemId}/comments`),
  createBoard: request => api.post('/boards', request),
  deleteItem: (boardId, columnId, itemId) =>
    api.delete(`/boards/${boardId}/columns/${columnId}/items/${itemId}`),
};

export default boardApi;
