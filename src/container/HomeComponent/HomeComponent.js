import React from 'react';

import HeroShotComponent from './../../components/HeroShotComponent';
import ProductsComponents from './../../components/ProductsComponents';
import WhyuChooseComponents from './../../components/WhyuChooseComponents';
import AchievementsComponents from './../../components/AchievementsComponents';
import ContactUsComponent from './../ContactUsComponent';
import RampupComponent from './../../components/RampupComponent';
import MapComponent from './../../components/MapComponent'

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

const HomeComponent = () => {
    return (
        <div>
            hellow
             <HeroShotComponent />
            <ProductsComponents />
            <WhyuChooseComponents />
            <AchievementsComponents />
            <MapComponent />
            <ContactUsComponent />
            <RampupComponent/>
        </div>        
    )
}

export default HomeComponent;