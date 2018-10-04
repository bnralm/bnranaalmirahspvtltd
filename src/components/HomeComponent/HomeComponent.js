import React from 'react';
import HeroShotComponent from './../HeroShotComponent/HeroShotComponent';
import ProductsComponents from './../ProductsComponents/ProductsComponents';
import WhyuChooseComponents from './../WhyuChooseComponents/WhyuChooseComponents';
import AchievementsComponents from './../AchievementsComponents/AchievementsComponents';
import ContactUsComponent from './../ContactUsComponent/ContactUsComponent';
import StickyScaleComponent from './../StickyScaleComponent/StickyScaleComponent';
// import FeebacksComponent from './..//FeebacksComponent';
const {getMoboDevice} = require('./../../commonModule/commonModule');


const HomeComponent = () => {
    return (
        <div>
            
            <HeroShotComponent />
            <ProductsComponents />
            <WhyuChooseComponents />
            <AchievementsComponents />
           
            <ContactUsComponent />
            
            
            {
               ! getMoboDevice() ? <StickyScaleComponent /> : ''
            }
        </div>        
    )
}

export default HomeComponent;