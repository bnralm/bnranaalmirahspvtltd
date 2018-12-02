import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import moment from 'moment';
import { addFeedback } from './../../actions/feedbacks'; 




const { generateRandomToken } = require('./../../commonModule/commonModule');


export default class ContactFormComponent extends React.Component{ 
  state = {
    userName: '',
    userEmail: '',
    userMessage: '',
  };
 
  
  onUserNameChange = (e) => {
    const userName = e.target.value;
    this.setState(() => ({ userName }));
  };
  onUserEmailChange = (e) => {
    const userEmail = e.target.value;
      this.setState(() => ({ userEmail }));
    }
  onFeedbackChange = (e) => {
      const userMessage = e.target.value;
      this.setState(() => ({ userMessage }));
    };
    onSubmit = (e) => {
        
       

    e.preventDefault();
    console.log('Hello world', this.props);

    let now = moment();
    this.props.onSubmit({
      userName: this.state.userName,
      userEmail: this.state.userEmail,
      userMessage: this.state.userMessage,
      createdAt: now.format("DD-MM-YYYY, h:mm:ss a ZZ"),
      startDate: now.format("DD-MM-YYYY, h:mm:ss a ZZ"),
      }
    )

  // console.log(this.state);
    // props.dispatch(addFeedback(this.state));
    // props.history.push('/');

    console.log
  }
    
    // generateRandomToken();

    render(){
      
      return (
          <form className="contactus-form" onSubmit={this.onSubmit}>
            <div className="contactus-form--text">
              <span className="required-field purple-text darken-1">*Field is required</span>
              <input type="text" placeholder="Name*" required="required" id="name" value={this.state.userName} onChange={this.onUserNameChange} />
            </div>
            <div className="contactus-form--text">
              <span className="required-field purple-text darken-1">*Field is required</span>
              <input type="email" placeholder="Email*" required="required" id="email" value={this.state.userEmail} onChange={this.onUserEmailChange}/>
            </div>
            
            <div className="contactus-form--text-area">
              <span className="required-field purple-text darken-1">*Field is required</span>
              <textarea required="required" placeholder="Message*" minLength="60" id="enqmsg" value={this.state.userMessage} onChange={this.onFeedbackChange}></textarea>
            </div>
            <div className="contactus-form--btn">
              <button type="submit" className="button button--primary" >SEND</button>
            </div>
        </form> 
        )
      }
    }
  