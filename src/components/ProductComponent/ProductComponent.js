import React from 'react';
const ProductComponent = (props) => {
    const {productName, productCode,productImage, productPrice, productStockNum, productDiscription} = props.product;

    return (
        <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={productImage} />
            </div>
            <div className="card-content blue lighten-5" >
                <span className="card-title activator blue-text darken-1">
                    <strong>{productName} 
                        <small> {productCode}</small>
                    </strong>
                    <i className="grey-text material-icons right">more_vert</i>
                </span>
                <span className="blue-text darken-1">
                    <strong>PRICE: {productPrice} /- </strong>
                </span>
            </div>
            <div className="card-reveal">
                <span className="card-title white-text text-darken-4">
                    <strong>{productCode}</strong>
                    <i className="grey-text material-icons right">close</i>
                </span>

                <table className="striped">
                    { productDiscription.numberDoor ? (<tr>
                            <td>Number of Door Cabinets</td>
                            <td>{productDiscription.numberDoor}</td>
                        </tr>) : ''
                    }

                    { productDiscription.nubmderOfShelves ? (<tr>
                        <td>Number of Shelves</td>
                        <td>{productDiscription.nubmderOfShelves}</td>
                    </tr>) : ''
                    }
                    { productDiscription.needForThis ? (<tr>
                        <td>Usage/Application</td>
                        <td>{productDiscription.needForThis}</td>
                    </tr>) : ''}
                    { productDiscription.dimensions ? (<tr>
                        <td>Product Dimensions
                        <span title="(Height x Width x Breadth)">H x W x B</span>
                        </td>
                        <td>{productDiscription.dimensions} </td>
                    </tr>) : ''}
                </table>
                <a className="" href={'./pdp/'+productCode}>See more...</a>
            </div>
            <div className="card-action green darken-1">
                <a href="javascript:void(0)" className="white-text" data-product={productCode}>
                {
                    (productStockNum > 0) ? <strong>Add to Cart</strong> : ''
                }
                </a>
                <a href={'/pdp/'+productCode} className="right white-text">
                    <strong>Know more</strong>
                </a>
            </div>
        </div>
    )
}

export default ProductComponent;
