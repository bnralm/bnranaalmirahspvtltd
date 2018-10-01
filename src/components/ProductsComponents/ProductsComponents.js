import React from 'react';
import Slider from 'react-slick';

import ProductComponent from '../ProductComponent/ProductComponent';
import SampleNextArrow from '../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../SamplePrevArrow/SamplePrevArrow';

const ProductsService = require('./ProductsService/ProductsService');

export default class ProductsComponents extends React.Component {
    constructor(props){
        super(props);
    }
    render(){

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
          const products = ProductsService.products;


        return (
            <section className="section no-padd">
                <div className="row container product-thumb-page">
                    <div class="header-level-2-title blue-text darken-1 center">{ProductsService.productSubTitle}</div>
                    <h2 className="header center">{ProductsService.productTitle}</h2>
                    <Slider {...settings}>
                        { 
                            products.map( product =>  <ProductComponent product={product} /> )
                        }
                    </Slider>   
                </div>
            </section>
        )
    }
}
