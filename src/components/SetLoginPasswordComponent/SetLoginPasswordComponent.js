import React from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { signupWithGoogle, generateLoginPassword } from './../../actions/action.signupGoogle';

require('./styles/style.scss');

const SetLoginPasswordComponent = (props) => {
    const customStyle = {
        content: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)'
        }
    }

    const closeModal = () => {
        props.dispatch(closeModal())
    }
  

    let {email, familyName, givenName, imageUrl, name } =  props && props.profileObj;
    
    return (
        <Modal
            isOpen={props.openModal}
            onRequestClose={() => closeModal() }
            style={ customStyle }
            >
                <div className="close-signup" onClick={closeModal}>&times;</div>
                       { props.profileObj ? <div className="setPasswordForm">
                        <div className="text-center">
                            <div className="avatar"><img src={imageUrl} alt="ranasteel avatar" /></div>    
                            <h4>Welcome Mr./Miss {name}</h4>
                            <p>Please set the password for {email}</p>
                            <form className="from contactus-form" name="signupForm">
                                <div className="contactus-form--text">
                                    <span className="required-field purple-text darken-1">*Field is required</span>
                                    <input type="password" required="required"  placeholder="New password" />
                                </div>
                                <div className="contactus-form--text">
                                    <span className="required-field purple-text darken-1">*Field is required</span>
                                    <input type="password" required="required"  placeholder="Re-enter Password" />
                                </div>
                                <button 
                                    className={`button button---primary` }
                                    type="submit">
                                        Set Password
                                </button>
                            </form>
                        </div>
                        </div> : <div className="text-center">Loading...</div>
                } 
        </Modal>
        ) 
    }


const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        signupWithGoogle: () => signupWithGoogle(),
        generateLoginPassword: () =>  generateLoginPassword()
    })
    return {actions, dispatch}
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        openModal: state.signupReducer.openModal,
        profileObj: state.signupReducer.profileObj,
        closeModal: state.signupReducer.closeModal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetLoginPasswordComponent);


