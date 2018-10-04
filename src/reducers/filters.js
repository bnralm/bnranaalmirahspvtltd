// Feedback Filter Reducers

const filtersReducerDefaultState = {
    text: '',
    isResolved: false,
    sortBy: 'date',
    date: undefined,
    startDate: undefined,
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
              sortBy: action.endDate
            }
            
        case 'SORT_BY_ISRESOLVED':
            return {
              ...state,
              sortBy: action.isResolved
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
