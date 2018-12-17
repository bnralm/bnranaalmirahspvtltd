import React from 'react';
import axios from 'axios';
import moment from 'moment';
import ContactThanksComponent from './../ContactThanksComponent/ContactThanksComponent';


export default class ContactFormComponent extends React.Component{ 
  state = {
    userName: '',
    userEmail: '',
    userMessage: '',
    isSubmitted: false
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
  let now = moment();
      e.preventDefault(); 
        let that = this;

        axios({
          method:"post",
          url:"https://ranasteelco.herokuapp.com/api/contactus/",
          data: {
            contactUserName: this.state.userName,
            contactUserEmail: this.state.userEmail,
            contactUserMessage: this.state.userMessage,
          }
        })
        .then(function (response) {
          console.log('form value saved on db');
          that.setState(() => ({ 'isSubmitted': true }));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    render(){
      return (
        ! this.state.isSubmitted ? (<form className="contactus-form" onSubmit={this.onSubmit}>
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
    </form>) : (<ContactThanksComponent />)
        )
      }
    }
  