import {
  SAVE_ITEM,
  ADD_COLUMN_INPUT,
  REMOVE_COLUMN_INPUT,
  INCREASE_VOTE,
  LOAD_BOARD_SUCCESS,
  SAVE_ITEM_COMMENT,
  DRAG_DROP_ITEM_UPDATE,
  CREATE_BOARD_SUCCESS,
} from './boardActionTypes';

const initialState = {
  boardId: '',
  title: '',
  columns: [],
  boardCreated: false,
};

function getColumn(board, columnId) {
  const index = board.columns.findIndex(column => column.id === columnId);
  return board.columns[index];
}

function getChangedBoard(board, changedColumn, columnId) {
  const index = board.columns.findIndex(column => column.id === columnId);
  return {
    ...board,
    columns: [...board.columns.slice(0, index), changedColumn, ...board.columns.slice(index + 1)],
  };
}

function handleSaveItemToColumn(board, payload) {
  const column = getColumn(board, payload.item.columnId);

  const changedColumn = {
    ...column,
    items: [...column.items, payload.item],
    inputs: [...column.inputs.slice(0, payload.index), ...column.inputs.slice(payload.index + 1)],
  };

  const changedBoard = getChangedBoard(board, changedColumn, payload.item.columnId);

  return changedBoard;
}

function handleAddColumnInput(board, payload) {
  const column = getColumn(board, payload.columnId);

  const input = {
    id: payload.inputId,
  };

  const changedColumn = {
    ...column,
    inputs: [...column.inputs, input],
  };

  const changedBoard = getChangedBoard(board, changedColumn, payload.columnId);

  return changedBoard;
}

function handleRemoveColumnInput(board, payload) {
  const column = getColumn(board, payload.columnId);

  const changedColumn = {
    ...column,
    inputs: [...column.inputs.slice(0, payload.index), ...column.inputs.slice(payload.index + 1)],
  };

  const changedBoard = getChangedBoard(board, changedColumn, payload.columnId);

  return changedBoard;
}

const handleIncreaseVote = (board, { columnId, itemId }) => {
  const column = getColumn(board, columnId);

  const itemIndex = column.items.findIndex(item => item.itemId === itemId);
  const item = column.items[itemIndex];

  const changedItem = {
    ...item,
    voteCount: item.voteCount + 1,
  };

  const changedColumn = {
    ...column,
    items: [...column.items.slice(0, itemIndex), changedItem, ...column.items.slice(itemIndex + 1)],
  };

  const changedBoard = getChangedBoard(board, changedColumn, columnId);

  return changedBoard;
};

const handleAddItemComment = (board, payload) => {
  const column = getColumn(board, payload.columnId);

  const itemIndex = column.items.findIndex(item => item.itemId === payload.itemId);
  const item = column.items[itemIndex];

  const newComments = [...item.comments, payload.commentObj];
  const changedItem = {
    ...item,
    comments: newComments,
  };

  const changedColumn = {
    ...column,
    items: [...column.items.slice(0, itemIndex), changedItem, ...column.items.slice(itemIndex + 1)],
  };

  const changedBoard = getChangedBoard(board, changedColumn, payload.columnId);
  return changedBoard;
};

const handleLoadBoardSuccess = (state, payload) => {
  return {
    ...state,
    boardId: payload.boardId,
    title: payload.title,
    columns: payload.columns,
    boardCreated: false,
  };
};

const handleCreateBoardSuccess = (state, payload) => {
  return {
    ...state,
    boardId: payload.boardId,
    title: payload.title,
    boardCreated: true,
  };
};

const handleDragDropItem = (board, { toColumnId, from }) => {
  const fromColumn = getColumn(board, from.columnId);
  const itemIndex = fromColumn.items.findIndex(item => item.itemId === from.itemId);
  const fromItem = fromColumn.items[itemIndex];
  const removedItemColumn = {
    ...fromColumn,
    items: [...fromColumn.items.filter(item => item.itemId !== from.itemId)],
  };

  const targetColumn = getColumn(board, toColumnId);
  const addedItemColumn = {
    ...targetColumn,
    items: [...targetColumn.items, fromItem],
  };

  const changedBoard = getChangedBoard(board, addedItemColumn, toColumnId);
  return getChangedBoard(changedBoard, removedItemColumn, from.columnId);
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ITEM:
      return handleSaveItemToColumn(state, action.payload);
    case ADD_COLUMN_INPUT:
      return handleAddColumnInput(state, action.payload);
    case REMOVE_COLUMN_INPUT:
      return handleRemoveColumnInput(state, action.payload);
    case INCREASE_VOTE:
      return handleIncreaseVote(state, action.payload);
    case SAVE_ITEM_COMMENT:
      return handleAddItemComment(state, action.payload);
    case LOAD_BOARD_SUCCESS:
      return handleLoadBoardSuccess(state, action.payload);
    case DRAG_DROP_ITEM_UPDATE:
      return handleDragDropItem(state, action.payload);
    case CREATE_BOARD_SUCCESS:
      return handleCreateBoardSuccess(state, action.payload);
    default: {
      return state;
    }
  }
};

export default board;
