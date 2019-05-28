import React from 'react';
import {connect} from 'react-redux';
import {userSignup} from './../../actions/registration';
import {loginUser, loginFormOpen, loginFormClose} from './../../actions/login';
import {getFormLogin} from './../../actions/formLogin';
import axios from 'axios';
import ReactModal from 'react-modal';




const Login = ({props}) => {
    const openSignupModal = () => {
        props.dispatch(loginFormOpen({modalSignIn: false, modalSignUp: true, isOpen: true}))
    }
    
const getLogin = (e) => {
    e.preventDefault();
    axios.get(`https://ranasteelco.herokuapp.com/api/user?userEmail=${props.formLogin.userEmail}&userPassword=${props.formLogin.userPassword}`)
    .then(function (response) {
        props.dispatch(loginUser(response.data));
        props.dispatch(loginFormClose({isOpen: false}));
        })
        .catch(function (error) {
            if(error){
                alert("User Id and Password is not matched.");
            }
        })
    }
    return (
        <div className="row">
            <form className="col s12" onSubmit={getLogin}>
                <div className="row">
                    <div className="input-field col s12">
                        <input 
                            id="email_address"
                            type="email"
                            className="validate"
                            value={props.formLogin.userEmail}
                            onChange={(e) => {
                                props.dispatch(getFormLogin({userEmail: e.target.value}) )
                            }}
                            required="required"
                            />
                        <label for="email_address" className="purple-text darken-1">Email</label>
                    </div>
                </div>
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        id="password"
                        type="password"
                        className="validate"
                        value={props.formLogin.userPassword}
                        onChange={(e) => {
                            props.dispatch(getFormLogin({userPassword: e.target.value}) )
                        }}
                        required="required"
                        />
                    <label for="password" className="purple-text darken-1">Password</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <button type="submit" className="waves-effect waves-light btn">Login</button>&nbsp;  
                    <a title="signup" onClick={openSignupModal} className="waves-effect waves-light btn">Get Register Here</a>
                </div>
            </div>
        </form>
    </div>
    )
}

const SingUP = ({props, closeform}) => {
    const openSignInModal = () => {
        props.dispatch(loginFormOpen({modalSignIn: true, modalSignUp: false, isOpen: true}))
    }


    const getSignup = (e) => {
        e.preventDefault();
        axios.post('https://ranasteelco.herokuapp.com/api/user', props.registration)
        .then(function (response) {
           props.dispatch(loginUser(response.data));
           props.dispatch(loginFormClose({isOpen: false}));
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    return (<div className="row">
                <form className="col s12" onSubmit={getSignup}>
                    <div className="row">
                        <div className="input-field col s6">
                        <input 
                            id="first_name"
                            type="text"
                            className="validate"
                            value={props.registration.userFirstName}
                            onChange={(e) => {
                                props.dispatch(userSignup({userFirstName: e.target.value}) )
                            }}
                            required="required"
                        />
                        <label for="first_name" className="purple-text darken-1">First Name</label>
                        </div>
                        <div className="input-field col s6">
                        <input 
                            id="last_name"
                            type="text"
                            className="validate"
                            value={props.registration.userLastName}
                            onChange={(e) => {
                                props.dispatch(userSignup({userLastName: e.target.value}) )
                            }}
                            required="required"
                        />
                        <label for="last_name" className="purple-text darken-1">Last Name</label>
                        </div>
                    </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input 
                        id="registerEmail"
                        type="email"
                        className="validate"
                        value={props.registration.userEmail}
                        onChange={(e) => {
                            props.dispatch(userSignup({userEmail: e.target.value}) )
                        }}
                        required="required" 
                     />
                    <label for="registerEmail" className="purple-text darken-1">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input 
                        id="registerPassword"
                        type="password"
                        className="validate"
                        value={props.registration.userPassword}
                        onChange={(e) => {
                            props.dispatch(userSignup({userPassword: e.target.value}) )
                        }}
                        required="required"
                     />
                    <label for="registerPassword" className="purple-text darken-1">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 ">
                        <button type="submit" className="waves-effect waves-light btn">Get Register</button>&nbsp; 
                        <a title="Login Here" className="waves-effect waves-light btn" onClick={openSignInModal}>Login Here</a>
                    </div>
                </div>
                </form>
             </div>
            )
        };

const LoginSignupCompnent = (props) => {

    const closeModalForm = () => {
        props.dispatch(loginFormClose({isOpen: false}))
            .then( ()=> {
                document.body.style.overflow = "auto"
            })
            .catch( (err) => {
                console.log(err);
            })
    }


    return (
            <ReactModal 
            closeTimeoutMS={400}
            style={{ overlay: {}, content: {} }}
            className="modal_form"
            bodyOpenClassName="modalIsactive"
            overlayClassName="olay"
            isOpen={props && props.login && props.login.isOpen ? props.login.isOpen : false }>
                    <a onClick={closeModalForm} className="closeModal"><i class="small material-icons">close</i></a>
                { props && props.login && props.login.modalSignIn ? (<Login props={props}/>) : (<SingUP props={props} />) } 
            </ReactModal>
        )
    }
const mapStateToProps = (state) => {
    return {
        registration: state.register,
        login: state.login,
        formLogin: state.formLogin
    }
}

export default connect(mapStateToProps)(LoginSignupCompnent);