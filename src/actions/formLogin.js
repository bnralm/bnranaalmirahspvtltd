import * as actionType from './../constants/constant.action';

export const getFormLogin = (login) => ({
    type: actionType.SIGN_USER,
    login
  });

   