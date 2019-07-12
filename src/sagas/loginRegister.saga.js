import { put, takeLatest, call, throttle } from 'redux-saga/effects';
import * as actionType from './../constants/constant.action';
import {serviceAPI} from './../services/service.api';


export function* postRegisterWalker({reqObj}) {

    try {
       let register = yield call(serviceAPI.postRegister(reqObj) )
       
       yield put({type: actionType.SIGNUP_WITH_GOOGLE_SUCCESS, registerSuccess: register.data})

     } catch (error) {
        yield put({type: actionType.SIGNUP_WITH_GOOGLE_FAILURE, signupFail: error})
     }
  }

  export function* postLoginWalker({reqObj}) {
    try {
        let loginInfo = yield call(serviceAPI.postLogin, reqObj);
        yield put({type: actionType.LOGIN_USER_SUCCESS, success: loginInfo.data})
     } catch (error) {
        yield put({type: actionType.LOGIN_USER_FAILURE, failure: error})
     }
  }

export function* checkUserEmailWalker({profileObj}) {
   try {
       let userEmailInfo = yield call(serviceAPI.checkUserEmail, profileObj)
       yield put({type: actionType.CHECK_USER_EMAIL_ADDRESS_SUCCESS, success: userEmailInfo})
    } catch (error) {
       yield put({type: actionType.CHECK_USER_EMAIL_ADDRESS_FAIL, failure: error})
    }
 }
 

 
 export function* postRegisterWatcher() {
   yield takeLatest(actionType.SIGNUP_WITH_GOOGLE_REGISTER, postRegisterWalker )
 }
 export function* checkUserEmailWatcher() {
   yield takeLatest(actionType.CHECK_USER_EMAIL_ADDRESS, checkUserEmailWalker)
 } 
 export function* loginInfoWatcher() {
    yield takeLatest(actionType.LOGIN_USER, postLoginWalker)
  }
  
 