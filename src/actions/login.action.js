import * as actionType from '../constants/constant.action';

export const loginUser = (login) => ({
    type: actionType.LOGIN_USER,
    login
  });

export const logoutUser = (logout) => ({
    type: actionType.LOGOUT_USER,
    logout
  });  
  
export const loginFormOpen = (modalSignIn) => ({
    type: actionType.MODAL_SIGNIN,
    modalSignIn
  });

export const loginFormClose = (modalClose) => ({
    type: actionType.MODAL_CLOSE,
    modalClose
  });

  