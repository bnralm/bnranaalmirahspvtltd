import React from 'react';
import ProductItemComponent from './../ProductItemComponent/ProductItemComponent';

const {products} = require('./../ProductsComponents/ProductsService/ProductsService') 

const ProductListComponent = () => {
    return (
        <section className="product-list section grey lighten-4">
            <div className="container">
                <h5>Product List of BN & Rana Almirahs</h5>
                <p>{products[0].productDiscriptionMsg}</p>
                {products.map( product =>  <ProductItemComponent product={product} /> )}
            </div>
        </section>
    )
}

export default ProductListComponent;
