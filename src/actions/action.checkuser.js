import * as actionType from './../constants/constant.action';

export const checkUserEmailAddress = (profileObj) => ({
    type: actionType.CHECK_USER_EMAIL_ADDRESS,
    profileObj
  });

export const checkUserEmailAddressSuccess = (profileObj) => ({
    type: actionType.CHECK_USER_EMAIL_ADDRESS_SUCCESS,
    success: profileObj
  });
  
export const checkUserEmailAddressFail = (profileObj) => ({
    type: actionType.CHECK_USER_EMAIL_ADDRESS_FAIL,
    failure: profileObj
  });