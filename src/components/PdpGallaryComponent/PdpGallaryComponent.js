import React from 'react';
import Slider from 'react-slick';
import SampleNextArrow from '../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../SamplePrevArrow/SamplePrevArrow';
import SingleSlideComponent from './../SingleSlideComponent/SingleSlideComponent';

const PdpGallaryComponent = (props) => {
    const settings = {
        className: "slider variable-width",
        centerMode: false,
        swipe: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        nextArrow: <SampleNextArrow  />,
        prevArrow: <SamplePrevArrow />
      };
      const {productCode, productName, productDtlGallaryImages, productPrice} = props.props;

    return (
        <div className="col m6 s12 pdp-gallary"> 
            <h4 className="header indigo-text text-lighter-1">{productName} <span className="blue-text darker-1">{productCode}</span></h4>
                <Slider {...settings}>
                    { 
                        productDtlGallaryImages.map( (image, key) =>  <SingleSlideComponent image={image} key={'pdp'+key} /> )
                    }
                </Slider> 

                <div className="row pdp-action-btns">
                    <div className="col m12 s12 center">
                        <a className="button button--primary" href="/colors">Choose Color</a> 
                        { (productPrice && productPrice > 0) &&  (<a className="button button--primary" data-price={productPrice}>Add to Card</a>) }
                </div>
            </div>
        </div>
        )
}

export default PdpGallaryComponent;