// Get visible expenses
export default (feedbacks, { text, sortBy, startDate, endDate }) => {
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
