import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import ProductComponent from '../ProductComponent/ProductComponent';
import SampleNextArrow from '../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../SamplePrevArrow/SamplePrevArrow';

export default class ProductsComponents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            productTitle: 'Collection of Products',
            productSubTitle: 'Amazing collections'
        }
    }
    componentDidMount() {
        const that = this;
        axios.all([
            axios.get('https://ranasteelco.herokuapp.com/api/products'),
            axios.get('https://ranasteelco.herokuapp.com/api/productdetails'),
            axios.get('https://ranasteelco.herokuapp.com/api/productdetaildescs')
          ])
          .then(axios.spread(function (product, productDetailData, productDescriptionData) {
            let allProduct = [];
                product.data.map( val => {
                    let {productCode} = val;
                    let proddata =  _.find(product.data, function(o) { return o.productCode == productCode; });
                    let prodDtlData =  _.find(productDetailData.data, function(o) { return o.productDtlCode == productCode; });
                    let prodDtlDesc =  _.find(productDescriptionData.data, function(o) { return o.productDesCode == productCode; });
                    allProduct.push({...proddata, ...prodDtlData, ...prodDtlDesc});
                 })
               console.log(allProduct);
               that.setState({ products: allProduct });
          }))
          .catch(error => console.log(error));

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

        return (
           <section className="section no-padd mobile-bg-grey">
                <div className="row container product-thumb-page">
                    <div class="header-level-2-title blue-text darken-1 center">{this.state.productSubTitle}</div>
                    <h2 className="header center">{this.state.productTitle}</h2>
                    <Slider {...settings}>
                            { this.state.products.map( product => product.productVisiblity ? <ProductComponent product={product} /> : '' )}
                    </Slider>
                </div>
            </section>
        )
    }
}
