import React from 'react';
import {Link} from 'react-router-dom';

const {FooterService} = require('./FooterService/FooterService');


const FooterComponent = function(){
const {FooterService} = require('./FooterService/FooterService');

const {companyBio, connect} = FooterService;
const {copyTextMsg, copyTextYear, copyTextOwner, copyRedirectURL} = FooterService.copyText;

     return (
        <footer className="page-footer indigo darken-2 js-scale-sticky">
        <div className="container">
          <div className="row">
            <div className="col l9 s12">
              <h5 className="white-text">Company Bio</h5>
              <p className="white-text text-lighten-4">{companyBio}</p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                {connect.length > 0 ? connect.map( (ele, ind) => <li key={'foot'+ind} title={ele.connectAnchorTitle}><Link className='white-text' to={ele.connectAnchorLink}>{ele.connectAnchorText}</Link></li>) : ''} 
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright indigo darken-4">
          <div className="container center">
             {copyTextMsg} {copyTextYear + ' ' } by 
            <a className="orange-text text-lighten-3" href={copyRedirectURL}>
               {' '+copyTextOwner}</a>
          </div>
        </div>
      </footer>
        )
    }   

export default FooterComponent;