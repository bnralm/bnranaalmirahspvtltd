import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    default:
    return state
  }
}


const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){
    default:
      return state
  }
}

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


const store = createStore( 
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
)

console.log(store.getState());