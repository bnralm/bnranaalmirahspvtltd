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
    closeModal: true
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