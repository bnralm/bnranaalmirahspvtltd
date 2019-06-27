import { put, takeLatest, call, throttle } from 'redux-saga/effects';
import * as actionType from './../constants/constant.action';
import {serviceAPI} from './../services/service.api';


export function* postRegisterWalker(reqObj) {
    try {
       let register = yield call(serviceAPI.postRegister(reqObj) )
       yield put({type: actionType.SIGNUP_WITH_GOOGLE_SUCCESS, register: register.data})

     } catch (error) {
        yield put({type: actionType.SIGNUP_WITH_GOOGLE_FAILURE, registerFail: error})
     }
  }

  export function* postLoginWalker(reqObj) {
    try {
        let loginInfo = yield call(serviceAPI.postLogin(reqObj))
        yield put({type: actionType.LOGIN_USER_SUCCESS, loginInfo: loginInfo.data})
     } catch (error) {
        yield put({type: actionType.LOGIN_USER_FAILURE, detailsFail: error})
     }
  }

 export function* postRegisterWatcher() {
   yield takeLatest(actionType.SIGNUP_WITH_GOOGLE, postRegisterWalker)
 }


 export function* loginInfoWatcher() {
    yield takeLatest(actionType.LOGIN_USER, postLoginWalker)
  }
 
 