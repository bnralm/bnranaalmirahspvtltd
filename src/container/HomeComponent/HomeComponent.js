import React from 'react';

import HeroShotComponent from './../../components/HeroShotComponent/HeroShotComponent';
import ProductsComponents from './../../components/ProductsComponents/ProductsComponents';
import WhyuChooseComponents from './../../components/WhyuChooseComponents/WhyuChooseComponents';
import AchievementsComponents from './../../components/AchievementsComponents/AchievementsComponents';
import ContactUsComponent from './../ContactUsComponent/ContactUsComponent';
import RampupComponent from './../../components/RampupComponent/RampupComponent';
import MapComponent from './../../components/MapComponent/MapComponent'

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

const HomeComponent = () => (<div>
            <HeroShotComponent />
            <ProductsComponents />
            <WhyuChooseComponents />
            <AchievementsComponents />
            <MapComponent />
            <ContactUsComponent />
            <RampupComponent/>
        </div>        
    )

export default HomeComponent;