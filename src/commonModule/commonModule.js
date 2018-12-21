module.exports = {
    objectFilter: function(obj, predicate){
        Object.filter = (obj, predicate) => 
        Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {} );

        // Example use:
        // var scores = {
        // John: 2, Sarah: 3, Janet: 1
        // };
        // var filtered = Object.filter(scores, score => score > 1); 
        // console.log(filtered);
        
    },
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
    }
}






