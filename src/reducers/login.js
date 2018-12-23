const loginReducerDefaultState = {
      token: "",
      userEmail: "",
      userFirstName: "",
      userId: "",
      userLastName: "",
      userRole: ""
  };

  
export default (state = loginReducerDefaultState, action) => {
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

        
      default:
        return state;
     }
   }
   

  