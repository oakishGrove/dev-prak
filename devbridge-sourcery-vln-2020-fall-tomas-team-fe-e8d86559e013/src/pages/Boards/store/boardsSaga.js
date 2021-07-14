import { takeLatest, put, call } from 'redux-saga/effects';

import { FETCH_BOARDS, FETCH_BOARDS_FAILURE, FETCH_BOARDS_SUCCESS } from './boardsTypes';
import boardsApi from './boardsApi';

export function* fetchBoards() {
  try {
    const result = yield call(boardsApi.getBoards);
    yield put({ type: FETCH_BOARDS_SUCCESS, payload: result.data });
  } catch (error) {
    yield put({ type: FETCH_BOARDS_FAILURE });
  }
}

export default function* boardsSaga() {
  yield takeLatest(FETCH_BOARDS, fetchBoards);
}
