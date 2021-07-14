import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import login from '../../pages/Login/store/loginSlice';
import boardDetails from '../../pages/Boards/store/boardDetailsSlice';
import sagas from './sagas';
import board from '../../pages/Board/store/boardReducer';
import tenor from '../../pages/Board/store/tenor/tenorSlice';
import boardsReducers from '../../pages/Boards/store/boardsReducer';
import notistack from '../../components/Notistack/notistackSlice';

const reducer = combineReducers({
  login,
  board,
  boardDetails,
  boards: boardsReducers,
  tenor,
  notistack,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
