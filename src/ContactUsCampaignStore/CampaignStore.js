import { createStore, combineReducers } from 'redux';
import feedbackReducer from './../reducers/feebacks';
import filtersReducer from './../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      feedbacks: feedbackReducer,
      filters: filtersReducer
    })
  );

  return store;
};


