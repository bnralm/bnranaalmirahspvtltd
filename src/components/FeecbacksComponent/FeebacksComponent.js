import React from 'react';
import { connect } from 'react-redux';
import FeedbackComponent from '../FeedbackComponent/FeedbackComponent';
import selectExpenses from '../selectors/expenses';

const FeebacksComponent = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((feedback) => {
      return <FeedbackComponent key={feedback.id} {...feedback} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    feedbacks: selectExpenses(state.feedback)
  };
};

export default connect(mapStateToProps)(FeebacksComponent);
