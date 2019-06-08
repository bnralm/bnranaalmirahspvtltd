import React from 'react';
import {hero} from  './HeroShotService/HeroShotService';
const { parallaxTopImg, parallaxTopImgAltText, parallaxImgLogoSvg, parallaxImgLogoSvgAltText, heroHeadingLevelTwo, heroBodyMessage } = hero;

const HeroShotComponent = () => (
      <section className="section no-pad js-scale-sticky " id="index-banner">
          <div className="heroshot-container">
            <div className="heroshot-image">
              <img src={parallaxTopImg} alt={parallaxTopImgAltText} />
            </div>
            <div className="heroshot-textwrap white-text">
            <div className="picture center">
                <img src={parallaxImgLogoSvg} alt={parallaxImgLogoSvgAltText} />
            </div>
              <h2 className="header">{heroHeadingLevelTwo}</h2>
              <p className="text-darken-3 lighten-3 flow-text">
                {heroBodyMessage}
              </p>
            </div>
          </div>
        </section>
      )
   export default HeroShotComponent;
   