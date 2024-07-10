import rootReducer from "../reducers/rootReducer";
import {createStore, applyMiddleware} from 'redux';
import  {thunk}  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// const cartItemsFromStorage = localStorage.getItem('cartItems') 
//     ? JSON.parse(localStorage.getItem('cartItems')) 
//     : [];

const middleware = [thunk];
const store = createStore(
    rootReducer,
    // initialState,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;