import React from 'react';
import CotactFormComponent from './../../components/CotactFormComponent/CotactFormComponent';
// import ContactThanksComponent from './../../components/ContactThanksComponent/ContactThanksComponent';
// import {connect} from 'react-redux';
// import {addFeedback} from './../../actions';

// import { link } from 'fs';

const { getRandomToken } = require('./../../commonModule/commonModule');
const contact = require('./ContactUsService/ContactUsService');
const {subtitle, title} = contact.contactData;



const { email, mobile, address, skypechat} = contact.contactData.contacts;
const socialMedia = contact.contactData.socialMedia;


const feedback = function() {
    console.log(props);

}

const ContactUsComponent = (props) => {
        return(<section className="section blue lighten-5 js-scale-sticky">
                <div className="row container">
                    <div className="header-level-2-title blue-text darken-1">{subtitle}</div>
                    <h2 className="header">{title}</h2>
                    <div className="col m6 s12">
                        {email ? (<div className="contact-row">
                            <i class="material-icons icon purple-text darken-1">email</i> 
                            {email.map( email => <a href={'mailto:'+ email} className="black-text lighten-1 contact-info">{email}</a>) } 
                        </div>) : ''}
                        
                        {mobile ? (<div className="contact-row">
                            <i className="material-icons icon purple-text darken-1">local_phone</i> 
                            {mobile.map( number => <a href={'tel:' + number } className="black-text lighten-1 contact-info">{number }</a> ) } 
                        </div>) : ''}

                        {address ?  (<div className="contact-row">
                            <i className="material-icons icon purple-text darken-1">location_on</i> <span className="black-text lighten-1">{address}</span>
                        </div>): ''}
                        
                        {skypechat ?  (<div className="contact-row">
                            <i className="material-icons icon purple-text darken-1">chat</i>  <span className="black-text lighten-1">{skypechat} <small>(skype chat)</small></span>
                        </div>) : ''}

                        { socialMedia ? ( <div className="social-media">
                            <h4>Social Media</h4>
                            <ul className="list-unstyle">

                                {socialMedia.map( social => <li><a href={social.link} target="_blank" title={social.title}><i className={'icon icon--'+(social.title).toLowerCase()}></i> {social.label}</a></li> ) }
                            </ul>
                        </div>) : ''}
                    
                    </div>
                    <div className="col m6 s12">
                        { getRandomToken() ? <ContactThanksComponent /> : <CotactFormComponent onSubmit={feedback} /> } 
                    </div>    
                </div>
            </section>
        )
    }

export default ContactUsComponent;
