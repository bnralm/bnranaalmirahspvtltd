const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
 switch(action.type){
   case 'ADD_PRODUCT':
     return [
       ...state,
       action.product
     ];
   case 'ADD_PRODUCTS':
     return [
       ...state,
       action.products
     ]; 
   default:
     return state;
  }
}
