import React from 'react';

import WhyuChooseComponent from './../WhyuChooseComponent/WhyuChooseComponent';

const {whyuChooseSubTitle, whyuChooseTitle, whyuChoose} = require('./WhyuChooseService/WhyuChooseService');

const WhyuChooseComponents = () => {
    return (
        <section class="section blue lighten-5 center js-scale-sticky">
            <div class="header-level-2-title blue-text darken-1">{whyuChooseSubTitle}</div>
            <h2 class="header">{whyuChooseTitle}</h2>
            <div class="row container">
                {   
                    whyuChoose.map( whyuchoose => <WhyuChooseComponent whyuchoose={ whyuchoose} /> )
                }
            </div>            
        </section>
    )

}

export default WhyuChooseComponents;