/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const errorGifs = [
  {
    id: 1,
    url: 'loadingError.png',
  },
  {
    id: 2,
    url: 'loadingError.png',
  },
  {
    id: 3,
    url: 'loadingError.png',
  },
  {
    id: 4,
    url: 'loadingError.png',
  },
  {
    id: 5,
    url: 'loadingError.png',
  },
  {
    id: 6,
    url: 'loadingError.png',
  },
];

const initialState = {
  gifLinks: null,
};

const tenorSlice = createSlice({
  name: 'tenor',
  initialState,
  reducers: {
    selectGif: () => {},
    setGifLinks: (state, action) => {
      state.gifLinks = action.payload;
    },
    searchForGif: () => {},
    fetchTrending: () => {},
    fetchGifError: state => {
      state.gifLinks = errorGifs;
    },
  },
});

export const {
  setGifLinks,
  searchForGif,
  fetchGifError,
  selectGif,
  fetchTrending,
} = tenorSlice.actions;

export default tenorSlice.reducer;
