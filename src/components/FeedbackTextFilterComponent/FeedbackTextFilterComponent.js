import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from './../../actions/filters';

const filterText = (e) => {
    // props.dispatch(setTextFilter(e.target.value));
    console.log(e.target.value)
}

const FeedbackTextFilterComponent = (props) => (
    <div>
        <input type="text" defaultValue={props.filters.text} placeholder="Search by keyword" onChange={ 
            (e) => {
                props.dispatch(setTextFilter(e.target.value) )
            }
        }/>
     </div>   
) 


const mapStateToProps = (state) => {
    return {
        filters:  state.filters
    };
  };
  

export default connect(mapStateToProps)(FeedbackTextFilterComponent);
