import * as actionType from './../constants/constant.action';

export const signupWithGoogle = (profileObj) => ({
    type: actionType.SIGNUP_WITH_GOOGLE,
    profileObj
  });

export const signupWithGoogleRegister = (reqObj) => ({
    type: actionType.SIGNUP_WITH_GOOGLE_REGISTER,
    reqObj
  });

export const signupWithGoogleSuccess = (signupSuccess) => {
  console.log(signupSuccess)
  return {
    type: actionType.SIGNUP_WITH_GOOGLE_SUCCESS,
    signupSuccess: register
  }
};

export const signupWithGoogleFail = (signupFail) => ({
  type: actionType.SIGNUP_WITH_GOOGLE_FAILURE,
  signupFail
});

export const generateLoginPassword = () => ({
    type: actionType.GENERATE_PASSWORD,
});


