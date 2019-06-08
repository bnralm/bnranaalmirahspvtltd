import axios from 'axios';

module.exports = {
    forms: {
        patterrns: {
            name: /^[a-z\d\.]{5,}$/ig
        }
    },
    generateRandomToken: function(){
        require('crypto').randomBytes(48, function(err, buffer) {
            const token = buffer.toString('hex');
            localStorage.setItem('bnrContactToken', token)
            }
        )
    },
    getRandomToken: function(){
        if(localStorage.bnrContactToken){
                return localStorage.bnrContactToken;
            }
    },
    destroyRandomToken: function(){
        if(localStorage.bnrContactToken){
            localStorage.removeItem('bnrContactToken')
        }
    },
    scrollingAspectRatioModule : function(heightOfElementExpected, scrollingHightPosoition, heightOfPorpationalElement){
        if(heightOfPorpationalElement > scrollingHightPosoition)
        { 
            const elementSinglePercentValue = (heightOfPorpationalElement/100);
    
            let heightOfPorpationalElementInPixelActual, scrollingHightPosoitionWithWindowHeight =  heightOfPorpationalElement - scrollingHightPosoition,
                heightOfPorpationalElementInPixel = scrollingHightPosoition/elementSinglePercentValue;
                heightOfPorpationalElementInPixelActual = heightOfElementExpected*(heightOfPorpationalElementInPixel/100);
                return heightOfPorpationalElementInPixelActual;
        }
    },

    $el : function(selector){
        return document.querySelectorAll(selector);
     },

    $elAll: (selector) => {
        return document.querySelectorAll(selector);
     },

    getElementOuterHeight: function(selector){
        return document.querySelector(selector).clientHeight;
    },
    
    getElementOffsetTop: function(selector){
        return document.querySelector(selector).offsetTop;
    },

    getMoboDevice: function(){
        let patterrn = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
            userAgent = navigator.userAgent,
            checkedMoboDevice = false;

        if(patterrn.test(userAgent) ){
            checkedMoboDevice = true;
            return checkedMoboDevice; 
        }
        else{
            return checkedMoboDevice;
        }
    },
}
