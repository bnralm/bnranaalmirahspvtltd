import React from "react";
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

export class AppRouters extends React.Component {
    render(){
      return  (
            <Router>
                <React.Fragment>
                 <HeaderComponent />
                     <Switch>
                        <Route exact path="/" component={HomeComponent} setRouteTitle={`${headerTitle} Home Page`} />
                         <Route exact path="/plp" component={ProductListComponent}  setRouteTitle={`${headerTitle} Product Listing Page`}/>
                        <Route exact path="/pdp/:productId" component={ProductDetailComponent} setRouteTitle={`${headerTitle} Product Detail Page`}/>
                        <Route exact path="/contact-us" component={ContactUsComponent}  setRouteTitle={`${headerTitle} Contact Us Page`}/>
                        <Route exact path="/feedbacks" component={FeedbacksComponent} setRouteTitle={`${headerTitle} Feedbacks Page`}/>
                        <Route exact path="/colors" component={AvailableColors} setRouteTitle={`${headerTitle} Color Page`}/>
                        <Route component={PageNotFoundComponent} setRouteTitle={`${headerTitle}: 404`} /> 
                    </Switch> 
                 <BacktoTopComponent />
                 <LoginSignupCompnent />
                 <FooterComponent /> 
                </React.Fragment>
            </Router>
        ) 
    }
} 

export default AppRouters;
