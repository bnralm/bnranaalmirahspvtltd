import * as actionType from './../constants/constant.action';

export const signupWithGoogle = (profileObj) => ({
    type: actionType.SIGNUP_WITH_GOOGLE,
    profileObj
  });

export const signupWithGoogleRegister = (reqObj) => ({
    type: actionType.SIGNUP_WITH_GOOGLE_REGISTER,
    reqObj
  });

export const signupWithGoogleSuccess = (registerSuccess) => {
  return {
    type: actionType.SIGNUP_WITH_GOOGLE_SUCCESS,
    registerSuccess
  }
};

export const signupWithGoogleFail = (signupFail) => ({
  type: actionType.SIGNUP_WITH_GOOGLE_FAILURE,
  failure: signupFail
});

export const generateLoginPassword = () => ({
    type: actionType.GENERATE_PASSWORD,
});

export const closeModalPopup = () => ({
  type: actionType.MODAL_CLOSE,
});

