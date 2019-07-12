import React from 'react';
import {logoutUser} from '../../actions/action.login';
import {connect} from 'react-redux';
const {getMoboDevice} = require('./../../commonModule/commonModule');

const NavUserComponent = (props) => {
    
    const signOut = () => {
        props.dispatch(logoutUser());
    }

    return (
        <span>
           {
            ! getMoboDevice() ? (<li>{props.props.imageUrl}</li>) : ''
            }
            <li><a onClick={signOut}>Sign Out</a></li>
        </span>
        )
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(NavUserComponent);