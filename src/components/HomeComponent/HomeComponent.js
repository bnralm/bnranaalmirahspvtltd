import React from 'react';
import HeroShotComponent from './../HeroShotComponent/HeroShotComponent';
import ProductsComponents from './../ProductsComponents/ProductsComponents';
import WhyuChooseComponents from './../WhyuChooseComponents/WhyuChooseComponents';
import AchievementsComponents from './../AchievementsComponents/AchievementsComponents';
import ContactUsComponent from './../ContactUsComponent/ContactUsComponent';
// import StickyScaleComponent from './../StickyScaleComponent/StickyScaleComponent';

// import FeebacksComponent from './..//FeebacksComponent';
import MapComponent from './../MapComponent/MapComponent'
const {getMoboDevice} = require('./../../commonModule/commonModule');

const HighOrderComponent = () => {
    let count = 0;

   if(! getMoboDevice() && count < 1 ){
       count = 1;
       return (<StickyScaleComponent />);
   }

}

const HomeComponent = () => {
    return (
        <div>
            <HeroShotComponent />
            <ProductsComponents />
            <WhyuChooseComponents />
            <AchievementsComponents />
            <MapComponent />
            <ContactUsComponent />
        </div>        
    )
}

export default HomeComponent;