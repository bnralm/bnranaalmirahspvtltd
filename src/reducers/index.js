import { combineReducers } from 'redux'; 
import formLoginReducer from './formLogin';
import loginReducer from './login';
import productReducer from './products';
import rampupReducer from './rampup';

 
const appReducer = combineReducers({ 
    formLoginReducer, 
    loginReducer, 
    productReducer, 
    rampupReducer
}) 
 
export default appReducer 
