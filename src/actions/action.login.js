import * as actionType from './../constants/constant.action';

export const loginUser = () => ({
    type: actionType.LOGIN_USER,
  });

 
export const loginUserSuccess = (loginInfoSuccess) => ({
    type: actionType.LOGIN_USER_SUCCESS,
    loginInfoSuccess
  });

export const loginUserFailure = (loginInfoFail) => ({
    type: actionType.LOGIN_USER_FAILURE,
    loginInfoFail
  });



export const logoutUser = () => ({
    type: actionType.LOGOUT_USER,
});  

  
