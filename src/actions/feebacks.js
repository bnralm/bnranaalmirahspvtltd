import uuid from 'uuid';
// ADD_FEEDBACK

export const addFeedback = (
    {
      userName = '',
      userEmail = '',
      userMessage = '',
      createdAt = 0,
      isRosolved = false,
      isRosolvedDate = undefined
    } = {}
  ) => ({
    type: 'ADD_FEEDBACK',
    feeback: {
      id: uuid(),
      userName,
      userEmail,
      userMessage,
      createdAt,
      isRosolved,
      isRosolvedDate
      }
  });
  
  
  // REMOVE_FEEDBACK
  
export const removeFeedback = ({ id } = {}) => ({
    type: 'REMOVE_FEEDBACK',
    id
  });

    // EDIT_FEEDBACK

  export const editFeedback = (id, updates) => ({
    type: 'EDIT_FEEDBACK',
    id,
    updates
  });
  