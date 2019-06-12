import React from 'react';
import HeroShotComponent from './../../components/HeroShotComponent/HeroShotComponent';
import ProductsComponents from './../../components/ProductsComponents/ProductsComponents';
import WhyuChooseComponents from './../../components/WhyuChooseComponents/WhyuChooseComponents';
import AchievementsComponents from './../../components/AchievementsComponents/AchievementsComponents';
import ContactUsComponent from './../ContactUsComponent/ContactUsComponent';
import RampupComponent from './../../components/RampupComponent/RampupComponent';
import MapComponent from './../../components/MapComponent/MapComponent';
import { requestRampupGallary } from './../../actions/action.rampup';
import { connect } from 'react-redux';

// import StickyScaleComponent from './../StickyScaleComponent/StickyScaleComponent';

// import FeebacksComponent from './..//FeebacksComponent';

const {getMoboDevice} = require('./../../commonModule/commonModule');

const HighOrderComponent = () => {
    let count = 0;

   if(! getMoboDevice() && count < 1 ){
       count = 1;
       return (<StickyScaleComponent />);
   }
}

const HomeComponent = (props) => {
    console.log("sss", props)
    props.requestRampupGallary();

    return (<React.Fragment>
                <HeroShotComponent />
                <ProductsComponents />
                <WhyuChooseComponents />
                <AchievementsComponents />
                <MapComponent />
                <ContactUsComponent />
                <RampupComponent />
            </React.Fragment> 
        )
    } 


  



const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({
        requestRampupGallary: () => requestRampupGallary(),
    })
    return {actions, dispatch };
}
 
const mapStateToProps = () => ({});

export default connect(mapDispatchToProps, mapStateToProps)(HomeComponent);    
