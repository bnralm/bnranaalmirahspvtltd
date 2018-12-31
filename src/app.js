import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './AppRouters/AppRouters';
import axios from 'axios';
import { Provider } from 'react-redux';
import configProductStore from './store/allstore';
import { addProduct } from  './actions/product';

const _ = require('lodash');

const store = configProductStore();

 
const storeJxs = (
   <Provider store={store}>
        <AppRouters />
    </Provider>
)

ReactDOM.render(storeJxs, document.getElementById('app'))