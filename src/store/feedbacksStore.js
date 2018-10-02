import {createStore, combineReducers} from 'redux';

import feedbacksReducer from './../reducers/feebacks';
import filtersReducer from './../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            feebacks: feedbacksReducer,
            filters: filtersReducer
          })
        );
    return store;    
}