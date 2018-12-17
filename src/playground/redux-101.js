import {createStore} from 'redux';

const store = createStore( ( state = {count: 0}, action ) => {
    switch (action.type){
        case 'INCREAMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count : state.count + incrementBy
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
            const decrementBy = typeof(action.decrementBy) === 'number' ? action.decrementBy : 1;
            return {
                count : state.count - decrementBy,
            }
        default: 
            return state;
        }      
    })

const unsubscribe = store.subscribe( () => {
    // console.log(store.getState());
})

store.dispatch({
    type: 'INCREAMENT',
    incrementBy: 5
})


store.dispatch({
    type: 'INCREAMENT',
})


store.dispatch({
    type: 'DECREAMENT',
    decrementBy: 2
})


store.dispatch({
    type: 'DECREAMENT',
    decrementBy: 100
})

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'SET',
    count: 100
})
