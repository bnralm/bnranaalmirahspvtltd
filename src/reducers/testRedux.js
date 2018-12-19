import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const defaultProduct = [];




                        
const addProduct = ({ 
        productAvaiblityLoation= [],
        productCode = undefined,
        productPrice = 0,
        productStockNum = 0,
        productName = undefined,
        productId = undefined,
        productEntryDate = 0
    } = {}) => ({
    type: 'ADD_PRODUCT',
    product: {
        id: uuid(),
        productAvaiblityLoation,
        productCode,
        productPrice,
        productStockNum,
        productName,
        productId,
        productEntryDate
    }
})

const removeProduct = ({id} = {}) => ({
    type: 'REMOVE_PRODUCT',
    id
})

const editProduct = (id, updateProduct) => ({
    type: 'EDIT_PRODUCT',
    updateProduct
})

const setProduct = (products) => ({
    type: 'SET_PRODUCT',
    products
})

const fetchAllProduct = (url) => ({
    getAllProduct: fetch(url, {type: 'get'})
    .catch(err => {
      console.log(err);
      alert("Product update failed, please try again!");
    })
    .then(res => res.json())
    .then(data => 
      store.dispatch(setProduct(data))
    )
})



const defaultAllProduct = [];

const allProductReducer = (state = defaultAllProduct, action) => {
    switch(action.type) {
        case 'SET_PRODUCT':
            return [...state, action.products]
        default:
            return state    

    }
}


const productReducer = (state = defaultProduct, action ) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return  [ 
                        ...state, 
                        action.product
                    ]
        
        case 'REMOVE_PRODUCT':
            return state.filter( ({id} = {}) => id !== action.id)
        
        case 'EDIT_PRODUCT':
            return state.map( product => {
                   if( product.id === action.id){
                          return {
                            ...product,
                            ...action.updateProduct
                         }
                        }
                   else{
                       return product
                   }
            })
        default:
            return state
        }  
    }




const defaultProductFilter = {
    text: '',
    sortBy: 'amount',
    offer: undefined,
    startDate: undefined,
    endDate: undefined,
}




const filterProductReducer = (state = defaultProductFilter, action ) => {
    switch(action.type){
        case 'TEXT_FILTER': 
           return  {
                ...state,
                text: action.text
            }   
        default:
            return state
        }  
    }

//TEXT Filter

const textFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
})

const store = createStore( 
    combineReducers({
        products: productReducer,
        allproduct: allProductReducer, 
        productFilters: filterProductReducer
    })
)

const getProductVisblityFilters = ( products, {text}) => {
    return products.filter( product => { 
        const getText = product.productAvaiblityLoation.filter( (location) => location == text );
        if(getText.length > 0){
            return getText;
        }
        return false;
    }) 
}

// const productDbData = fetch('https://ranasteelco.herokuapp.com/api/products')
//         .then( data => {
//             return data.json();    
//         })
//         .then(jsonData => {
//             // return defaultProduct.push(jsonData);
//             store.dispatch(addProduct(jsonData));
//         })
        

store.subscribe( ( ) =>{
    const state = store.getState();
    // const visibleProducts = getProductVisblityFilters(state.products, state.productFilters);
    console.log(state);
});


const product1 = store.dispatch( addProduct({productAvaiblityLoation: ['Dhanbad', 'Giridih', 'Koderma'],
    productCode: 'BNRALM0006',
    productPrice: 9000,
    productStockNum: 2,
    productName: 'Regular Product'})
)


const product2 = store.dispatch( addProduct({productAvaiblityLoation: ['Giridih', 'Koderma'],
    productCode: 'BNRALM0007',
    productPrice: 9000,
    productStockNum: 2,
    productName: 'Regular Product'})
)

fetchAllProduct('https://ranasteelco.herokuapp.com/api/products');

// store.dispatch( removeProduct({id: product2.product.id}))
 store.dispatch( editProduct(product2.product.id, {productName: "Medium Product"}));
//  store.dispatch( textFilter( "Giridih" ));
 