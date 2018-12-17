const _ = require('lodash');
const productArray = [];

const product = fetch('https://ranasteelco.herokuapp.com/api/products')
    .then( (response) => {
        return response.json();
    })
    .then( (myJson) => {
        productArray.push(myJson)
    } )

const productDetail = fetch('https://ranasteelco.herokuapp.com/api/productdetails')
    .then( (response) => {
        return response.json();
    })
    .then( (myJson) => {
        productArray.push(myJson)
    } )

const productDescription = fetch('https://ranasteelco.herokuapp.com/api/productdetaildescs')
    .then( (response) => {
        return response.json();
    })
    .then( (myJson) => {
        productArray.push(myJson);
    } )

   
    