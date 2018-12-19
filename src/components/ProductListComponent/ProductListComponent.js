import React from 'react';
import ProductItemComponent from './../ProductItemComponent/ProductItemComponent';
import axios from 'axios';

export default class ProductListComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            productTitle: 'Product List of BN & Rana Almirahs',
            productSubTitle: 'We are providing amazing collections of products'
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

        return (
            <section className="product-list section grey lighten-4">
                <div className="container">
                    <h5 className="margin-top-40">{this.state.productTitle}</h5>
                    <p>{this.state.productSubTitle}</p>
                    {this.state.products.map( product => product.productVisiblity ? <ProductItemComponent product={product} /> : '' )}
                </div>
            </section>
        )
    }
}
// console.log(products);
// export default ProductListComponent;
