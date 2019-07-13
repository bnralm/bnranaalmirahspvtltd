import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import appReducer from './../reducers';
import rootSaga from './../sagas';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const sagaMiddleware = createSagaMiddleware();


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(
    persistedReducer,
    composeEnhancers( applyMiddleware(sagaMiddleware) )
    );

sagaMiddleware.run(rootSaga);

export default store;


