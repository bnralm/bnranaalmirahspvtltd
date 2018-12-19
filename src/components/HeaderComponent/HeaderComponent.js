import React from 'react';
import {globalNav} from  './HeaderService/HeaderService';
import {Link} from 'react-router-dom';

// import AuthLoginComponent from './../AuthLoginComponent/AuthLoginComponent';

const handleClick = () => {
    let elems = document.querySelector('#slide-out');
    let instances = M.Sidenav.init(elems);
}

const HeaderComponent = () => {
     const navData = globalNav.navAnchorLists;
     setTimeout(function(){
         handleClick();
     }, 2000);
     return(
            <nav className="indigo darken-4" role="navigation">
                <div className="nav-wrapper container">
                <Link id="logo-container" to="/" className="brand-logo">Logo</Link>
                <ul className="right hide-on-med-and-down">
                    {navData.map((item) =>  <li><Link to={item.navAnchorLink} title={item.navAnchorTitle}>{item.navAnchorText}</Link></li> ) }
                </ul>


                <ul id="slide-out" className="sidenav">
                    <li><div class="user-view">
                    <div class="background">
                        <img src="/images/bgimages.jpg" alt="images" />
                    </div>
                    <a href="#user"><img class="circle indigo darken-4" src="/images/avtar.png" alt="images" /></a>
                    <a href="#name"><span class="white-text name">user name</span></a>
                    <a href="#email"><span class="white-text email">username@hotmail.com</span></a>
                    </div></li>
                    
                    <li><Link to={'/'} title="homepage">Home Page</Link></li>
                    {navData.map((item) =>  <li><Link to={item.navAnchorLink} title={item.navAnchorTitle}>{item.navAnchorText}</Link></li> ) }


                    <li>
                    <div className="divider"></div>
                    </li>
                </ul>
                <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
            </nav>
        )
    }   
      
export default HeaderComponent;    