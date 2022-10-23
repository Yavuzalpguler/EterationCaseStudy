import {all} from 'redux-saga/effects';

import {watchGetUserInfo} from './Main/Main.saga';
export default function* RootSaga() {
  yield all([
    /* App Saga */
    watchGetUserInfo(),
  ]);
}
