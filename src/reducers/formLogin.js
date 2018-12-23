const formLoginReducerDefaultState = {
      userEmail: "",
      userPassword: ""
  };

  
export default (state = formLoginReducerDefaultState, action) => {
    switch(action.type){
      case 'SIGN_USER':
        return {
         ...state,
         ...action.login
        };
               
      default:
        return state;
     }
   }
   

  