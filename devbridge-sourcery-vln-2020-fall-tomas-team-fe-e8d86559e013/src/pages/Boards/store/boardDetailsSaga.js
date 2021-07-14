import { takeLatest, call, put } from 'redux-saga/effects';
import { initiateBoardDetailsFetch, setBoardDetails, boardDetailsError } from './boardDetailsSlice';
import boardDetailsApi from './boardDetailsApi';

function* retrieveBoardDetailsSaga(action) {
  const { payload: boardId } = action;
  try {
    const boardDetails = yield call(boardDetailsApi.getBoardDetails, boardId);
    yield put(setBoardDetails(boardDetails.data));
  } catch (e) {
    yield put(boardDetailsError());
  }
}

function* boardDetailsSaga() {
  yield takeLatest(initiateBoardDetailsFetch.type, retrieveBoardDetailsSaga);
}

export default boardDetailsSaga;
