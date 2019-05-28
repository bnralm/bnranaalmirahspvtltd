import * as actionType from './../constants/constant.action';

import uuid from 'uuid';
// ADD_FEEDBACK
import moment from 'moment';
const now  = moment();

export const addFeedback = (
    {
      userName = '',
      userEmail = '',
      userMessage = '',
      createdAt = undefined,
      startDate = undefined,
      isRosolved = false,
      isRosolvedDate = undefined
    } = {}
  ) => ({
    type: actionType.ADD_FEEDBACK,
    feedback: {
      id: uuid(),
      userName,
      userEmail,
      userMessage,
      createdAt,
      startDate,
      isRosolved,
      isRosolvedDate
      }
  });
  
  
  // REMOVE_FEEDBACK
  
export const removeFeedback = ({ id } = {}) => ({
    type: actionType.REMOVE_FEEDBACK,
    id
  });

    // EDIT_FEEDBACK

  export const editFeedback = ({id}, updates) => ({
    type: actionType.EDIT_FEEDBACK,
    id,
    updates
  });
  