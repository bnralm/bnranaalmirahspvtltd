import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
/*import feebacksReducer from '../reducers/feebacks';

export default () => {
  const store = createStore(
    combineReducers({
      feedbacks: feebacksReducer,
    })
  );
  return store;
};
 */

 
// ADD_FEEDBACK

const addFeeback = (
    {
      userName = '',
      userEmail = '',
      userMessage = '',
      createdAt = 0,
      isRosolved = false,
      isRosolvedDate = undefined
    } = {}
  ) => ({
    type: 'ADD_FEEDBACK',
    feeback: {
      id: uuid(),
      userName,
      userEmail,
      userMessage,
      createdAt,
      isRosolved,
      isRosolvedDate
      }
  });

  
  
  // REMOVE_FEEDBACK
  
const removeFeedback = ({ id } = {}) => ({
    type: 'REMOVE_FEEDBACK',
    id
  });

  
  // EDIT_FEEDBACK

  const editFeedback = (id, updates) => ({
    type: 'EDIT_FEEDBACK',
    id,
    updates
  });
  
/*
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
      case 'ADD_FEEDBACK':
        // return state.concat(action.feeback);
        return [
          ...state,
          action.feeback
        ];
      case 'REMOVE_FEEDBACK':
        return state.filter( ({id}) => {
            console.log('==>', id, ' actid ==> ', action.id);
            
            return id !== action.id;
          });
        
      case 'EDIT_FEEDBACK':
          return state.map( (feedback) => {
            if(feedback.id == action.id){
              return {
                ...feedback,
                ...action.updates
              }
            }
            else {
              return state;
            }
          } )
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

  store.subscribe( () => {
    
    console.log(store.getState());

  })

  const feebackData1 = store.dispatch(addFeeback({userName: 'Sudhir', userEmail: 'sudhirpie@timesgroup.com', userMessage: 'want to buy 10 pcs almirahs'}))
  const feebackData2 = store.dispatch(addFeeback({userName: 'Pankaj', userEmail: 'abc@timesgroup.com', userMessage: 'want to buy 10 pcs almirahs'}))
  // store.dispatch(removeFeedback({id: feebackData2.feeback.id}));
  store.dispatch(editFeedback(feebackData2.feeback.id, {isRosolved: true}));

  // console.log('====>',feebackData2.feeback.id);

  console.log(feebackData1);
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
/* 
const user = {
  name: 'Pankja',
  age:32
}
 */
/* console.log(
  {
    ...user,
    age:30,
    location: 'giridih'
  }

) */