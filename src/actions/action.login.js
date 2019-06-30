import * as actionType from './../constants/constant.action';

export const loginUser = (reqObj) => ({
    type: actionType.LOGIN_USER,
    loginObj: reqObj
  });

 
export const loginUserSuccess = (success) => ({
    type: actionType.LOGIN_USER_SUCCESS,
    success
  });

  export const loginUserFail = (failure) => ({
    type: actionType.LOGIN_USER_FAILURE,
    failure
  });


export const logoutUser = (logout) => ({
    type: actionType.LOGOUT_USER,
    logout
  });  
  
  

