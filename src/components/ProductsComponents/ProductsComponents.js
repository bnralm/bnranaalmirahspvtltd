import React from 'react';
import Slider from 'react-slick';
import ProductComponent from '../ProductComponent/ProductComponent';
import SampleNextArrow from '../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../SamplePrevArrow/SamplePrevArrow';
import { connect } from 'react-redux';
import find from 'lodash/find'

const settings = {
    className: "slider variable-width",
    centerMode: false,
    swipe: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />
  };

  if(window.screen.availWidth < 990 ){
      settings.slidesToShow = 1;
  }


const ProductsComponents = ({products, details, description}) => {
    let allproduct;
    if(products){
        allproduct = products.map( val => {
            let {productCode} = val;
            let proddata =  find(products, function(o) { return o.productCode == productCode; });
            let prodDtlData =  find(details, function(o) { return o.productDtlCode == productCode; });
            let prodDtlDesc =  find(description, function(o) { return o.productDesCode == productCode; });
            
            return ({...proddata, ...prodDtlData, ...prodDtlDesc});
        })
    }
    
    if(allproduct){
        
        return (
            <section className="section no-padd mobile-bg-grey">
                <div className="row container product-thumb-page">
                    <div className="header-level-2-title blue-text darken-1 center">Amazing collections</div>
                    <h2 className="header center">Collection of Products</h2>
                    <Slider {...settings}>
                        { allproduct.map( product => {
                           return product.productVisiblity ?  (<ProductComponent key={product.productId} product={ product } />) : '';
                        } )}
                    </Slider>
                </div>
            </section>
        )
        
    }
    else {
        return (<div className="text-center">loading...</div>)
    }
} 

const mapStateToProps = ((state) => {
    return {
        products: state.productReducer.products,
        details: state.productReducer.productDetail,
        description: state.productReducer.productsDecription
    }
})

  export default connect(mapStateToProps, null)(ProductsComponents);