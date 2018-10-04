import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
/* import feebacksReducer from '../reducers/feebacks';

export default () => {
  const store = createStore(
    combineReducers({
      feedbacks: feebacksReducer,
    })
  );
  return store;
};
 */

/* 
// ADD_FEEDBACK

const addFeeback = (
    {
      userName = '',
      userEmail = '',
      userMessage = '',
      createdAt = 0
    } = {}
  ) => ({
    type: 'ADD_FEEDBACK',
    expense: {
      id: uuid(),
      userName,
      userEmail,
      userMessage,
      createdAt
    }
  });

  
  
  // REMOVE_FEEDBACK
  
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });

  // EDIT_FEEDBACK

  const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
  

// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  });

  
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  
  // END_START_DATE

  const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });
   */

const feedbacksReducerDefaultState = [];

   const feedbacksReducer  = (state = feedbacksReducerDefaultState, action) => {
    switch(action.type){
      default:
        return state;
    }
   }

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'createdAt',
    startDate: undefined,
    endDate: undefined
   }

    const filtersReducer = (state = filtersReducerDefaultState, action) => {
      switch(action.type){
        default: 
          return state;
      }
    } 

const store = createStore(
  combineReducers({
      feebacks: feedbacksReducer,
      filters: filtersReducer
    })
  );

console.log(store.getState());

 const demoState = {
     feebacks: [
         {
             id: uuid(),
             userName: undefined,
             userEmail: undefined,
             userMessage: undefined,
             createdAt: 0,
             isRosolved: false
         }
     ],
    filters: {
        text: 'order',
        sortBy: 'createdAt',
        startDate: undefined,
        endDate: undefined
    } 
 }


