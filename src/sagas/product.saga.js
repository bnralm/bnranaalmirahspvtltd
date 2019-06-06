import { put, takeLatest,  call } from 'redux-saga/effects';
import * as actionType from './../constants/constant.action';
import * as Api from './../services/service.api';

export function* getProduct() {
    try {
        const data = yield call(Api.getProducts)
        yield put({type: actionType.PRODUCTS_REQUEST_SUCCESS, data})
     } catch (error) {
        yield put({type: actionType.PRODUCTS_REQUEST_FAILURE, error})
     }
  }

  export function* getProductDetails() {
    try {
        const data = yield call(Api.getProductDetails)
        yield put({type: actionType.PRODUCTS_REQUEST_DETAILS_SUCCESS, data})
     } catch (error) {
        yield put({type: actionType.PRODUCTS_REQUEST_DETAILS_FAILURE, error})
     }
  }

  export function* getProductsDescription() {
    try {
        const data = yield call(Api.getProductsDescription)
        yield put({type: actionType.PRODUCTS_REQUEST_DESCRIPTION_SUCCESS, data})
     } catch (error) {
        yield put({type: actionType.PRODUCTS_REQUEST_DESCRIPTION_FAILURE, error})
     }
  }


export function* getIntialRequest() {
   yield takeLatest(actionType.PRODUCTS_REQUEST, getProduct)
   yield takeLatest(actionType.PRODUCTS_REQUEST_DESCRIPTION, getProductsDescription)
   yield takeLatest(actionType.PRODUCTS_REQUEST_DETAILS, getProductDetails)
 }

