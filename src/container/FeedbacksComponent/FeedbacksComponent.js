import React from 'react';
import FeedbackComponent from './../FeedbackComponent/FeedbackComponent';
import selectFeedbacks from './../../selectors/feedbacks';
import { connect } from 'react-redux';
import FeedbackTextFilterComponent from './../../components/FeedbackTextFilterComponent';
import FeedbackSortByComponent from './../../components/FeedbackSortByComponent';

 

const FeedbacksComponent  = (props) => (
 <div className="container">
    <h1>Feedbacks List</h1>
      <div className="row">
         <div className="col m3 s6 right"> 
          <FeedbackTextFilterComponent />
         </div>
          <FeedbackSortByComponent />
      </div>
    <table className="responsive-table">
      <tbody>
        {props.feedbacks.map( feedback => <FeedbackComponent key={feedback.id} {...feedback} />)}
      </tbody>
    </table>  
  </div>
);



const mapStateToProps = (state) => {
  return {
      feedbacks: selectFeedbacks(state.feedbacks, state.filters)
  };
};

export default connect(mapStateToProps)(FeedbacksComponent);
