import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './AppRouters/AppRouters';

import feedbacksStrore from './store/feedbacksStore';
import {addFeedback} from './actions/feebacks';
import {setTextFilter} from './actions/filters';
import {getVisibleFeedbacks} from './selectors/feedbacks';



const store = feedbacksStrore();


store.dispatch(addFeedback({userName: 'Sudhir', userEmail: 'sudhirpie@timesgroup.com', userMessage: 'want to buy 10 pcs almirahs', isRosolved: true, createdAt: 2100}))
store.dispatch(addFeedback({userName: 'Jyoti', userEmail: 'sudhirpie@timesgroup.com', userMessage: 'I want to buy 10 pcs almirahs, plz send me quatation for the same.', isRosolved: false, createdAt: 2100}))

store.dispatch(setTextFilter('quatation'));

getVisibleFeedbacks()


console.log(
    store.getState()
)

ReactDOM.render(<AppRouters />, document.getElementById('app'))

