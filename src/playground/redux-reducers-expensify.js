import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
  ) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  });


  // REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });

  

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
        return [
        ...state,
        action.expense
        ];
        
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

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

console.log(store.getState());
