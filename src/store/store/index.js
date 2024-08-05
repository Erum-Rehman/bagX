import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middleware = [thunk];

// Use compose to apply middleware without DevTools
const composedEnhancers = compose(applyMiddleware(...middleware));

const store = createStore(
  rootReducer,
  {}, // Initial state
  composedEnhancers
);

export default store;
