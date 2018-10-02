
// SET_TEXT_FILTER

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  });

  // SORT_BY_END_DATE
export const sortByEndDate = () => ({
  type: 'SORT_BY_END_DATE'
});

  // SORT_BY_ISRESOLVED
  export const sortByIsResolved = () => ({
    type: 'SORT_BY_ISRESOLVED'
  });
  
  
// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  
// END_END_DATE

  export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  })

 // SET_RESOLVED_DATE

 export const setResolvedDate = (isRosolvedDate) => ({
  type: 'SET_RESOLVED_DATE',
  isRosolvedDate
}) 