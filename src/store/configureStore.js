import { createStore,applyMiddleware,compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger'
import createReducer from './reducer';
import rootSaga from './rootSaga';

export default function configureStore(initialState = {}){
    let composeEnhancers = compose;
    const reduxSagaMonitorOptions = {};

    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
          composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

      }
      const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
      const middlewares = [sagaMiddleware,logger];
      const enhancers = [applyMiddleware(...middlewares)];

      const store = createStore(
          createReducer(),
        initialState,
        composeEnhancers(...enhancers),
      );
      sagaMiddleware.run(rootSaga);
      return store;

}