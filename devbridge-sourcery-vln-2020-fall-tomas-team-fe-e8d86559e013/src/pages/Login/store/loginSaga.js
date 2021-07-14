import { takeLatest, call, put } from 'redux-saga/effects';
import {
  authenticateUser,
  authenticateUserError,
  setCurrentUser,
  fetchAuthData,
  saveAuthData,
  fetchUserError,
  logOut,
} from './loginSlice';
import api from './loginApi';
import {
  getAuthenticationToken,
  getUser,
  saveAuthDataLocal,
  removeUserSession,
} from '../../../utils/localStoreFunctions';

function* authenticateUserSaga(action) {
  const { payload: credentials } = action;
  try {
    // TODO: when back end present change to authenticateUser2
    // const userDetails = yield call(api.authenticateUser, credentials);
    const userDetails = yield call(api.authenticateUser2, credentials);

    yield put(saveAuthData(userDetails.data)); // save data in local store
  } catch (e) {
    yield put(authenticateUserError());
  }
}

function* saveAuthDataSaga(action) {
  try {
    const { payload: userDetails } = action;
    yield call(saveAuthDataLocal, {
      token: userDetails.token,
      user: userDetails.user.name,
    });
    yield put(setCurrentUser(userDetails.user)); // set data in redux store
  } catch (e) {
    yield put(authenticateUserError());
  }
}

function* fetchAuthDataSaga() {
  try {
    // TODO: when back end present change to authorization2
    // const authoritiesResp = yield call(api.authorization);
    const authoritiesResp = yield call(api.authorization2);
    const authorities = authoritiesResp.data;
    const token = yield call(getAuthenticationToken);
    const user = yield call(getUser);

    if (user && token && authorities) {
      yield put(setCurrentUser({ user, authorities })); // set data in redux store
    } else {
      yield put(fetchUserError());
    }

    // const test = yield call(api.getTestUser);
    // console.log('test', test);
  } catch (e) {
    yield put(fetchUserError());
  }
}

function* logOutSaga() {
  try {
    yield call(removeUserSession);
    yield put(setCurrentUser(null));
  } catch (e) {
    yield put(fetchUserError());
  }
}

function* loginSaga() {
  yield takeLatest(authenticateUser.type, authenticateUserSaga);
  yield takeLatest(fetchAuthData.type, fetchAuthDataSaga);
  yield takeLatest(saveAuthData.type, saveAuthDataSaga);
  yield takeLatest(logOut.type, logOutSaga);
}

export default loginSaga;
