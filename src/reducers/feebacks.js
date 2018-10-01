// Feedbacks Reducer

const feedbackReducerDefaultState = [];

export default (state = feedbackReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_FEEDBACK':
      return [
        ...state,
        action.feedback
      ];
    case 'REMOVE_FEEDBACK':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_FEEDBACK':
      return state.map((feedback) => {
        if (feedback.id === action.id) {
          return {
            ...feedback,
            ...action.updates
          };
        } else {
          return feedback;
        };
      });
    default:
      return state;
  }
};
