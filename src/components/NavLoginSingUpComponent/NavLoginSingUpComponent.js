import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {loginFormOpen } from '../../actions';
import SignUpComponentGoogle from './../SignUpComponentGoogle';
import {Link } from 'react-router-dom';

class NavLoginSingUpComponent extends React.Component {
    constructor(props){
        super(props)
    }

    
    render(){  
        return (
            <React.Fragment>
            <li><Link to="/login">Login</Link></li>
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