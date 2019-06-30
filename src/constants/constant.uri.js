/**
 * Summary: API_DIRECTORY, urlConstants, API_INTERFACE, uriConstants
 * Description: define the API_DIRECTORY, urlConstants, API_INTERFACE, uriConstants
 * @author Pankaj Rana
 * @date  27.06.2019
 */

export const API_DIRECTORY = { DOC_ROOT: '' };

export const urlConstants = {
  BASE_URL: 'https://ranasteelco.herokuapp.com/api',
  FAKE_URL: 'http://localhost:4000'
};

export const API_INTERFACE = {
  PRODUCTS: '/products',
  PRODUCT_DETAILS: '/productdetails',
  PRODUCT_DETAIL_DESC: '/productdetaildescs',
  REGISTER: '/register',
  LOGIN: '/login',
  CHECK_USER_EMAIL: '/checkUserEmail'
};

export const uriConstants = {
  PRODUCTS_URL: urlConstants.BASE_URL + API_INTERFACE.PRODUCTS,
  PRODUCT_DETAILS_URL:
    urlConstants.BASE_URL + API_INTERFACE.PRODUCT_DETAILS,
  PRODUCT_DETAIL_DESC_URL:
    urlConstants.BASE_URL + API_INTERFACE.PRODUCT_DETAIL_DESC,
  REGISTER_URL: 
    urlConstants.BASE_URL + API_INTERFACE.REGISTER,
  LOGIN_URL: 
    urlConstants.BASE_URL + API_INTERFACE.LOGIN,
  CHECK_USER_EMAIL_URL:   
    urlConstants.BASE_URL + API_INTERFACE.CHECK_USER_EMAIL,
};

