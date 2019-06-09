import * as actionType from './../constants/constant.action'

const defaultState = {};

const productReducer =  (state = defaultState, action) => {
 switch(action.type){
   
  case actionType.PRODUCTS_REQUEST:
    return {
        ...state
    }

  case actionType.PRODUCTS_REQUEST_SUCCESS:
     return {
        ...state,
        products: action.products
      }

    case actionType.PRODUCTS_REQUEST_FAILURE:
      return {
          ...state,
          productsFailure: action.productsFail
        }  

    case actionType.PRODUCTS_REQUEST_DETAILS:
        return {
            ...state
        }

    case actionType.PRODUCTS_REQUEST_DETAILS_SUCCESS:
      return {
          ...state,
          productDetail: action.details
        }
  
    case actionType.PRODUCTS_REQUEST_DETAILS_FAILURE:
      return {
          ...state,
          productDetailFail: action.detailsFail
        }  

    case actionType.PRODUCTS_REQUEST_DESCRIPTION:
        return {
          ...state
        }

  case actionType.PRODUCTS_REQUEST_DESCRIPTION_SUCCESS:
     return {
        ...state,
        productsDecription: action.description
      }

    case actionType.PRODUCTS_REQUEST_DESCRIPTION_FAILURE:
      return {
          ...state,
          productDescriptionFailure: action.descriptionFail
      }
    
   case actionType.MERGE_ALL_PRODUCTS: 
      return {
        ...state,
        productCollection: action.allproduct
      }   
        
   default:
     return state;
  }
}

export default productReducer;