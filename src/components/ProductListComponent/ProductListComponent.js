import React from 'react';
import ProductItemComponent from './../ProductItemComponent/ProductItemComponent';
import { connect } from 'react-redux';

const ProductListComponent = ({products}) => (
    <section className="product-list section grey lighten-4">
        <div className="container">
            <h5>List of awesome products collection of almirahs</h5>
            <p>Stylish, Modern, Affordable! The new Slimline range of cupboards from BN & Rana Almirahs Interio Home is ideal for the new generation. Its contemporary styling, sleek lines, duo-toned colours and sturdy design is a marriage of style and utility.And the most delightful part is that it is affordable.Almirahs (cupboard) are the wider and deeper options in our cupboard range. Stylish shelves, ample hanging space, half locker and a secret compartment are some of the thoughtful features provided in this modern age interiors. Lockable security and an additional hanging rod.</p>
             { products.map( product => {
                return product.productVisiblity ? (<ProductItemComponent product={product} />) : '';
             } ) }
        </div>
    </section>
    )
 
const mapStateToProps = (state) => {
  return  {
      products: state.products
  } 
}
    
export default connect(mapStateToProps)(ProductListComponent);