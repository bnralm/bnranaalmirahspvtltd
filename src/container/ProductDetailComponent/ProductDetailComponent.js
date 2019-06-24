import React from 'react';
import {connect} from 'react-redux';
import PdpGallaryComponent from './../../components/PdpGallaryComponent';
import BreadcumComponent from './../../components/BreadcumComponent';
import PdpDescriptionComponent from './../../components/PdpDescriptionComponent';
import * as lodash  from 'lodash';

const ProductDetailComponent = ({products, details, description, match}) => {
    let allProducts, {productId} = match.params, currentProduct ;
    document.title = `BN Rana Almirahs: Product Detail Page ${match.params.productId}`;
    
    if(products && details && description){
        allProducts = products.map( val => {
            let proddata =  lodash.find(products, function(o) { return o.productCode == productId });
            let prodDtlData =  lodash.find(details, function(o) { return o.productDtlCode == productId });
            let prodDtlDesc =  lodash.find(description, function(o) { return o.productDesCode == productId });
            return ({...proddata, ...prodDtlDesc, ...prodDtlData})
        })
    }

     if(allProducts && allProducts.length > 0){
         currentProduct = lodash.filter(allProducts, { 'productCode': productId })
    }
    return currentProduct ? <section className="section white js-scale-sticky">
            <div className="container row">
                <PdpGallaryComponent props={currentProduct[0]} />
                <BreadcumComponent props={currentProduct[0]} />
                <PdpDescriptionComponent props={currentProduct[0]} /> 
            </div>
        </section> : <div className="center" style={{minHeight: '100vh'}} >Loading...</div>;
    }
const mapStateToProps = ( (state) => {
    return {
        products: state.productReducer.products,
        details: state.productReducer.productDetail,
        description: state.productReducer.productsDecription
    }
})

export default connect(mapStateToProps)(ProductDetailComponent);

