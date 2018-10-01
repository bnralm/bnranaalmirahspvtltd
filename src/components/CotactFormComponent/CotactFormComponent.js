import React from 'react';
const {forms} = require('./../../commonModule/commonModule');
const {name} = forms.patterrns;

const { generateRandomToken } = require('./../../commonModule/commonModule');

const formData = [];
const setData = (event) => {
    formData.push(event.currentTarget.value);
}
const ContactFormComponent = (props) => { 
  const onFormSubmit = function(event){
    event.preventDefault();
    props.stateProp.setState = {
      contactFormData: formData
    }
    console.log('formData Submitted', formData)
    generateRandomToken();
  }
  
  return (
      <form className="contactus-form" onSubmit={onFormSubmit}>
        <div className="contactus-form--text">
          <span className="required-field purple-text darken-1">*Field is required</span>
          <input type="text" placeholder="Name*" required="required" id="name" onBlur={setData} />
        </div>
        <div className="contactus-form--text">
          <span className="required-field purple-text darken-1">*Field is required</span>
          <input type="email" placeholder="Email*" required="required" id="email" onBlur={setData}/>
        </div>
        
        <div className="contactus-form--text-area">
          <span className="required-field purple-text darken-1">*Field is required</span>
          <textarea required="required" placeholder="Message*" minLength="60" id="enqmsg" onBlur={setData}></textarea>
        </div>
        <div className="contactus-form--btn">
          <button type="submit" className="button button--primary">SEND</button>
        </div>
    </form> 
    )
  }

  export default ContactFormComponent;