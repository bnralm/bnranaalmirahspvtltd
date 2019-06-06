import { combineReducers } from 'redux'; 
import formLoginReducer from './reducer.formLogin';
import loginReducer from './reducer.login';
import productReducer from './reducer.products';
import rampupReducer from './reducer.rampup';

 
const appReducer = combineReducers({ 
    formLoginReducer, 
    loginReducer, 
    productReducer, 
    rampupReducer
}) 
 
export default appReducer 
