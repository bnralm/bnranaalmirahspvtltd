import React from 'react';
import md5 from 'md5';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModalPopup, loginUser } from './../../actions';

import './styles/style.scss';

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
        this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
    }

    componentDidMount(){
        if(this.props.closeModal === true){
            this.props.dispatch(closeModalPopup());
        }
    }

    onChangeInputHandler = (event) => {
        event.preventDefault();

        let loginInfo = this.state.loginInfo;
        let name = event.target.name;
        let value = event.target.value;

        loginInfo[name] = value;

        this.setState({loginInfo})
        
    }
    loginHandler(event){
        event.preventDefault();

        let {email : userEmail, password : userPassword} = this.state.loginInfo;

        let obj = {
            userEmail,
            userPassword: md5(userPassword)
        };
        
        this.props.dispatch()
    
    }

    render(){
        return (
            <div className="container">
                <div className="contactus-form login-wrapper">
                    <form name="loginform" onSubmit={this.loginHandler}>
                        <h4 className="text-center">Login</h4>
                        <div className="contactus-form--text">
                            <span className="required-field purple-text darken-1">*Field is required</span>
                            <input
                                type="email" 
                                placeholder="Registered email"
                                name="email"
                                onChange={this.onChangeInputHandler}
                                required  />
                        </div>
                        <div className="contactus-form--text">
                            <span 
                                className="required-field purple-text darken-1">
                                    *Field is required
                            </span>
                            <input 
                                type="password"
                                placeholder="password"
                                onChange={this.onChangeInputHandler} 
                                name="password"
                                required  />
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
        login: state.login,
        closeModal: state.signupReducer.closeModal
    }
}

const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        closeModalPopup: () => closeModalPopup(),
        loginUser: () => loginUser()
    })
    return {actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginCompnent);