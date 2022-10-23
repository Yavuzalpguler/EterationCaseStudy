import {
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_PROGRESS,
  GET_USER_INFO_SUCCESS,
} from './Main.actionTypes';
import {mainServices} from './Main.api';
import {takeLatest, call, put} from 'redux-saga/effects';

function* getUserInfoSaga(action) {
  try {
    const result = yield call(mainServices.getUserInfo);

    yield put({
      type: GET_USER_INFO_SUCCESS,
      result,
    });
  } catch (error) {
    yield put({
      type: GET_USER_INFO_FAILURE,
      error,
    });
  }
}

export function* watchGetUserInfo() {
  yield takeLatest(GET_USER_INFO_PROGRESS, getUserInfoSaga);
}
