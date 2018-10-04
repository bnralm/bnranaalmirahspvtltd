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
  

// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  });

  // SORT_BY_END_DATE
const sortByEndDate = () => ({
  type: 'SORT_BY_END_DATE'
});

  // SORT_BY_ISRESOLVED
  const sortByIsResolved = () => ({
    type: 'SORT_BY_ISRESOLVED'
  });
  
  
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  
// END_END_DATE

  const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  })

 // SET_RESOLVED_DATE

 const setResolvedDate = (isRosolvedDate) => ({
  type: 'SET_RESOLVED_DATE',
  isRosolvedDate
}) 

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
    date: undefined,
    startDate: undefined,
    isResolved: false,
    endDate: undefined,
    createdAt: undefined,
    isResolvedDate: undefined
   }

    const filtersReducer = (state = filtersReducerDefaultState, action) => {
      switch(action.type){
        case 'SET_TEXT_FILTER':
          return {
            ...state,
            text: action.text
          }
        case 'SORT_BY_DATE':
            return {
              ...state,
              sortBy: 'date'
            } 
        case 'SORT_BY_END_DATE':
            return {
              ...state,
              sortBy: 'endDate'
            }
            
        case 'SORT_BY_ISRESOLVED':
            return {
              ...state,
              sortBy: 'isResolved'
            }
        case 'SET_START_DATE':
          return {
            ...state,
            startDate: action.startDate
          } 
        case 'SET_END_DATE':
          return {
            ...state,
            endDate: action.endDate
          }         
        case 'SET_RESOLVED_DATE':
          return {
            ...state,
            isRosolvedDate: action.isRosolvedDate
          }  
        default: 
          return state;
      }
    } 


// Get visible expenses
const getVisibleFeedbacks = (feedbacks, { text, sortBy, startDate, endDate }) => {
  return feedbacks.filter((feedback) => {
    const startDateMatch = typeof startDate !== 'number' || feedback.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || feedback.createdAt <= endDate;
    const textMatch = feedback.userMessage.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort( (a, b) => {
    if( sortBy == 'date'){
      return a.createdAt < b.createdAt ? 1 : -1
    }
   if ( sortBy == 'isResolved' ){
       return a.isResolved > b.isResolved ? 1 : -1
    }
  });
};



const store = createStore(
  combineReducers({
      feebacks: feedbacksReducer,
      filters: filtersReducer
    })
  );

  store.subscribe( () => {
    const state = store.getState();
    const visibleFeedbacks = getVisibleFeedbacks(state.feebacks, state.filters);
    console.log(visibleFeedbacks);
    
    // console.log(store.getState());

  })

  const feebackData1 = store.dispatch(addFeeback({userName: 'Sudhir', userEmail: 'sudhirpie@timesgroup.com', userMessage: 'want to buy 10 pcs almirahs', isRosolved: true, createdAt: 2100}))
  
  const feebackData3 = store.dispatch(addFeeback({userName: 'Jyoti', userEmail: 'sudhirpie@timesgroup.com', userMessage: 'I want to buy 10 pcs almirahs', isRosolved: false, createdAt: 2100}))
  const feebackData4 = store.dispatch(addFeeback({userName: 'Jyoti', userEmail: 'sudhirpie@timesgroup.com', userMessage: 'I want to buy 10 pcs almirahs', isRosolved: false, createdAt: 2100}))

  
  const feebackData2 = store.dispatch(addFeeback({userName: 'Pankaj', userEmail: 'abc@timesgroup.com', userMessage: 'want to buy 10 pcs almirahs, quotation plz send to me', createdAt:210}))

  // store.dispatch(removeFeedback({id: feebackData2.feeback.id}));
  // store.dispatch(editFeedback(feebackData2.feeback.id, {isRosolved: true}));
  // store.dispatch(setTextFilter('buy'));
  // store.dispatch(sortByDate());
  // store.dispatch(sortByEndDate());
  store.dispatch(sortByIsResolved());


  // store.dispatch(setStartDate(125)); // startDate 125
  // store.dispatch(setEndDate(1250)); // endDate 1250
  // store.dispatch(setResolvedDate(1233)) // isResolvedDate 1233
  
  // console.log('====>',feebackData2.feeback.id);

  // console.log(feebackData1);
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