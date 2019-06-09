import { put, takeLatest, call, throttle } from 'redux-saga/effects';
import * as actionType from './../constants/constant.action';
import {serviceAPI} from './../services/service.api';
import {find} from 'lodash/fill';

let products, details, descriptions;
export function* getProductRequest() {
    try {
        products = yield call(serviceAPI.getProducts)
        yield put({type: actionType.PRODUCTS_REQUEST_SUCCESS, products: products.data})

     } catch (error) {

        yield put({type: actionType.PRODUCTS_REQUEST_FAILURE, productsFail: error})

     }
  }

  export function* getProductDetailsRequest() {
    try {
        details = yield call(serviceAPI.getProductDetails)
        yield put({type: actionType.PRODUCTS_REQUEST_DETAILS_SUCCESS, details: details.data})
     } catch (error) {
        yield put({type: actionType.PRODUCTS_REQUEST_DETAILS_FAILURE, detailsFail: error})
     }
  }

 export function* getProductsDescriptionRequest() {
    
    try {
        descriptions = yield call(serviceAPI.getProductsDescription)
        yield put({type: actionType.PRODUCTS_REQUEST_DESCRIPTION_SUCCESS, description: descriptions.data})
     } catch (error) {
        yield put({type: actionType.PRODUCTS_REQUEST_DESCRIPTION_FAILURE, descriptionFail: error})
     }
  }

 export function* getIntialRequest() {
   yield takeLatest(actionType.PRODUCTS_REQUEST, getProductRequest)
   yield takeLatest(actionType.PRODUCTS_REQUEST_DESCRIPTION, getProductsDescriptionRequest)
   yield takeLatest(actionType.PRODUCTS_REQUEST_DETAILS, getProductDetailsRequest)
 }

 