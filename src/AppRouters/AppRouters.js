import React from "react";
import { BrowserRouter as Router, Route, Switch, browserHistory } from "react-router-dom";


import HomeComponent from './../components/HomeComponent/HomeComponent';
import BacktoTopComponent from './../components/BacktoTopComponent/BacktoTopComponent';
import ProductDetailComponent from './../components/ProductDetailComponent/ProductDetailComponent';
import ContactUsComponent from './../components/ContactUsComponent/ContactUsComponent';
import PageNotFoundComponent from './../components/PageNotFoundComponent/PageNotFoundComponent';
import HeaderComponent from './../components/HeaderComponent/HeaderComponent';
import FooterComponent from './../components/FooterComponent/FooterComponent';
import ProductListComponent from './../components/ProductListComponent/ProductListComponent';
import FeedbacksComponent from './../components/FeedbacksComponent/FeedbacksComponent';



const AppRouters = () => (
    <Router history={browserHistory}>
        <div>
        <HeaderComponent />
            <Switch>
                <Route exact={true} path="/" component={HomeComponent} />
                <Route exact={true}  path="/plp" component={ProductListComponent} />
                <Route exact={true}  path="/pdp/:productId" component={ProductDetailComponent} />
                <Route exact={true}  path="/contact-us" component={ContactUsComponent} />
                <Route exact={true}  path="/feedbacks" component={FeedbacksComponent} />
                <Route  component={PageNotFoundComponent} />
            </Switch>
        <BacktoTopComponent />
        <FooterComponent />
        </div>
    </Router>
)

export default AppRouters;
