import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './AppRouters/AppRouters';
import { Provider } from 'react-redux';
import store from './store/allstore';



const storeJxs = (
    <Provider store={store}> 
       <AppRouters />
    </Provider>
)

ReactDOM.render(storeJxs, document.getElementById('app'))