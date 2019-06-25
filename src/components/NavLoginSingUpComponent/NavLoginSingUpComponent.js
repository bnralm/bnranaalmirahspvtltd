import React from 'react';
import {connect} from 'react-redux';
import GoogleLogin from 'react-google-login';
import {loginFormOpen} from '../../actions/action.login';


const responseGoogle = (response) => {
    console.log(response);
  }

const NavLoginSingUpComponent = (props) => {
    const modalSignIn = () => {
        props.dispatch(loginFormOpen({modalSignIn: true, modalSignUp: false, isOpen: true}))
    }
    return (
        <React.Fragment>
        <li><a title="login" onClick={modalSignIn}>Already Registerd</a></li>

        <li><GoogleLogin
                clientId="333806451020-v770ns1pt4ve28id4fn3kfccuaucb1bf.apps.googleusercontent.com"
                buttonText="Signup"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            /> 
        </li>     
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(NavLoginSingUpComponent);