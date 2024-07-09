// src/actions/cartActions.js
export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART, 
    payload: {
      id: product._id,
      name: product.name,
      new_price: product.new_price,
      quantity: 1, 
    },
  });
};
