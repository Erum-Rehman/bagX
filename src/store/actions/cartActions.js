import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constant/constant';

export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://192.168.0.34:5000/api/products/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            new_price: data.new_price,
            quantity: data.quantity,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
