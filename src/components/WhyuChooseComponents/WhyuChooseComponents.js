import React from 'react';
import WhyuChooseComponent from './../WhyuChooseComponent/WhyuChooseComponent';

const {whyuChooseSubTitle, whyuChooseTitle, whyuChoose} = require('./WhyuChooseService/WhyuChooseService');

const WhyuChooseComponents = () => {
    return (
        <section className="section blue lighten-5 center js-scale-sticky">
            <div className="header-level-2-title blue-text darken-1">{whyuChooseSubTitle}</div>
            <h2 className="header">{whyuChooseTitle}</h2>
            <div className="row container">
                {   
                    whyuChoose.map( (whyuchoose, ind) => <WhyuChooseComponent key={'ind'+ind} whyuchoose={ whyuchoose} /> )
                }
            </div>            
        </section>
    )

}

export default WhyuChooseComponents;