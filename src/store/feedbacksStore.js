import {createStore, combineReducers} from 'redux';

import feedbacksReducer from './../reducers/feedbacks';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            feedbacks: feedbacksReducer,
            filters: filtersReducer
          })
        );
    return store;    
}