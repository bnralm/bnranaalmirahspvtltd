// Feedback Filter Reducers

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

export default (state = filtersReducerDefaultState, action) => {
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
