import * as actionType from './../constants/constant.action';

const checkUserEmailDefaultState = {
    success: null,
    failure: null
};

const checkUserEmail = (state = checkUserEmailDefaultState, action) => {
    switch(action.type){
      case actionType.CHECK_USER_EMAIL_ADDRESS:
        return {
            ...state
        };
      
      case actionType.CHECK_USER_EMAIL_ADDRESS_SUCCESS: 
        return {
          ...state,
          success: action.success
         }
         
      case actionType.CHECK_USER_EMAIL_ADDRESS_FAIL:
        return {
          ...state,
          failure: action.failure,
        };
      
    default:
        return state;
     }
   }
   

  export default checkUserEmail;