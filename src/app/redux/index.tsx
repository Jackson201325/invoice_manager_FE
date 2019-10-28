import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './Authentication/reducer';
// import appReducer from './Application/reducer';

export const middlewares = [thunk];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);
export const rootReducers = combineReducers({ authReducer });
export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStoreWithMiddleware(
  rootReducers,
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers
);

export default store;
