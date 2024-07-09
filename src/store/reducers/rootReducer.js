import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import reducer from './reducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  reducer
});

export default rootReducer;
