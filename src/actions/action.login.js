import * as actionType from './../constants/constant.action';

export const loginUser = reqObj => ({
    type: actionType.LOGIN_USER,
    reqObj
  });

 
export const loginUserSuccess = (success) => ({
    type: actionType.LOGIN_USER_SUCCESS,
    success
  });

export const loginUserFailure = (failure) => ({
    type: actionType.LOGIN_USER_FAILURE,
    failure
  });



export const logoutUser = () => ({
    type: actionType.LOGOUT_USER,
});  

  
