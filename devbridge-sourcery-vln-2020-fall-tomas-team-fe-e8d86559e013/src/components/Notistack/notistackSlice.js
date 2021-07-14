/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  notifications: [],
};

const notistack = createSlice({
  name: 'notiStack',
  initialState,
  reducers: {
    enqueueSnackbar: (state, action) => {
      action.payload.key = uuid();
      state.notifications.push(action.payload);
    },
    clearNotification: (state, action) => {
      const id = action.payload;
      state.notifications = state.notifications.filter(e => e.id !== id);
    },
    clearQueue: state => {
      state.notifications.length = 0;
    },
  },
});

export const { enqueueSnackbar, clearQueue, clearNotification } = notistack.actions;

export default notistack.reducer;
