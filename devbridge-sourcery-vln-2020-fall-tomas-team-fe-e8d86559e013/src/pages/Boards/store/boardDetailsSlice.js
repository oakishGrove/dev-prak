/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const boardDertailsDoNotExist = [
  {
    columnItemText: '',
    columnItemVoteCount: 0,
  },
];
const initialState = {
  boardDetails: boardDertailsDoNotExist,
  isBoardDetailsLoading: false,
  isBoardDetailsShowing: false,
};

const boardDetailsSlice = createSlice({
  name: 'boardDetails',
  initialState,
  reducers: {
    initiateBoardDetailsFetch: state => {
      state.boardDetails = boardDertailsDoNotExist;
      state.isBoardDetailsLoading = true;
      state.isBoardDetailsShowing = true;
    },
    setBoardDetails: (state, action) => {
      state.boardDetails = action.payload;
      state.isBoardDetailsLoading = false;
    },
    boardDetailsError: state => {
      state.isBoardDetailsLoading = false;
    },
    closeBoardDetails: state => {
      state.isBoardDetailsShowing = false;
    },
  },
});

export const {
  initiateBoardDetailsFetch,
  closeBoardDetails,
  setBoardDetails,
  boardDetailsError,
} = boardDetailsSlice.actions;

export default boardDetailsSlice.reducer;
