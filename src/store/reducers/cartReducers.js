// src/reducers/cartReducers.js
import { ADD_TO_CART } from '../actions/cartActions';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      if (existingItem) {
        // Item already in cart, update quantity or any other logic
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === existingItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item
          )
        };
      } else {
        // New item added to cart
        return {
          ...state,
          cartItems: [...state.cartItems, newItem]
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
