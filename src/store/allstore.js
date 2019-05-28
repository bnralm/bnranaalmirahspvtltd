import {createStore } from 'redux';
import appReducer from './../reducers'



export default () => {
    const store = createStore(
          appReducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
      return store;
  }
