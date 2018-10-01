import React from 'react';
import HeroShotComponent from './../HeroShotComponent/HeroShotComponent';
import ProductsComponents from './../ProductsComponents/ProductsComponents';
import WhyuChooseComponents from './../WhyuChooseComponents/WhyuChooseComponents';
import AchievementsComponents from './../AchievementsComponents/AchievementsComponents';
import GoogleApiWrapper from './../MapComponent/MapComponent';
import ContactUsComponent from './../ContactUsComponent/ContactUsComponent';
import StickyScaleComponent from './../StickyScaleComponent/StickyScaleComponent';

const {getMoboDevice} = require('./../../commonModule/commonModule');


const HomeComponent = () => {
    return (
        <div>
            <HeroShotComponent />
            <ProductsComponents />
            <WhyuChooseComponents />
            <AchievementsComponents />
            <ContactUsComponent />
            <GoogleApiWrapper />
            
            {
               ! getMoboDevice() ? <StickyScaleComponent /> : ''
            }
        </div>        
    )
}

export default HomeComponent;