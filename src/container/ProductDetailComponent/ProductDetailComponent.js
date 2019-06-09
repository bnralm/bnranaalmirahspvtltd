import React from 'react';
import {connect} from 'react-redux';
import PdpGallaryComponent from './../../components/PdpGallaryComponent';
import PdpProductBioComponent from './../../components/PdpProductBioComponent';
import PdpDescriptionComponent from './../../components/PdpDescriptionComponent';
import PageNotFoundComponent from './../PageNotFoundComponent';
const _ = require('lodash');

const ProductDetailComponent = ({products, match}) => {
    if(products){
        allProducts = products.map( val => {
            let {productCode} = val;
            let proddata =  find(products, function(o) { return o.productCode == productCode; });
            let prodDtlData =  find(details, function(o) { return o.productDtlCode == productCode; });
            let prodDtlDesc =  find(description, function(o) { return o.productDesCode == productCode; });
            return ({...proddata, ...prodDtlDesc, ...prodDtlData})
        })
    }

    // if(allProducts){
    //     props.mergeAllProducts(allProducts);
    // }

    let currentProduct =  _.filter( products,  function(o) { return  match.params.productId === o.productCode } );


    const jsx = currentProduct.length > 0 ? (<section className="section white js-scale-sticky">
                            <div className="container row">
                                <PdpGallaryComponent props={currentProduct[0]} />
                                <PdpProductBioComponent props={currentProduct[0]} />
                                <PdpDescriptionComponent props={currentProduct[0]} /> 
                            </div>
                        </section> ) : (<PageNotFoundComponent />);

    return jsx;      
        
}
const mapStateToProps = ( (state) => {
    return {
        products: state.productReducer.products,
        details: state.productReducer.productDetail,
        description: state.productReducer.productsDecription
    }
})

export default connect(mapStateToProps)(ProductDetailComponent);

