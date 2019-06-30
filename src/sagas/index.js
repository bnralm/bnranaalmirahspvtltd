import { all } from 'redux-saga/effects'

import {getIntialRequest} from './product.saga';
import { postRegisterWatcher, loginInfoWatcher, checkUserEmailWatcher } from './loginRegister.saga';

// import {onGetRequestRampup} from './rampup.saga';


export default function* rootSaga() {
    yield all([
      getIntialRequest(),
      postRegisterWatcher(),
      loginInfoWatcher(),
      checkUserEmailWatcher()
    ])
  }


