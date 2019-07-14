import React from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { signupWithGoogleRegister, generateLoginPassword, closeModalPopup, loginFormOpen, loginUserSuccess } from './../../actions';
import {withRouter, Link } from 'react-router-dom';
import md5 from 'md5';

import './styles/style.scss';

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
            pwdError: undefined
        }

        this.closeModal = this.closeModal.bind(this);
        this.setPasswordLogin = this.setPasswordLogin.bind(this);
        this.onLoginHandler = this.onLoginHandler.bind(this);
        console.log( this.props);

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
        this.props.dispatch(closeModalPopup())
    }
    onLoginHandler = () => {
        this.props.dispatch(closeModalPopup())
        this.props.history.push('/login');
    }

    setPasswordLogin = (event) => {
        event.preventDefault();
        
        let {familyName : userLastName, givenName : userFirstName, email: userEmail } = this.props.profileObj;
        let {newPassword, reenterPassword} = this.state.formValues;
        let Obj;
       

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

            Obj = {
                ...this.props.profileObj,
                userFirstName,
                userLastName, 
                userEmail,
                userPassword: hashedPassword
            }

            this.setState({pwdError: undefined}) 
        }

        this.props.dispatch(signupWithGoogleRegister(Obj));
    }
  
    render() {
        
        let {email, imageUrl, name } =  this.props && this.props.profileObj;

        return (
            <Modal
                isOpen={this.props.openModal}
                onRequestClose={ () => this.closeModal() }
                style={ customStyle }
                ariaHideApp={false}
                >
                         <div className="close-signup" onClick={this.closeModal}>&times;</div>
                           { this.props.profileObj ? <div className="setPasswordForm">
                            <div className="text-center">
                                <div className="avatar"><img src={imageUrl} alt="ranasteel avatar" /></div>    
                                <h4>Welcome Mr./Miss {name}</h4>
                                
                                { this.props.success ? (<div className="login-link">
                                    <p>Congratulation ! Your account has been created.</p>
                                    <div className="padding-top-20">
                                        <button className="button button--primary" onClick={ () => {
                                            this.props.dispatch(loginUserSuccess(this.props.success))
                                            this.closeModal()
                                        } }>
                                            Let's start
                                        </button>
                                    </div>
                                </div> )
                                : (
                                <React.Fragment>   
                                     { this.props && this.props.checkUserEmailSuccess && this.props.checkUserEmailSuccess.status == 200 ? (
                                         <div className="text-center">
                                             <p className="red-text">Your email <strong className="text-red">{email}</strong> address is already registerd with us.</p>
                                             <p>Please call on <a href="tel:93004002551">93004002551</a> for login assistance</p>
                                             <div className="padding-top-20">
                                                <button className="button button--primary" onClick={ this.onLoginHandler}>
                                                    Click to login
                                                </button>
                                            </div>
                                        </div>
                                     ) : (
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
                                        {this.state.pwdError && <p 
                                        className='red-text'
                                        >
                                            {this.state.pwdError}
                                        </p>}
                                        {this.props.failure && <p>{this.props.failure}</p>}
                                        <button 
                                            className={`button button--primary` }
                                            type="submit"
                                            >
                                                Set Password
                                        </button>
                                    </form>
                                      </React.Fragment>  
                                    )}
                                    
                                    </React.Fragment>  )
                             }
                            </div>
                            </div> : <div className="text-center">Loading...</div>
                        } 
                </Modal>
            ) 
        }
    }


const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        signupWithGoogleRegister: () => signupWithGoogleRegister(),
        generateLoginPassword: () =>  generateLoginPassword(),
        closeModalPopup: () => closeModalPopup(),
        loginFormOpen: () => loginFormOpen(),
        loginUserSuccess: () => loginUserSuccess()
    })
    return {actions, dispatch}
}

const mapStateToProps = (state) => {
    console.log("setLogin", state)
    return {
        openModal: state.signupReducer.openModal,
        profileObj: state.signupReducer.profileObj,
        closeModal: state.signupReducer.closeModal,
        success: state.signupReducer.success,
        failure: state.signupReducer.failure,
        checkUserEmailFailure: state.checkUserEmail.failure,
        checkUserEmailSuccess: state.checkUserEmail.success
    }
}

Modal.setAppElement('body');

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SetLoginPasswordComponent));


