import React from 'react';
import {connect} from 'react-redux';
import PdpGallaryComponent from './../PdpGallaryComponent/PdpGallaryComponent';
import PdpProductBioComponent from './../PdpProductBioComponent/PdpProductBioComponent';
import PdpDescriptionComponent from './../PdpDescriptionComponent/PdpDescriptionComponent';
const _ = require('lodash');

const ProductDetailComponent = ({products, match}) => {
    let currentProduct =  _.filter( products,  function(o) { return  match.params.productId === o.productCode } );


    const jsx = currentProduct.length > 0 ? (<section className="section white js-scale-sticky">
                            <div className="container row">
                                <PdpGallaryComponent props={currentProduct[0]} />
                                <PdpProductBioComponent props={currentProduct[0]} />
                                <PdpDescriptionComponent props={currentProduct[0]} /> 
                            </div>
                        </section> ) : '';

    return jsx;      
        
}
const mapStateToProps = ( (state) => {
    return {
        products: state.products

    }
})

export default connect(mapStateToProps)(ProductDetailComponent);

