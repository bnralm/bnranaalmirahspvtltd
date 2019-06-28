import * as actionType from './../constants/constant.action';

const signupReducerDefaultState = {
    profileObj: {
      email:undefined,
      familyName:undefined,
      givenName:undefined,
      imageUrl:undefined,
      name :undefined
    },
    openModal:false,
    closeModal: true,
    success: null,
    failure: null
};

  
const signupReducer = (state = signupReducerDefaultState, action) => {
    switch(action.type){
      case actionType.SIGNUP_WITH_GOOGLE:
        return {
          ...state,
          profileObj: {
           ...state.profileObj, 
           ...action.profileObj
          },
          openModal: true,
          closeModal: false
        };
      
      case actionType.SIGNUP_WITH_GOOGLE_REGISTER: 
        return {
          ...state,
         }

      case actionType.SIGNUP_WITH_GOOGLE_SUCCESS:
        return {
          ...state,
          success: action.signupSuccess,
        };
      
      case actionType.SIGNUP_WITH_GOOGLE_FAILURE:
          return {
            ...state,
            failure: action.signupFail,
          };  

        case actionType.GENERATE_PASSWORD: {
            return {
              ...state
            }
        };

       case actionType.CLOSE_MODAL: {
          return {
              ...state,
              closeModal: true,
              openModal: false
          }
      }

      default:
        return state;
     }
   }
   

  export default signupReducer;