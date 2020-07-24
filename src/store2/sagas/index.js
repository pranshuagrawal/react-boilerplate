import { saga1 } from './saga';
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  //Combine sagas with 
  yield all([saga1()]);
  // OR
  // yield all([fork(saga1)]);
}
