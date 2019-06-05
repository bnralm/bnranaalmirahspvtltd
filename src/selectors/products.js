import axios from 'axios';
import {addProducts} from './../actions';
import configureStore from './../store/allstore';

const store = configureStore();

const fetchAllProduct = async() => {
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
           return allProduct;
      }))
      .then( products => store.dispatch(addProducts(products)))
}

export default fetchAllProduct;