import React from "react";
import {connect} from 'react-redux';
import { getProductData } from './../commonModule/commonModule'
import { addProduct } from  '../actions/product';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from './../components/HomeComponent/HomeComponent';
import BacktoTopComponent from './../components/BacktoTopComponent/BacktoTopComponent';
import ProductDetailComponent from './../components/ProductDetailComponent/ProductDetailComponent';
import ContactUsComponent from './../components/ContactUsComponent/ContactUsComponent';
import PageNotFoundComponent from './../components/PageNotFoundComponent/PageNotFoundComponent';
import HeaderComponent from './../components/HeaderComponent/HeaderComponent';
import FooterComponent from './../components/FooterComponent/FooterComponent';
import ProductListComponent from './../components/ProductListComponent/ProductListComponent';
import FeedbacksComponent from './../components/FeedbacksComponent/FeedbacksComponent';
import AvailableColors from './../components/AvailableColors/AvailableColors';
import LoginSignupCompnent from './../components/LoginSignupCompnent/LoginSignupCompnent';




const headerTitle = "BN & Rana Almirahs (P) Ltd.";




class AppRouters extends React.Component {
    constructor(props){
        super(props);
        getProductData();
    }

    componentDidMount(){
        let json =  localStorage && localStorage.getItem && JSON.parse(localStorage.getItem('allproduct'));
        json.map( product => props.dispatch(addProduct(product)) );
    }
      render(){
      return  (
            <Router>
                <div>
                <HeaderComponent />
                    <Switch>
                        <Route exact={true} path="/" component={HomeComponent} setRouteTitle={`${headerTitle} Home Page`} />
                        <Route exact={true}  path="/plp" component={ProductListComponent}  setRouteTitle={`${headerTitle} Product Listing Page`}/>
                        <Route exact={true}  path="/pdp/:productId" component={ProductDetailComponent} setRouteTitle={`${headerTitle} Product Detail Page`}/>
                        <Route exact={true}  path="/contact-us" component={ContactUsComponent}  setRouteTitle={`${headerTitle} Contact Us Page`}/>
                        <Route exact={true}  path="/feedbacks" component={FeedbacksComponent} setRouteTitle={`${headerTitle} Feedbacks Page`}/>
                        <Route exact={true}  path="/colors" component={AvailableColors} setRouteTitle={`${headerTitle} Color Page`}/>
                        <Route  component={PageNotFoundComponent} setRouteTitle={`${headerTitle}: 404`} />
                    </Switch>
                <BacktoTopComponent />
                <LoginSignupCompnent />
                <FooterComponent />
                </div>
            </Router>
        ) 
    }
} 

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
} 

export default connect(mapStateToProps)(AppRouters);
