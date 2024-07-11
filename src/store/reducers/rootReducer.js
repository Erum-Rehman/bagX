import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import reducer from './reducer';
import {cartReducer} from './cartReducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  reducer
});

export default rootReducer;
