import React from 'react';
import Slider from 'react-slick';
import ProductComponent from '../ProductComponent/ProductComponent';
import SampleNextArrow from '../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../SamplePrevArrow/SamplePrevArrow';
import { connect } from 'react-redux';

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


const ProductsComponents = ({products}) => {
    if(products && products.length > 0){
        return (
            <section className="section no-padd mobile-bg-grey">
                <div className="row container product-thumb-page">
                    <div class="header-level-2-title blue-text darken-1 center">Amazing collections</div>
                    <h2 className="header center">Collection of Products</h2>
                    <Slider {...settings}>
                        { products.map( product => {
                           return product.productVisiblity ?  (<ProductComponent key={product.productId} product={ product } />) : '';
                        } )}
                    </Slider>
                </div>
            </section>
        )
        
    }
    else {
        return (<div>loading...</div>)
    }
} 

const mapStateToProps = ((state) => {
    return {
        products: state.products
    }
})

  export default connect(mapStateToProps)(ProductsComponents);