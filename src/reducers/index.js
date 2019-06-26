import { combineReducers } from 'redux'; 
import formLoginReducer from './reducer.formLogin';
import loginReducer from './reducer.login';
import productReducer from './reducer.products';
import rampupReducer from './reducer.rampup';
import signupReducer from './reducer.signupgoogle';

 
const appReducer = combineReducers({ 
    formLoginReducer, 
    loginReducer, 
    productReducer, 
    rampupReducer,
    signupReducer
}) 
 
export default appReducer 
