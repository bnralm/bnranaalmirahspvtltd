import { put, takeLatest, takeEvery, call } from 'redux-saga/effects';
import * as actionType from './../constants/constant.action';
import {serviceAPI} from './../services/service.api';

export function* getProductRequest() {
    try {
        const data = yield call(serviceAPI.getProducts)
        yield put({type: actionType.PRODUCTS_REQUEST_SUCCESS, products: data.data})

     } catch (error) {

        yield put({type: actionType.PRODUCTS_REQUEST_FAILURE, productsFail: error})

     }
  }

  export function* getProductDetailsRequest() {
    try {
        const data = yield call(serviceAPI.getProductDetails)
        yield put({type: actionType.PRODUCTS_REQUEST_DETAILS_SUCCESS, details: data.data})
     } catch (error) {
        yield put({type: actionType.PRODUCTS_REQUEST_DETAILS_FAILURE, detailsFail: error})
     }
  }

  export function* getProductsDescriptionRequest() {
    try {
        const data = yield call(serviceAPI.getProductsDescription)
        yield put({type: actionType.PRODUCTS_REQUEST_DESCRIPTION_SUCCESS, description: data.data})
     } catch (error) {
        yield put({type: actionType.PRODUCTS_REQUEST_DESCRIPTION_FAILURE, descriptionFail: error})
     }
  }


 export function* getIntialRequest() {
   yield takeLatest(actionType.PRODUCTS_REQUEST, getProductRequest)
   yield takeLatest(actionType.PRODUCTS_REQUEST_DESCRIPTION, getProductsDescriptionRequest)
   yield takeLatest(actionType.PRODUCTS_REQUEST_DETAILS, getProductDetailsRequest)
 }

