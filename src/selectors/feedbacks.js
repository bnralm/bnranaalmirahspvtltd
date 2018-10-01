export default (feebacks, { text, sortBy, startDate, endDate }) => {
  return feebacks.filter((feedback) => {
    const startDateMatch = typeof startDate !== 'number' || feedback.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || feedback.createdAt <= endDate;
    const textMatch = feedback.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  }); 
};
