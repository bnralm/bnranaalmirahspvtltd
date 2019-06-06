import uuid from 'uuid';
import moment from 'moment';
import axios from 'axios';
const now  = moment();

const registrationReducerDefaultState = {
    userId: uuid(),
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPassword: '',
    userRole: 'user',
    createAt: now.format('MMMM Do YYYY, h:mm:ss a')
  };


const registrationReducer = (state = registrationReducerDefaultState, action) => {
 switch(action.type){
   case 'ADD_USER':
     return {
      ...state,
      ...action.signup
     };
   case 'REGISTER_USER':
      return {
        ...state
      }

   default:
     return state;
  }
}

export default registrationReducer;