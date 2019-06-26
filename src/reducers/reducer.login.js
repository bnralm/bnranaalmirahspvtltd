import * as actionType from './../constants/constant.action';

const loginReducerDefaultState = {
      profileObj: null,
      token: "",
      userEmail: "",
      userFirstName: "",
      userId: "",
      userLastName: "",
      userRole: "",
      isOpen: false,
      modalSignIn: false,
      modalSignUp: false
  };

  
const loginReducer = (state = loginReducerDefaultState, action) => {
    switch(action.type){
      case actionType.LOGIN_USER:
        return {
         ...state,
         ...action.login
        };
       
      case actionType.LOGOUT_USER:
        return {
         ...state,
         ...action.logout
        };

      case actionType.MODAL_SIGNIN:
        return {
         ...state,
         ...action.modalSignIn
        };
      case actionType.MODAL_CLOSE:
        return {
         ...state,
         ...action.modalClose
        };
      case actionType.SIGNUP_WITH_GOOGLE:
        return {
          ...state,
          profileObj: {
           ...state.profileObj, 
           ...action.profileObj
          }
        };

      default:
        return state;
     }
   }
   

  export default loginReducer;