import {call, fork, put, delay } from 'redux-saga/effects';
import {requestRampupGallary} from './../actions/action.rampup';


export function* onDelayRequestRampup() {
    yield fork(getRequestRampup)
    yield delay(10000)
  }

export function* getRequestRampup() {
    yield put(requestRampupGallary())
}

export function* onGetRequestRampup() {
    yield call(onDelayRequestRampup);
}

    
