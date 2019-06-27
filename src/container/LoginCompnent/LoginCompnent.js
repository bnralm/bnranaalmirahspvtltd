import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles/style.scss';

// import {userSignup, getFormLogin, loginUser, loginFormOpen, loginFormClose} from './../../actions';


class LoginCompnent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loginInfo: {
                email: undefined,
                password: undefined
            },
            loginError: undefined
        }

        this.loginHandler = this.loginHandler.bind(this);
    }

    loginHandler(event){
        event.preventDefault();

        console.log("working");
    }

    render(){
        return (
            <div className="container">
                <div className="contactus-form login-wrapper">
                    <form name="loginform" onSubmit={this.loginHandler}>
                        <h4 className="text-center">Login</h4>
                        <div className="contactus-form--text">
                            <span className="required-field purple-text darken-1">*Field is required</span>
                            <input type="email" value={this.state.loginInfo.email} placeholder="Registered email" required  />
                        </div>
                        <div className="contactus-form--text">
                            <span className="required-field purple-text darken-1">*Field is required</span>
                            <input type="password" value={this.state.loginInfo.password} placeholder="password" required />
                        </div>
                        <div className="contactus-form--btn">
                            <button type="submit" className="button button--primary">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    } 
}


const mapStateToProps = (state) => {
    return {
        registration: state.register,
        login: state.login,
        formLogin: state.formLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        // getProduct: () => getProduct(),
    })
    return {actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginCompnent);