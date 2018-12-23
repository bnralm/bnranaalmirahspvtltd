import React from 'react';
import {connect} from 'react-redux';
import {userSignup} from './../../actions/registration';
import {loginUser} from './../../actions/login';
import {getFormLogin} from './../../actions/formLogin';
import axios from 'axios';
import {Link } from 'react-router-dom';


const Login = ({props}) => {
    const getLogin = (e) => {
        e.preventDefault();
        axios.get(`https://ranasteelco.herokuapp.com/api/user?userEmail=${props.formLogin.userEmail}&userPassword=${props.formLogin.userPassword}`)
        .then(function (response) {
            props.dispatch(loginUser(response.data));
            props.history.push('/');
            })
            .catch(function (error) {
              console.log(error);
            })
        }



        return (
            <div className="row">
                <form className="col s12" onSubmit={getLogin}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                placeholder="Email"
                                id="email_address"
                                type="email"
                                className="validate"
                                value={props.formLogin.userEmail}
                                onChange={(e) => {
                                    props.dispatch(getFormLogin({userEmail: e.target.value}) )
                                }}
                                required="required"
                                />
                            <label for="email_address">Email</label>
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
                        <label for="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button type="submit" className="waves-effect waves-light btn btn-large">Login</button> <Link to="/signup" title="signup" className="waves-effect waves-light btn btn-large">Get Register Here</Link>
                    </div>
                </div>
            </form>
        </div>
        )
    }

const SingUP = ({props}) => {
    const getSignup = (e) => {
        e.preventDefault();
        axios.post('https://ranasteelco.herokuapp.com/api/user', props.registration)
        .then(function (response) {
           props.dispatch(loginUser(response.data));
           props.history.push('/');
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
                            placeholder="First Name"
                            id="first_name"
                            type="text"
                            className="validate"
                            value={props.registration.userFirstName}
                            onChange={(e) => {
                                props.dispatch(userSignup({userFirstName: e.target.value}) )
                            }}
                            required="required"
                        />
                        <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                        <input 
                            id="last_name"
                            placeholder="Last Name"
                            type="text"
                            className="validate"
                            value={props.registration.userLastName}
                            onChange={(e) => {
                                props.dispatch(userSignup({userLastName: e.target.value}) )
                            }}
                            required="required"
                        />
                        <label for="last_name">Last Name</label>
                        </div>
                    </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input 
                        id="email"
                        type="email"
                        placeholder="yourname@gmail.com"
                        className="validate"
                        value={props.registration.userEmail}
                        onChange={(e) => {
                            props.dispatch(userSignup({userEmail: e.target.value}) )
                        }}
                        required="required" 
                     />
                    <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input 
                        id="password"
                        type="password"
                        className="validate"
                        value={props.registration.userPassword}
                        onChange={(e) => {
                            props.dispatch(userSignup({userPassword: e.target.value}) )
                        }}
                        required="required"
                     />
                    <label for="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 ">
                        <button type="submit" className="waves-effect waves-light btn btn-large">Get Register</button><br/>
                        <Link to="/login" title="Login Here" className="waves-effect waves-light btn btn-large">Login Here</Link>
                    </div>
                </div>
                </form>
             </div>
            )
        };

const LoginSignupCompnent = (props) => {
   

    return (
        <section className="section">
                <div className="container ">
                <div className="row">
                    <div className="col m6 offset-m3 z-depth-5 padding-40">
                      {props.match.url === "/login" ? (<Login props={props} />) : (<SingUP props={props}/>) }  
                    </div>
                </div>
            </div>
    </section>
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