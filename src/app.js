import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './AppRouters/AppRouters';
import axios from 'axios';
import { Provider } from 'react-redux';
import configProductStore from './store/allstore';
import { addProduct } from  './actions/product';

const _ = require('lodash');

const store = configProductStore();

 const getProductData = () => {
    axios.all([
        axios.get('https://ranasteelco.herokuapp.com/api/products'),
        axios.get('https://ranasteelco.herokuapp.com/api/productdetails'),
        axios.get('https://ranasteelco.herokuapp.com/api/productdetaildescs')
    ])
  .then(axios.spread( function (product, productDetailData, productDescriptionData) {
    let allproduct = product.data.map( val => {
        let {productCode} = val;
        let proddata =  _.find(product.data, function(o) { return o.productCode == productCode; });
        let prodDtlData =  _.find(productDetailData.data, function(o) { return o.productDtlCode == productCode; });
        let prodDtlDesc =  _.find(productDescriptionData.data, function(o) { return o.productDesCode == productCode; });
        store.dispatch(addProduct({...proddata, ...prodDtlData, ...prodDtlDesc}))
        return ({...proddata, ...prodDtlData, ...prodDtlDesc});
    })

    let time = new Date(), data = JSON.stringify(allproduct), ctime = time.getTime() + (6 * 60 * 60 * 1000);
 
    localStorage.setItem('allproduct', data );
    localStorage.setItem('addTime', ctime); 
 
}))
  .catch(err => console.log(err))
}

let time = new Date();
    
if( localStorage.addTime &&  (localStorage.addTime >= time.getTime())){
    let data = JSON.parse(localStorage.allproduct);
    data.map( product => {
        store.dispatch(addProduct(product))
    })
}
else {
    getProductData();
}


const storeJxs = (
   <Provider store={store}>
        <AppRouters />
    </Provider>
)

ReactDOM.render(storeJxs, document.getElementById('app'))