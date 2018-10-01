const feedbacksReducerDefaultState = [];

export default (state = feedbacksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_FEEDBACK':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_FEEDBACK':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_FEEDBACK':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};
