import { put, takeEvery, all } from 'redux-saga/effects'

import {helloSaga, watchIncrementAsync} from './product.saga';

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }