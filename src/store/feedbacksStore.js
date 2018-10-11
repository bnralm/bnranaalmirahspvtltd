import {createStore, combineReducers} from 'redux';

import feedbacksReducer from './../reducers/feedbacks';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            feedbacks: feedbacksReducer,
            filters: filtersReducer
          }),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    return store;    
}