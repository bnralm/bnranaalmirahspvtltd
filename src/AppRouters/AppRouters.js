import React from "react";
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


const headerTitle = "BN & Rana Almirahs (P) Ltd.";


const AppRouters = () => (
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
        <FooterComponent />
        </div>
    </Router>
)

export default AppRouters;
