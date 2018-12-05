import React from 'react';

import PdpGallaryComponent from './../PdpGallaryComponent/PdpGallaryComponent';
import PdpProductBioComponent from './../PdpProductBioComponent/PdpProductBioComponent';
import PdpDescriptionComponent from './../PdpDescriptionComponent/PdpDescriptionComponent';

const {products} = require('./../ProductsComponents/ProductsService/ProductsService');
const {objectFilter} = require('./../../commonModule/commonModule')

const ProductDetailComponent = (props) => {
    const productId = props.match.params.productId;
    objectFilter(products, productId);
    const filtered = Object.filter(products, product => product.productCode === productId);
    let currentProduct = undefined;
    for(var i in filtered){
        currentProduct = filtered[i];
    }
    return (
        <section className="section white js-scale-sticky">
            <div className="container row">
                <PdpGallaryComponent pdpGallaries={currentProduct.productGallaryImages} productPrice={currentProduct.productPrice} productTitle={currentProduct.productName} />
                <PdpProductBioComponent pdpBio={currentProduct} pdpDtl={currentProduct.productDiscription} productPrice={currentProduct.productPrice} />
                <PdpDescriptionComponent pdpDescription={currentProduct.productDiscription} /> 
            </div>
        </section>
    )
}

export default ProductDetailComponent;

