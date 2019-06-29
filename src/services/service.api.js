/**
 * Summary: Member Search actions
 * Description: Member Search function which will called to service layer
 * @author Pankaj Rana
 * @date  27.05.2019
 */
import { baseService } from './service';
import { uriConstants } from '../constants/constant.uri';

/**
 * Description: const member list would be exposed so it can be accessed outside
 * @param {null}
 * @return {null}
 */
export const serviceAPI = {
  getProducts,
  getProductDetails,
  getProductsDescription,
  postRegister,
  postLogin
}

/**
 * Description: Fetch list of members on the basis of filter
 * @param {json} req_data
 * @return {json} req_response
 */
function getProducts() {
  let url = uriConstants.PRODUCTS_URL;
  return baseService.get(
    url
    );
}

function getProductDetails() {
  let url = uriConstants.PRODUCT_DETAILS_URL;
  return baseService.get(
    url
    );
}

function getProductsDescription() {
  let url = uriConstants.PRODUCT_DETAIL_DESC_URL;
  return baseService.get(
    url
    );
}


function postRegister(reqObj) {
  let url = uriConstants.REGISTER_URL;
  return baseService.post(
    url,
    reqObj
    );
}

function postLogin(reqObj) {
  let url = uriConstants.LOGIN_URL;
  return baseService.post(
    url,
    reqObj
    );
}