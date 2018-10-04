import React from 'react';
import {Row, Button, Input } from 'react-materialize';
import { connect } from 'react-redux';
import {sortByDate, sortByIsResolved } from './../../actions/filters';

// const onSelectChangeHandler = (e) => {
//     switch ( e.target.value){
//         case 'createdAt':
//             return props.dispatch( sortByDate() );
//         case 'isResolved':
//             return {
//             }
//         case 'endDate': 
//             return {

//             } 
//         case 'isResolvedDate': 
//             return {
//             }
//         default : 
//             return state;    
//     }
// }
const FeedbackSortByComponent = (props) => (
        <Input s={6} m={3} type='select' defaultValue='props.filters.sortBy' onChange={
            (e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate());
                } else if (e.target.value === 'isResolved') {
                    props.dispatch(sortByIsResolved());
                }
            }
        }>
            <option value="date">Sort by date</option>
            <option value="isResolved">Sort by isResolved</option>
        </Input>
    ) 

const mapStateToProps = (state) => {
    return {
        filters:  state.filters
    };
};

export default connect(mapStateToProps)(FeedbackSortByComponent);
