import { all } from 'redux-saga/effects'

import {getIntialRequest} from './product.saga';
import {onGetRequestRampup} from './rampup.saga';


export default function* rootSaga() {
    yield all([
      getIntialRequest(),
      onGetRequestRampup()
    ])
  }


