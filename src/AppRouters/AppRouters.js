import React from "react";
import {connect} from 'react-redux';
import { getProductData } from './../commonModule/commonModule'
import { addProduct } from  '../actions/product';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from './../container/HomeComponent';
import BacktoTopComponent from './../container/BacktoTopComponent';
import ProductDetailComponent from './../container/ProductDetailComponent';
import ContactUsComponent from './../container/ContactUsComponent';
import PageNotFoundComponent from './../container/PageNotFoundComponent';
import HeaderComponent from './../container/HeaderComponent';
import FooterComponent from './../container/FooterComponent';
import ProductListComponent from './../container/ProductListComponent';
import FeedbacksComponent from './../container/FeedbacksComponent';
import AvailableColors from './../container/AvailableColors';
import LoginSignupCompnent from './../container/LoginSignupCompnent';




const headerTitle = "BN & Rana Almirahs (P) Ltd.";

class AppRouters extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
      return  (
            <Router>
                <div>
                {/* <HeaderComponent /> */}
                    <Switch>
                        <Route exact={true} path="/" component={HomeComponent} setRouteTitle={`${headerTitle} Home Page`} />
                        {/* <Route exact={true}  path="/plp" component={ProductListComponent}  setRouteTitle={`${headerTitle} Product Listing Page`}/>
                        <Route exact={true}  path="/pdp/:productId" component={ProductDetailComponent} setRouteTitle={`${headerTitle} Product Detail Page`}/>
                        <Route exact={true}  path="/contact-us" component={ContactUsComponent}  setRouteTitle={`${headerTitle} Contact Us Page`}/>
                        <Route exact={true}  path="/feedbacks" component={FeedbacksComponent} setRouteTitle={`${headerTitle} Feedbacks Page`}/>
                        <Route exact={true}  path="/colors" component={AvailableColors} setRouteTitle={`${headerTitle} Color Page`}/>
                        <Route  component={PageNotFoundComponent} setRouteTitle={`${headerTitle}: 404`} /> */}
                    </Switch>
                {/* <BacktoTopComponent /> */}
                {/* <LoginSignupCompnent /> */}
                {/* <FooterComponent /> */}
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
