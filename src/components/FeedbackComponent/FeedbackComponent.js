import React from 'react';

const FeedbackComponent = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default FeedbackComponent;
