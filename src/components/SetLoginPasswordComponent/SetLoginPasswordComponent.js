import React from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { signupWithGoogle, generateLoginPassword, closeModal, loginFormOpen } from './../../actions';
import md5 from 'md5';

require('./styles/style.scss');

const customStyle = {
    content: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
}

class SetLoginPasswordComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formValues: {
                newPassword: undefined,
                reenterPassword: undefined,
            },
            pwd: undefined,
            pwdError: undefined
        }

        this.closeModal = this.closeModal.bind(this);
        this.setPasswordLogin = this.setPasswordLogin.bind(this);
    }

    onChangeInputHandler = (event) => {
        event.preventDefault();

        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({formValues})
        
    }
    
    closeModal = () => {
        this.props.dispatch(closeModal())
    }
    
    setPasswordLogin = (event) => {
        event.preventDefault();
        
        let {familyName : lastName, givenName : firstName, email: userEmail } = this.props.profileObj;
        let {newPassword, reenterPassword} = this.state.formValues;

        let Obj = {
            ...this.props.profileObj,
            firstName,
            lastName, 
            userEmail,
            userPassword: this.state.pwd
        }

        if(newPassword.length < 4){
            this.setState({pwdError: 'Password is less than 4 character, cann\'t accepted'}) 
            return false;
        }
        if(newPassword !== reenterPassword ){
            this.setState({pwdError: 'Re-entered Password not matched with previous password'}) 
            return false;
        }
        else{
            let hashedPassword = md5(newPassword);
            this.setState({pwdError: undefined, pwd: hashedPassword}) 
        }

        console.log(Obj);


        // this.props.dispatch(loginFormOpen({modalSignIn: true, modalSignUp: false, isOpen: true}))
    }
  
    render() {
        
        let {email, imageUrl, name } =  this.props && this.props.profileObj;

        return (
            <Modal
                isOpen={this.props.openModal}
                onRequestClose={ this.closeModal }
                style={ customStyle }
                ariaHideApp={false}
                >
                    <div className="close-signup" onClick={closeModal}>&times;</div>
                           { this.props.profileObj ? <div className="setPasswordForm">
                            <div className="text-center">
                                <div className="avatar"><img src={imageUrl} alt="ranasteel avatar" /></div>    
                                <h4>Welcome Mr./Miss {name}</h4>
                                
                                { this.state.pwd ? (
                                <div className="login-link">
                                    <p>Your password has been set.</p>
                                    <div className="padding-top-20">
                                        <button className="button button--primary" 
                                            onClick={this.loginPopup}>
                                                Click to login
                                        </button>
                                    </div>
                                </div> )
                                : (
                                    <React.Fragment>
                                <p>Please set the password for {email}</p>
                                <form className="from contactus-form" name="signupForm" onSubmit={ this.setPasswordLogin }>
                                    <div className="contactus-form--text">
                                        <span className="required-field purple-text darken-1">*Field is required</span>
                                        <input type="password" required="required" name="newPassword" 
                                            onChange={ () => this.onChangeInputHandler(event) } placeholder="New password" />
                                    </div>
                                    <div className="contactus-form--text">
                                        <span className="required-field purple-text darken-1">*Field is required</span>
                                        <input type="password" required="required" name="reenterPassword" 
                                         onChange={  () => this.onChangeInputHandler(event) } placeholder="Re-enter Password" />
                                    </div>
                                    {this.state.pwdError && <p>{this.state.pwdError}</p>}
                                    <button 
                                        className={`button button---primary` }
                                        type="submit"
                                        >
                                            Set Password
                                    </button>
                                </form>
                                </React.Fragment>
                                ) }
                            </div>
                            </div> : <div className="text-center">Loading...</div>
                        } 
                </Modal>
            ) 
        }
    }


const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        signupWithGoogle: () => signupWithGoogle(),
        generateLoginPassword: () =>  generateLoginPassword(),
        closeModal: () => closeModal(),
        loginFormOpen: () => loginFormOpen()
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

Modal.setAppElement('body');

export default connect(mapStateToProps, mapDispatchToProps)(SetLoginPasswordComponent);


