import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { GoogleLogin } from 'react-google-login'
import { signupWithGoogle, closeRampupGallary } from  './../../actions';

import API from './../../config/keys';



const SignUpComponentGoogle = (props) => {
 
  const isRamupOpenModel = (obj) => {
    props.dispatch(closeRampupGallary());
    props.dispatch(signupWithGoogle(obj));
  } 

  const responseGoogleSuccess = (response) => {
    props.isRamupOpen === true ? isRamupOpenModel(response.profileObj) : props.dispatch(signupWithGoogle(response.profileObj))
  }

  const responseGoogleFailure = (response) => {
      console.log("Google login fail ", response);
  }

  return (<GoogleLogin
        clientId={API.GOOGLE_CLIENT_ID}
        render={renderProps => (
        <a onClick={renderProps.onClick} disabled={renderProps.disabled}>Signup</a>
        )}
        buttonText="Login"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={'single_host_origin'}
    />)
  } 


const mapDispatchToProps = (dispatch) => {
  let actions = bindActionCreators({
    signupWithGoogle: () =>  signupWithGoogle(),
    closeRampupGallary: () => closeRampupGallary()
  })

  return {actions, dispatch}
}

const mapStateToProps = (state) => ({
  isRamupOpen: state.rampupReducer.isRamupOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponentGoogle);