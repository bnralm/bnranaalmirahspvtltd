import * as actionType from '../constants/constant.action';

export const productRequestSuccess = ( products => ({
    type: actionType.PRODUCTS_REQUEST_SUCCESS,
    products
}))

export const productRequestFailure = ( productsFail=> ({
  type: actionType.PRODUCTS_REQUEST_FAILURE,
  productsFail
}))


export const productDetailRequestSuccess = ( details => ({
  type: actionType.PRODUCTS_REQUEST_DETAILS_SUCCESS,
  details
}))

export const productDetailRequestFailure = ( detailsFail => ({
  type: actionType.PRODUCTS_REQUEST_DETAILS_FAILURE,
  detailsFail 
}))



export const productDescriptionRequestSuccess = ( description => ({
  type: actionType.PRODUCTS_REQUEST_DESCRIPTION_SUCCESS,
  description
}))

export const productDescriptionRequestFailure = ( descriptionFail => ({
  type: actionType.PRODUCTS_REQUEST_DESCRIPTION_FAILURE,
  descriptionFail 
}))


export const getProduct = () => ({type: actionType.PRODUCTS_REQUEST})

export const getProductsDetails = () => ({type: actionType.PRODUCTS_REQUEST_DETAILS})

export const getProductsDescription = () => ({type: actionType.PRODUCTS_REQUEST_DESCRIPTION})

