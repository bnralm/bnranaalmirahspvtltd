import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getProduct, getProductsDetails, getProductsDescription } from  './../../actions';
import {globalNav} from  './HeaderService/HeaderService';
import {Link} from 'react-router-dom';
import NavLoginSingUpComponent from './../../components/NavLoginSingUpComponent';
import NavUserComponent from './../../components/NavUserComponent';
import './styles/styles.scss';

const handleClick = () => {
    let elems = document.querySelector('#slide-out');
    let instances = M.Sidenav.init(elems);
}


class HeaderComponent  extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            navData : globalNav.navAnchorLists,
        }
    }

    render () {
        const navData = this.state.navData;
        const login = this.props.login;

         this.props.dispatch(getProduct());
         this.props.dispatch(getProductsDetails());
         this.props.dispatch(getProductsDescription());

        return (
            <nav className="indigo darken-4" role="navigation">
                <div className="nav-wrapper container">
                <Link id="logo-container" to="/" className="brand-logo">Logo</Link>
                <ul className="right hide-on-med-and-down">
                    {navData.map((item, ind) =>  <li key={'key-ind'+ ind}><Link to={item.navAnchorLink} title={item.navAnchorTitle}>{item.navAnchorText}</Link></li> ) }
                    {login && login.token ? (<NavUserComponent props={login} />) : (<NavLoginSingUpComponent />)}
                    
                </ul>
                <ul id="slide-out" className="sidenav">
                    {
                        login && login.userFirstName && login.userLastName && login.userEmail && (
                            <li><div className="user-view">
                                <div className="background">
                                    <img src="/images/bgimages.jpg" alt="images" />
                                </div>
                                <a href="#user"><img className="circle indigo darken-4" src="/images/avtar.png" alt="images" /></a>
                                <a href="#name"><span className="white-text name">{login.userFirstName + ' ' +login.userLastName }</span></a>
                                <a href="#email"><span className="white-text email">{login.userEmail}</span></a>
                                </div>
                            </li>
                        )

                    }
                    <li><Link to={'/'} title="homepage">Home Page</Link></li>
                    { navData &&  navData.map((item, ind) =>  <li key={'ind'+ind}><Link to={item.navAnchorLink} title={item.navAnchorTitle}>{item.navAnchorText}</Link></li> ) }
                    <li><a href="/docs/productCatelogue.pdf" target="_blank" title="product catelouge">Product Catelouge</a></li>
                    <li>GSTIN: 20AAHCB78300R2ZC</li>
                    <li>

                    <div className="divider"></div>
                    </li>
                    {login && login.token ? (<NavUserComponent props={login} />) : (<NavLoginSingUpComponent />)}
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
                
            </nav>
            
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        getProduct: () => getProduct(),
        getProductsDetails: () => getProductsDetails(),
        getProductsDescription: () => getProductsDescription(),
    })
    return {actions, dispatch };
};

const mapStateToProps = (state) => ({
    login: state.login
});
   
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);    
