import { takeLatest, call, put, take, cancelled } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {
  UPVOTE_ITEM,
  ADD_ITEM,
  ADD_ITEM_COMMENT,
  FETCH_BOARD,
  LOAD_WS_ROOM,
  DRAG_DROP_ITEM,
  CREATE_BOARD,
  DELETE_ITEM,
  // SEND_TO_WS_ROOM,
} from './boardActionTypes';
import { enqueueSnackbar } from '../../../components/Notistack/notistackSlice';
import {
  increaseVote,
  saveItem,
  saveComment,
  loadBoardSuccess,
  dragDropItemUpdate,
  createBoardSuccess,
  fetchBoard,
} from './boardActions';
import api from './boardApi';
import { getAuthenticationToken } from '../../../utils/localStoreFunctions';
import { BOARD_TOPIC } from '../../../app/store/constants';

function* upvoteSaga(action) {
  try {
    // const {data} = yield call(api.updateVote);
    const { columnId, itemId, boardId } = action.payload;
    yield call(api.updateVote, boardId, columnId, itemId);
    yield put(increaseVote({ columnId, itemId }));
    // yield put(sendToWs('CUSTOM UPVOTE'));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't upvote server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* addItemSaga(action) {
  try {
    const { item, index } = action.payload;
    const { text, columnId, boardId } = item;
    const itemDTO = {
      text,
      boardColumnId: columnId,
    };
    const addItemResponse = yield call(api.addItem2, boardId, columnId, itemDTO);

    item.itemId = addItemResponse.data.id;
    const forReducer = {
      index,
      item,
    };

    yield put(saveItem(forReducer));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't add item, server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* addCommentSaga(action) {
  try {
    const { gifUrl, text, columnId, boardId, itemId } = action.payload;
    const commentDTO = {
      text,
      gifUrl,
      columnItemId: itemId,
    };
    const { data } = yield call(api.addComment, boardId, columnId, itemId, commentDTO);

    const commentObj = {
      commentId: data.id,
      gifUrl,
      text,
    };

    const forReducer = {
      columnId,
      boardId,
      itemId,
      commentObj,
    };

    yield put(saveComment(forReducer));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't add comment, server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* fetchBoardSaga(action) {
  try {
    const { id } = action.payload;
    const constructingBoard = {
      columns: [],
    };

    const boardDetailsResponse = yield call(api.fetchBoardDetails, id);
    const { boardId, boardName } = boardDetailsResponse.data;
    constructingBoard.title = boardName;
    constructingBoard.boardId = boardId;

    const boardColumnListResponse = yield call(api.boardColumnsIdList, boardId);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < boardColumnListResponse.data.length; ++i) {
      const { id: columnId, name, color, votable } = boardColumnListResponse.data[i];

      constructingBoard.columns.push({
        name,
        color,
        id: columnId,
        isVotable: votable,
        items: [],
        inputs: [],
      });

      const columnItemsResponse = yield call(api.columnItems, id, columnId);

      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < columnItemsResponse.data.length; ++j) {
        const { id: idd, text, voteCount, boardColumnId } = columnItemsResponse.data[j];
        const item = {
          itemId: idd,
          text,
          voteCount,
          columnId: boardColumnId,
          comments: [],
        };
        constructingBoard.columns[i].items.push(item);

        const itemCommentsResponse = yield call(api.itemComments, id, columnId, idd);

        // eslint-disable-next-line no-plusplus
        for (let k = 0; k < itemCommentsResponse.data.length; ++k) {
          const { id: commentId, text: commentText, gifUrl } = itemCommentsResponse.data[k];
          const comment = {
            commentId,
            text: commentText,
            gifUrl,
          };
          constructingBoard.columns[i].items[j].comments.push(comment);
        }
      }
    }

    yield put(loadBoardSuccess(constructingBoard));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't fetch board, server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* deleteItemSaga(action) {
  try {
    const { columnId, itemId, boardId } = action.payload;
    yield call(api.deleteItem, boardId, columnId, itemId);
    yield put(fetchBoard({ id: boardId }));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't delete server error", mode: 'ERROR_DEFAULT' }));
  }
}

/* **********************************************************
 * Web socket
 * ******************************************************* */

const createChannel = boardId => {
  const sock = new SockJS(`http://localhost:8080/ws/?Authorization=${getAuthenticationToken()}`);
  const stompClient = Stomp.over(sock);

  return new Promise((resolve, reject) => {
    stompClient.connect(
      {
        Authorization: `token ${getAuthenticationToken()}`,
      },
      () => {
        const channel = eventChannel(emitter => {
          sock.onclose = e => {
            if (e.code === 1005) {
              emitter(END);
            }
          };

          const sub = stompClient.subscribe(BOARD_TOPIC + boardId, message => {
            // const response = JSON.parse(message.body);
            const response = message;
            emitter(response); // here resolve the promise, or reject if any error
          });
          return () => sub.unsubscribe();
        });

        resolve(channel);
      },
      connectionError => reject(connectionError)
    );
  });
};

function* webSocketSaga(action) {
  const channel = yield createChannel(action.payload); // here you will get the resolved data
  try {
    while (true) {
      const response = yield take(channel);
      console.log('ws response:', response);
      // TODO: from BE return user id that triggered notification, if
      // fe.user.id == be.user.id dont show notification
      yield put(enqueueSnackbar({ text: 'refresh page', mode: 'ERROR_DEFAULT' }));
    }
  } catch (ex) {
    yield put(enqueueSnackbar({ text: 'ws saga exception', mode: 'ERROR_DEFAULT' }));
  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
}

// function sendWsMessageSaga(action) {
//   const name = action.payload;
//   stompClient.send(`/ws-board/11`, {}, JSON.stringify({ name: `/ws-board/${name}` }));
// }
/* **********************************************************
 * End of Web socket
 * ******************************************************* */

function* dragDropItemSaga(action) {
  try {
    yield put(dragDropItemUpdate(action.payload));
    yield call(api.updateItemsMock);
  } catch (e) {
    yield put(enqueueSnackbar({ text: 'Server error while draggin items', mode: 'ERROR_DEFAULT' }));
    yield put(
      dragDropItemUpdate({
        toColumnId: action.payload.from.columnId,
        from: {
          columnId: action.payload.toColumnId,
          itemId: action.payload.from.itemId,
        },
      })
    );
  }
}

function* createBoardSaga(action) {
  try {
    const { title } = action.payload;

    const request = {
      boardName: title,
    };

    const { data } = yield call(api.createBoard, request);
    yield put(createBoardSuccess({ title: data.name, boardId: data.id }));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't create board, server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* boardSaga() {
  yield takeLatest(UPVOTE_ITEM, upvoteSaga);
  yield takeLatest(ADD_ITEM, addItemSaga);
  yield takeLatest(ADD_ITEM_COMMENT, addCommentSaga);
  yield takeLatest(FETCH_BOARD, fetchBoardSaga);
  yield takeLatest(LOAD_WS_ROOM, webSocketSaga);
  // yield takeLatest(SEND_TO_WS_ROOM, sendWsMessageSaga);
  yield takeLatest(DRAG_DROP_ITEM, dragDropItemSaga);
  yield takeLatest(CREATE_BOARD, createBoardSaga);
  yield takeLatest(DELETE_ITEM, deleteItemSaga);
}

export default boardSaga;
