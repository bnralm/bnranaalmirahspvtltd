import {createStore, combineReducers} from 'redux';
import productsReducer from './../reducers/products';
import registrationReducerDefaultState from './../reducers/registration';
import loginReducerDefaultState from './../reducers/login';
import formLoginReducerDefaultState from './../reducers/formLogin';




export default () => {
    const store = createStore(
        combineReducers({
            products: productsReducer,
            register: registrationReducerDefaultState,
            login: loginReducerDefaultState,
            formLogin: formLoginReducerDefaultState
        }),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
        return store;
}
