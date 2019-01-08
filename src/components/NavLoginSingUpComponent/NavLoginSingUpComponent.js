import React from 'react';
import {connect} from 'react-redux';
import {loginFormOpen} from './../../actions/login';



const NavLoginSingUpComponent = (props) => {
    const modalSignIn = () => {
        props.dispatch(loginFormOpen({modalSignIn: true, modalSignUp: false, isOpen: true}))
    }
    return (
        <li><a title="login" onClick={modalSignIn}>Login</a></li>
    )
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(NavLoginSingUpComponent);