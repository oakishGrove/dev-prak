import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  ADD_COLUMN_INPUT,
  REMOVE_COLUMN_INPUT,
  UPVOTE_ITEM,
  FETCH_BOARD,
  ADD_ITEM_COMMENT,
  SAVE_ITEM_COMMENT,
  INCREASE_VOTE,
  SAVE_ITEM,
  LOAD_BOARD_SUCCESS,
  LOAD_WS_ROOM,
  SEND_TO_WS_ROOM,
  DRAG_DROP_ITEM,
  DRAG_DROP_ITEM_UPDATE,
  CREATE_BOARD,
  CREATE_BOARD_SUCCESS,
} from './boardActionTypes';

export const addItem = payload => ({
  type: ADD_ITEM,
  payload,
});

export const addColumnInput = payload => ({
  type: ADD_COLUMN_INPUT,
  payload,
});

export const removeColumnInput = payload => ({
  type: REMOVE_COLUMN_INPUT,
  payload,
});

export const saveItem = payload => ({
  type: SAVE_ITEM,
  payload,
});

export const upVote = payload => ({
  type: UPVOTE_ITEM,
  payload,
});

export const increaseVote = payload => ({
  type: INCREASE_VOTE,
  payload,
});

export const addComment = payload => ({
  type: ADD_ITEM_COMMENT,
  payload,
});

export const saveComment = payload => ({
  type: SAVE_ITEM_COMMENT,
  payload,
});

export const fetchBoard = payload => ({
  type: FETCH_BOARD,
  payload,
});

export const loadBoardSuccess = payload => ({
  type: LOAD_BOARD_SUCCESS,
  payload,
});

export const loadWsRoom = payload => ({
  type: LOAD_WS_ROOM,
  payload,
});

export const sendToWs = payload => ({
  type: SEND_TO_WS_ROOM,
  payload,
});
export const dragDropItem = payload => ({
  type: DRAG_DROP_ITEM,
  payload,
});

export const dragDropItemUpdate = payload => ({
  type: DRAG_DROP_ITEM_UPDATE,
  payload,
});

export const createBoard = payload => ({
  type: CREATE_BOARD,
  payload,
});

export const createBoardSuccess = payload => ({
  type: CREATE_BOARD_SUCCESS,
  payload,
});

// TODO
export const editItem = () => ({
  type: EDIT_ITEM,
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload,
});
