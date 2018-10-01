import React from 'react';
import {globalNav} from  './HeaderService/HeaderService';
import {Link} from 'react-router-dom';

import AuthLoginComponent from './../AuthLoginComponent/AuthLoginComponent';

const HeaderComponent = () => {
     const navData = globalNav.navAnchorLists;
     return(
            <nav className="indigo darken-4" role="navigation">
                <div className="nav-wrapper container">
                <Link id="logo-container" to="/" className="brand-logo">Logo</Link>
                <ul className="right hide-on-med-and-down">
                    <AuthLoginComponent />
                    {navData.map((item) =>  <li><Link to={item.navAnchorLink} title={item.navAnchorTitle} target="_blank">{item.navAnchorText}</Link></li> ) }
                </ul>

                <ul id="slide-out" className="sidenav">
                    <AuthLoginComponent />
                    {navData.map((item) =>  <li><Link to={item.navAnchorLink} title={item.navAnchorTitle} target="_blank">{item.navAnchorText}</Link></li> ) }

                    <li>
                    <div className="divider"></div>
                    </li>
                </ul>
                <Link to="#" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </Link>
                </div>
            </nav>
        )
    }   

export default HeaderComponent;    