import * as actionType from './../constants/constant.action';

const loginReducerDefaultState = {
      loginInfo: null,
      success: null,
      failure: null
  };

  
const loginReducer = (state = loginReducerDefaultState, action) => {
    switch(action.type){
      case actionType.LOGIN_USER:
        return {
         ...state,
         loginInfo: action.reqObj
        };

        case actionType.LOGIN_USER_SUCCESS:
          return {
          ...state,
          success: action.success,
          loginInfo: null
          };

        case actionType.LOGIN_USER_FAILURE:
          return {
            ...state,
            failure: action.failure
          };
       
      case actionType.LOGOUT_USER:
        return {
         ...state,
         success: null
        };

      case actionType.SIGNUP_WITH_GOOGLE:
        return {
          ...state,
          state
        };

      
      default:
        return state;
     }
   }
   

  export default loginReducer;