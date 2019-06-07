import { all } from 'redux-saga/effects'

import {getIntialRequest} from './product.saga';

export default function* rootSaga() {
    yield all([
      getIntialRequest()
    ])
  }


