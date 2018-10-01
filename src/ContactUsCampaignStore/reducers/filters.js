// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    isResolved: false,
    startDate: undefined,
  };
  
  export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        };
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        };
      case 'SET_RESOLVED':
        return {
          ...state,
          isResolved: action.isResolved
        };
      default:
        return state;
    }
  };
  