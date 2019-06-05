import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

export default () => {
    const store = createStore(appReducer,  composeEnhancers(
      applyMiddleware(sagaMiddleware)
    ));
    return store;
}
