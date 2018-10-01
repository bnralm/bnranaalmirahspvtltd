import {createStore} from 'redux';
/* 
const add = function({a,b} = data){
    return a + b
}

console.log( add({a:5, b:6}) );
 */
const incrementCount = ( {incrementBy = 1} = {} ) => {
    return {
        type: 'INCREAMENT',
        incrementBy 
    }
}

const decrementCount = ( {decrementBy = 1} = {} ) => {
    return {
        type: 'DECREAMENT',
        decrementBy 
    }
}

const setCount = ( {count = 1} = {} ) => {
    return {
        type: 'SET',
        count 
    }
}

const store = createStore( ( state = {count: 0}, action ) => {
    switch (action.type){
        case 'INCREAMENT':
            return {
                count : state.count + action.incrementBy
            }
        case 'RESET':
            return {
                count : 0
            }
        case 'SET': {
            return {
                count: action.count
            }
        }    

        case 'DECREAMENT':
            return {
                count : state.count - action.decrementBy,
            }
        default: 
            return state;
        }      
    }  
)



const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
})


store.dispatch( incrementCount( {incrementBy: 5} ) );
store.dispatch( incrementCount( {incrementBy: 5} ) );
store.dispatch( incrementCount( {incrementBy: 5} ) );
unsubscribe();
store.dispatch( incrementCount( {incrementBy: 1} ) );

store.dispatch(decrementCount({decrementBy:2}));
store.dispatch(setCount());



// store.dispatch({
//     type: 'INCREAMENT',
// })


// store.dispatch({
//     type: 'DECREAMENT',
//     decrementBy: 2
// })
// unsubscribe();

// store.dispatch({
//     type: 'DECREAMENT',
//     decrementBy: 100
// })
// store.dispatch(decrementCount());

// store.dispatch({
//     type: 'RESET'
// })

// store.dispatch({
//     type: 'SET',
//     count: 100
// })

