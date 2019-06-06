const loginReducerDefaultState = {
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
      case 'LOGIN_USER':
        return {
         ...state,
         ...action.login
        };
       
      case 'LOGOUT_USER':
        return {
         ...state,
         ...action.logout
        };

      case 'MODAL_SIGNIN':
        return {
         ...state,
         ...action.modalSignIn
        };
      case 'MODAL_CLOSE':
        return {
         ...state,
         ...action.modalClose
        };

      default:
        return state;
     }
   }
   

  export default loginReducer;