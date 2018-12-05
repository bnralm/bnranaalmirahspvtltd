import React from 'react';

const ProductItemComponent = (props) => {
    const {productName, productCode,productImage, productPrice, productStockNum, productDiscription} = props.product;
    return (
    <div className="product-list">
        <div className=" row">
            <h5 className="plp-header">{productName}</h5>
            <div className="col m3 s12">
                <picture>
                    {/* <source srcset={productImage} media="(min-width: 800px)" /> */}
                    <img src={productImage}  />
                </picture>
                <div className="photos-avail"><a href='#'>10 View Photo</a></div>
            </div>
            <div className="col m9 s12">
                <div className="plp-description">{productDiscription.prodcutMsg}</div>
                <div className="plp-table-container">
                    <table className="plp-table">
                        <thead>
                            <tr>
                                <th><sup>*</sup>Price</th>
                                <th>Avail Stock No</th>
                                <th>Model Number</th>    
                                <th>Number of Doors</th>    
                                <th>Product dimensions</th>    
                            </tr>
                        </thead>    
                        <tbody>
                            <tr>
                                <td>{productPrice ? `INR ${productPrice} /-`: '-'} </td>
                                <td>{productStockNum}</td>
                                <td>{productCode}</td>
                                <td>{productDiscription.numberDoor}</td>
                                <td>{productDiscription.dimensions}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="warrenty"></div>
                
                </div>
                <div className="flex">
                <a className="button button-primary" href={`/pdp/${productCode}`}>View More</a> 
                <a className="button button-primary ml-15" href="/contactus/">Enquire Now</a>  
                </div>
                <div className="notes"><sup>*</sup>Adding mirror will be chargeable of Rs. 900/-</div>          
            </div>
        </div>
    </div>)

}

export default ProductItemComponent;
