import React from 'react';
import {editFeedback}  from './../../actions/feedbacks';
import {connect} from 'react-redux';

const FeedbackComponent = ({dispatch, id, userName, userEmail, userMessage, createdAt, isRosolved, isRosolvedDate }) => (
  <tr data-id={id}>
    
    <td className={isRosolved ? 'strike':'' + 'min-md-width' }>{ userName ? userName : '-'}</td>
    <td className={isRosolved ? 'strike':'' + 'min-md-width'}>{ userEmail ?  userEmail : '-'}</td>
    <td className={isRosolved ? 'strike':'' + 'min-md-width'}>{ userMessage ? userMessage : '-'}</td>
    <td className="min-md-width">{ createdAt ? createdAt : '-'}</td>
    <td className="min-md-width">{isRosolvedDate ? isRosolvedDate : '-'}</td>
    <td className="min-md-width">{!!!isRosolved ? <button className="button button-default" onClick={
      () => {
       dispatch(editFeedback({id}, {isRosolved: true} ) ) 
      } 
    }>Done</button> : <button className="button" disabled>Completed</button>}</td>
  </tr> 
);



export default connect()(FeedbackComponent);
