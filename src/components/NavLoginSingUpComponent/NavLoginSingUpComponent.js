import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {loginFormOpen, signupWithGoogle} from '../../actions';
import SignUpComponentGoogle from './../SignUpComponentGoogle';

class NavLoginSingUpComponent extends React.Component {
    constructor(props){
        super(props)
        this.modalSignIn = this.modalSignIn.bind(this);
    }

    modalSignIn = () => {
        this.props.dispatch(loginFormOpen({modalSignIn: true, modalSignUp: false, isOpen: true}))
    }

    render(){  
        return (
            <React.Fragment>
            <li><a title="login" onClick={this.modalSignIn}>Login</a></li>
            <li>
                <SignUpComponentGoogle />
            </li>     
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        loginFormOpen: () =>  loginFormOpen()
    })

    return {actions, dispatch}
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLoginSingUpComponent);