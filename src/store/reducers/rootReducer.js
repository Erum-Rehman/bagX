import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import reducer from './reducer';
import {cartReducer} from './cartReducers';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
  reducer
});

export default rootReducer;
