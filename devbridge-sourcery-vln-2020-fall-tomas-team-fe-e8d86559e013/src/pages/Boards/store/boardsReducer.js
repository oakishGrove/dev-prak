import { FETCH_BOARDS, FETCH_BOARDS_FAILURE, FETCH_BOARDS_SUCCESS } from './boardsTypes';

const initialBoards = {
  boardsItems: [],
  isLoading: false,
};

export default function boardsReducer(state = initialBoards, action = {}) {
  switch (action.type) {
    case FETCH_BOARDS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BOARDS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        boardsItems: action.payload,
      };

    default:
      return state;
  }
}
