// Get visible expenses

export default (feedbacks, { text, sortBy, startDate, endDate }) => {
    return feedbacks.filter((feedback) => {
      const startDateMatch = typeof startDate !== 'number' || feedback.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || feedback.createdAt <= endDate;
      const textMatch = feedback.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'resolved') {
        return a.resolved < b.resolved ? 1 : -1;
      }
    });
  };
  