import React from 'react';
import {Link} from 'react-router-dom';

const {FooterService} = require('./FooterService/FooterService');


const FooterComponent = function(){
const {FooterService} = require('./FooterService/FooterService');

const {companyBio, connect} = FooterService;
const {copyTextMsg, copyTextYear, copyTextOwner, copyRedirectURL} = FooterService.copyText;

     return (
        <footer class="page-footer indigo darken-2 js-scale-sticky">
        <div class="container">
          <div class="row">
            <div class="col l9 s12">
              <h5 class="white-text">Company Bio</h5>
              <p class="white-text text-lighten-4">{companyBio}</p>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Connect</h5>
              <ul>
                {connect.length > 0 ? connect.map( ele => <li title={ele.connectAnchorTitle}><Link className='white-text' to={ele.connectAnchorLink}>{ele.connectAnchorText}</Link></li>) : ''} 
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright indigo darken-4">
          <div class="container center">
             {copyTextMsg} {copyTextYear + ' ' } by 
            <a className="orange-text text-lighten-3" href={copyRedirectURL}>
               {' '+copyTextOwner}</a>
          </div>
        </div>
      </footer>
        )
    }   

export default FooterComponent;