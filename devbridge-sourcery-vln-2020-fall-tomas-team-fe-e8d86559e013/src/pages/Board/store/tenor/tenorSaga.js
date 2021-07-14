import { takeLatest, call, put } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';
import { selectGif, fetchGifError, searchForGif, setGifLinks, fetchTrending } from './tenorSlice';
import { addComment } from '../boardActions';
import { enqueueSnackbar } from '../../../../components/Notistack/notistackSlice';
import api from './tenorApi';

function* searchForGifSaga(action) {
  try {
    const info = yield call(api.request, action.payload);

    yield put(
      setGifLinks(
        info.data.results.map(elem => {
          return { id: uuid(), url: elem.media[0].gif.url };
          // return { id: uuid(), url: elem.media[0].mediumgif.url };
        })
      )
    );
  } catch (e) {
    yield put(fetchGifError());
  }
}

function* pickSaga(action) {
  try {
    const { gifUrl, columnId, boardId, itemId } = action.payload;

    yield put(addComment({ columnId, itemId, boardId, gifUrl }));
  } catch (e) {
    yield put(enqueueSnackbar({ text: 'Error ocured while picking gif', mode: 'ERROR_DEFAULT' }));
  }
}

function* fetchTrendingSaga() {
  try {
    const response = yield call(api.requestTrending);
    yield put(
      setGifLinks(
        response.data.results.map(elem => {
          return { id: uuid(), url: elem.media[0].gif.url };
          // return { id: uuid(), url: elem.media[0].mediumgif.url };
        })
      )
    );
  } catch (e) {
    yield put(fetchGifError());
  }
}

function* tenorSaga() {
  yield takeLatest(searchForGif.type, searchForGifSaga);
  yield takeLatest(selectGif.type, pickSaga);
  yield takeLatest(fetchTrending.type, fetchTrendingSaga);
}

export default tenorSaga;
