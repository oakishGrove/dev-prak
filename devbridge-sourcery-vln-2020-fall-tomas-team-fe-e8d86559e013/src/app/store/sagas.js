import { spawn } from 'redux-saga/effects';
import loginSaga from '../../pages/Login/store/loginSaga';
import boardDetailsSaga from '../../pages/Boards/store/boardDetailsSaga';
import boardsSaga from '../../pages/Boards/store/boardsSaga';
import tenorSaga from '../../pages/Board/store/tenor/tenorSaga';
import boardSaga from '../../pages/Board/store/boardSaga';

const rootSaga = function* rootSaga() {
  yield spawn(loginSaga);
  yield spawn(boardDetailsSaga);
  yield spawn(boardsSaga);
  yield spawn(tenorSaga);
  yield spawn(boardSaga);
};

export default rootSaga;
