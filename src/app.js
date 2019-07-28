import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './AppRouters/AppRouters';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {Spinner } from 'reactstrap';
import {store, persist} from './store/allstore';



const storeJxs = (
    <Provider store={store}> 
        <PersistGate 
            loading={<div 
                        className="text-center">
                            <Spinner color="secondary" />
                        </div>}
                    persistor={persist}>
            <AppRouters />
       </PersistGate>
    </Provider>
)

ReactDOM.render(storeJxs, document.getElementById('app'))