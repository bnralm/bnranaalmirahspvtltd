import * as actionType from './../constants/constant.action';

export const signupWithGoogle = (profileObj) => ({
    type: actionType.SIGNUP_WITH_GOOGLE,
    profileObj
  });


export const generateLoginPassword = () => ({
    type: actionType.GENERATE_PASSWORD,
});


export const closeModal = () => ({
  type: actionType.MODAL_CLOSE,
});

