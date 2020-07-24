import { put, takeLatest, call } from 'redux-saga/effects';
import * as TYPES from './types';
import { performLoginApi } from './api';

function* performLogin(payload) {
  try {
    const response = yield call(performLoginApi, payload);
    yield put({
      type: TYPES.PERFORM_LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: TYPES.PERFORM_LOGIN_FAILED,
      error: error && error.message,
    });
  }
}

export default function* performLoginSaga() {
  yield takeLatest(TYPES.PERFORM_LOGIN, performLogin);
}