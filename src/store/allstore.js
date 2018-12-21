import {createStore, combineReducers} from 'redux';
import productsReducer from './../reducers/products';



export default () => {
    const store = createStore(
        combineReducers({
            products: productsReducer
        }),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
        return store;
}
