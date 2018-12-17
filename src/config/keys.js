const _ = require('lodash');
module.exports = {
    gMapAPIKey: "AIzaSyDrnTD6GqWo_WA9OkItgdYTKaX_CfKxcuo",
    product: async () => {
        const product = await fetch('https://ranasteelco.herokuapp.com/api/products');
        const productData =  await product.json();
        
        const productDetail = await fetch('https://ranasteelco.herokuapp.com/api/productdetails');
        const productDetailData = await productDetail.json();
    
        const productDescription = await fetch('https://ranasteelco.herokuapp.com/api/productdetaildescs');
        const productDescriptionData = await productDescription.json();
        
        
            productData.map( val => {

                let {productCode} = val;

               let proddata =  _.find(productData, function(o) { return o.productCode == productCode; });
               let prodDtlData =  _.find(productDetailData, function(o) { return o.productDtlCode == productCode; });
               let prodDtlDesc =  _.find(productDescriptionData, function(o) { return o.productDesCode == productCode; });
                
               let itemData = {...proddata, ...prodDtlData, ...prodDtlDesc};
                console.log("itemData", itemData);

            })
    }
}
