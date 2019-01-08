import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './AppRouters/AppRouters';
import axios from 'axios';
import { Provider } from 'react-redux';
import configProductStore from './store/allstore';
import { addProduct } from  './actions/product';

const _ = require('lodash');

 const store = feedbacksStore();

// store.dispatch(addFeedback({userName: 'Sudhir', userEmail: 'sudhirpie@timesgroup.com', userMessage: 'mybig want to buy 10 pcs almirahs'}))
// store.dispatch(addFeedback({userName: 'Jyoti', userEmail: 'sudhirpie@timesgroup.com', userMessage: 'I want to buy 10 pcs almirahs, plz send me quatation for the same.', isRosolved: false, isRosolved:true}))
// store.dispatch(addFeedback({userName: 'Sunil', userEmail: 'sudhnil@timesgroup.com', userMessage: 'I want to buy 10 pcs almirahs, plz send me quatation for the same.', isRosolved: false}))
// store.dispatch(addFeedback({userName: 'Mohit', userEmail: 'sudhirpieadsfdsf@timesgroup.com', userMessage: 'I want to buy 10 pcs almirahs, plz send me quatation for the same.', isRosolved: false}))
// store.dispatch(setTextFilter('quatation'));


// setTimeout(
//     ()=> {
//         store.dispatch(setTextFilter('buy'));      
//     },
//     4000
// )
// store.dispatch(sortByIsResolved());

const state = store.getState();
// console.log('state==>', state);
// const visibleFeedbacks = getVisibleFeedbacks(state.feedbacks, state.filters);
// console.log('visibleFeedbacks==>', visibleFeedbacks);

// console.log(state);

const jsx = (
    <Provider store={store}> 
       <AppRouters />
    </Provider>
)

ReactDOM.render(storeJxs, document.getElementById('app'))