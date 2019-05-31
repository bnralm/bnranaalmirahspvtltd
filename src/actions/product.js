import * as actionType from './../constants/constant.action';
import { serviceAPI } from './../services/service.api';

export const addProducts = ( products => ({
    type: actionType.ADD_PRODUCTS,
    products
}))

export const addProductDetails = ( productDetails => ({
    type: actionType.ADD_PRODUCT_DETAILS,
    productDetails
}))


export const addProductsDescription = ( productDecriptions => ({
    type: actionType.ADD_PRODUCT_DESCRIPTIONS,
    productDecriptions
}))


export const getAllProducts = () => {
  return dispatch => {
    serviceAPI
      .getProducts()
      .then(resp => {
      
        if (resp.data) {
          dispatch(addProducts(resp.data));
        } else if ( false
        //   resp.response.data.resultCode &&
        //   resp.response.data.resultDescription
        ) {
          // dispatch(
            // setReferralError(
            //   resp.response.data.resultCode,
            //   resp.response.data.resultDescription
            // )
          // );
        } else {
          console.log(resp.data);
        }
      })
      .catch(error => {
        console.log('Error!  ' + error);
      });
  };
};


export const getAllProductDetails = () => {
    return dispatch => {
      serviceAPI
        .getProductDetails()
        .then(resp => {
        
          if (resp.data) {
            dispatch(addProductDetails(resp.data));
          } else if ( false
          //   resp.response.data.resultCode &&
          //   resp.response.data.resultDescription
          ) {
            dispatch(
              // setReferralError(
              //   resp.response.data.resultCode,
              //   resp.response.data.resultDescription
              // )
            );
          } else {
            console.log(resp.data);
          }
        })
        .catch(error => {
          console.log('Error!  ' + error);
        });
    };
  };

  
  export const getAllProductDescriptions = () => {
    return dispatch => {
      serviceAPI
        .getProductsDescription()
        .then(resp => {
        
          if (resp.data) {
            dispatch(addProductsDescription(resp.data));
          } else if ( false
          //   resp.response.data.resultCode &&
          //   resp.response.data.resultDescription
          ) {
            dispatch(
              // setReferralError(
              //   resp.response.data.resultCode,
              //   resp.response.data.resultDescription
              // )
            );
            
          } else {
            console.log(resp.data);
          }
        })
        .catch(error => {
          console.log('Error!  ' + error);
        });
    };
  };
  