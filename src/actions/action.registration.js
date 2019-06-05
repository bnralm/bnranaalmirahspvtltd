import * as actionType from './../constants/constant.action';

export const userSignup = (signup) => ({
    type: actionType.ADD_USER,
    signup
  });

export const getRegister = (register) => ({
    type: actionType.REGISTER_USER,
    register     
  });
    