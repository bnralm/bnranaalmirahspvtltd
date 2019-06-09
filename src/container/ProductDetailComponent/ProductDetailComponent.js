import React from 'react';
import {connect} from 'react-redux';
import PdpGallaryComponent from './../../components/PdpGallaryComponent';
import PdpProductBioComponent from './../../components/PdpProductBioComponent';
import PdpDescriptionComponent from './../../components/PdpDescriptionComponent';
import PageNotFoundComponent from './../PageNotFoundComponent';
import * as lodash  from 'lodash';

const ProductDetailComponent = ({products, details, description, match}) => {
    let allProducts, {productId} = match.params, currentProduct ;
    
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
                                <PdpProductBioComponent props={currentProduct[0]} />
                                <PdpDescriptionComponent props={currentProduct[0]} /> 
                            </div>
                        </section>  : <PageNotFoundComponent />;

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

