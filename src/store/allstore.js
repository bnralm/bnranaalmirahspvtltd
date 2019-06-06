import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './../reducers';
import rootSaga from './../sagas';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    appReducer,
    composeEnhancers( applyMiddleware(sagaMiddleware) )
    );

sagaMiddleware.run(rootSaga);

export default store;
