import { combineReducers } from 'redux'; 
import formLoginReducer from './reducer.formLogin';
import loginReducer from './reducer.login';
import productReducer from './reducer.products';
import rampupReducer from './reducer.rampup';
import signupReducer from './reducer.signupgoogle';
import checkUserEmail from './reducer.checkuser';

 
const appReducer = combineReducers({ 
    formLoginReducer, 
    loginReducer, 
    productReducer, 
    rampupReducer,
    signupReducer,
    checkUserEmail
}) 
 
export default appReducer 
