import * as actionType from './../constants/constant.action';

export const userSignupWithSocial = () => ({
    type: actionType.SIGNUP_WITH_GOOGLE,
  });

export const userSignupWithSocialSuccess = (registerSuccess) => ({
    type: actionType.SIGNUP_WITH_GOOGLE_SUCCESS,
    registerSuccess
  });

export const userSignupWithSocialFailure = (registerFail) => ({
    type: actionType.SIGNUP_WITH_GOOGLE_FAILURE,
    registerFail
  });




// export const userSignup = (signup) => ({
//     type: actionType.ADD_USER,
//     signup
//   });

// export const getRegister = (register) => ({
//     type: actionType.REGISTER_USER,
//     register     
//   });
    

