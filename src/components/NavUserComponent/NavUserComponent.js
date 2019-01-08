import React from 'react';
import {logoutUser} from './../../actions/login';
import {connect} from 'react-redux';
const {getMoboDevice} = require('./../../commonModule/commonModule');

const NavUserComponent = (props) => {
    
    const signOut = () => {
        props.dispatch(logoutUser({token:'', userFirstName:'', userLastName:'', userEmail:''}))
    }

    return (
        <span>
           {
               ! getMoboDevice() ? (<li>{props.props.userLastName}</li>) : ''
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