const formLoginReducerDefaultState = {
      userEmail: "",
      userPassword: ""
  };

  
const formLoginReducer = (state = formLoginReducerDefaultState, action) => {
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
   

   export default formLoginReducer;