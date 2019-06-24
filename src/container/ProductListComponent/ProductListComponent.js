import React from 'react';
import ProductItemComponent from './../../components/ProductItemComponent';
import { connect } from 'react-redux';
import find from 'lodash/find';


const ProductListComponent = ({products, details, description}) => {
    document.title = 'BN Rana Almirahs: Product List Page'
    let allproduct;
    if(products && details && description){
        allproduct = products.map( val => {
            let {productCode} = val;
            let proddata =  find(products, function(o) { return o.productCode == productCode });
            let prodDtlData =  find(details, function(o) { return o.productDtlCode == productCode });
            let prodDtlDesc =  find(description, function(o) { return o.productDesCode == productCode });
            
            return ({...proddata, ...prodDtlData, ...prodDtlDesc});
        })
    }
    

    return (allproduct && allproduct.length) ? (<section className="product-list section grey lighten-4">
        <div className="container">
            <h5>List of awesome products collection of almirahs</h5>
            <p>Stylish, Modern, Affordable! The new Slimline range of cupboards from BN & Rana Almirahs Interio Home is ideal for the new generation. Its contemporary styling, sleek lines, duo-toned colours and sturdy design is a marriage of style and utility.And the most delightful part is that it is affordable.Almirahs (cupboard) are the wider and deeper options in our cupboard range. Stylish shelves, ample hanging space, half locker and a secret compartment are some of the thoughtful features provided in this modern age interiors. Lockable security and an additional hanging rod.</p>
            
            { 
                allproduct.map( product => {
                    return product.productVisiblity ? (<ProductItemComponent product={product} />) : '';
            } ) }
        </div>
</section>) : (<div>Loading...</div>);
}

    

const mapStateToProps = ((state) => {
    return {
        products: state.productReducer.products,
        details: state.productReducer.productDetail,
        description: state.productReducer.productsDecription
    }
})

export default connect(mapStateToProps, null)(ProductListComponent);