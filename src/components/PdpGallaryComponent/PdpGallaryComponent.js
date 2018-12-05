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
    let productImages =  props.pdpGallaries;

    return (
        <div className="col m6 s12 pdp-gallary"> 
            <h4 className="header indigo-text text-lighter-1">{props.productTitle} <span className="blue-text darker-1">{props.productCode}</span></h4>
                <Slider {...settings}>
                { 
                    productImages.map( (image, key) =>  <SingleSlideComponent image={image} key={'pdp'+key} /> )
                }
                </Slider> 

                <div className="row pdp-action-btns">
                    <div className="col m12 s12 center"><a className="button button--primary" href="/colors">Choose Color</a>  {props.productPrice ? `<a className="button button--primary" data-price=${props.productPrice}>Add to Card</a>`: ''}</div>
                </div>

        </div>
        
    )
}

export default PdpGallaryComponent;