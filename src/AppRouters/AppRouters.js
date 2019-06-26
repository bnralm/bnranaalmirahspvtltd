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
import BranchOfficeComponent from './../components/BranchOffice';
import SetPasswordComponent from './../container/SetPasswordComponent';


const headerTitle = "BN & Rana Almirahs (P) Ltd.";

export class AppRouters extends React.Component {
    render(){
      return  (
            <Router>
                <React.Fragment>
                 <HeaderComponent />
                     <Switch>
                        <Route exact path="/" component={HomeComponent} />
                         <Route exact path="/plp" component={ProductListComponent} />
                        <Route exact path="/pdp/:productId" component={ProductDetailComponent} />
                        <Route exact path="/contact-us" component={ContactUsComponent}  />
                        <Route exact path="/feedbacks" component={FeedbacksComponent}  />
                        <Route exact path="/colors" component={AvailableColors} />
                        <Route exact path="/bo" component={BranchOfficeComponent} />
                        <Route exact path="/setPassword/:jwt" component={SetPasswordComponent} />
                        

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
