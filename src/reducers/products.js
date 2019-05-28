import * as actionType from './../constants/constant.action'
const productsReducerDefaultState = [];

const productReducer =  (state = productsReducerDefaultState, action) => {
 switch(action.type){
   case actionType.ADD_PRODUCTS:
     return [
       ...state,
       action.products
     ];
   case actionType.ADD_PRODUCT_DETAILS:
     return [
       ...state,
       action.productDetails
     ]; 
    case actionType.ADD_PRODUCT_DESCRIPTIONS:
      return [
        ...state,
        action.productDecriptions
      ];  
   default:
     return state;
  }
}

export default productReducer;