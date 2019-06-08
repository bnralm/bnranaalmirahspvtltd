import * as actionType from '../constants';
// SET_TEXT_FILTER

export const setTextFilter = (text = '') => ({
    type: actionType.SET_TEXT_FILTER,
    text
  });

// SORT_BY_DATE
export const sortByDate = () => ({
    type: actionType.SORT_BY_DATE
  });

  // SORT_BY_END_DATE
export const sortByEndDate = (endDate) => ({
  type: actionType.SORT_BY_END_DATE,
  endDate
});

  // SORT_BY_ISRESOLVED
  export const sortByIsResolved = (isResolved) => ({
    type: actionType.SORT_BY_ISRESOLVED,
    isResolved
  });
  
  
// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: actionType.SET_START_DATE,
    startDate
  });
  
  
// END_END_DATE

  export const setEndDate = (endDate) => ({
    type: actionType.SET_END_DATE,
    endDate
  })

 // SET_RESOLVED_DATE

 export const setResolvedDate = (isRosolvedDate) => ({
  type: actionType.SET_RESOLVED_DATE,
  isRosolvedDate
}) 