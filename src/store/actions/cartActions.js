// cartActions.js
import axios from 'axios';
import {
    CART_ITEMS_FETCH_REQUEST,
    CART_ITEMS_FETCH_SUCCESS,
    CART_ITEMS_FETCH_FAILURE,
    CART_ITEM_ADD_SUCCESS,
    CART_ITEM_REMOVE_SUCCESS,
    DELETE_CART,
    UPDATE_CART_ITEM_QTY,
    REMOVE_ITEM
} from '../constant/constant'; 
import { showToast } from '../../utils/toastUtils';

const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

// Fetch Cart Items
export const fetchCartItems = () => async (dispatch) => {
    dispatch({ type: CART_ITEMS_FETCH_REQUEST });

    try {
        const { data } = await axios.get(`${baseUrl}/api/cart/items`);
        dispatch({ type: CART_ITEMS_FETCH_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CART_ITEMS_FETCH_FAILURE, payload: error.message });
    }
};

// Add to Cart
export const addToCart = (userId, productId, qty) => async (dispatch) => {
    console.log('userId:', {userId}, {productId} );
    try {
        const { data } = await axios.post(`${baseUrl}/api/cart`, { userId, productId, qty });
        dispatch({ type: CART_ITEM_ADD_SUCCESS, payload: data?.cartItem });
        showToast("Item added to cart successfully", "success");
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
};
// Update Cart Item Quantity
export const updateCartItemQty = (cartItemId, qty, userId) => async (dispatch) => {
    try {
        const { data } = await axios.put(`${baseUrl}/api/cart/${cartItemId}`, { qty, userId });
        dispatch({ type: UPDATE_CART_ITEM_QTY, payload: data });
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
    }
};

// Remove from Cart
export const removeFromCart = (cartItemId, userId) => async (dispatch) => {
    try {
        await axios.delete(`${baseUrl}/api/cart/${cartItemId}`,  {
            data: { userId }
        }
        );
        dispatch({ type: CART_ITEM_REMOVE_SUCCESS, payload: cartItemId });
        showToast("Item removed successfully", "success");
    } catch (error) {
        showToast("Error removing from cart", "error");        
    }
};

export const removeItem = (cartItemId, userId) => async (dispatch) => {
    try {
        const response = await axios.delete(`${baseUrl}/api/cart/item/${cartItemId}`, {
            data: { userId }
        });

        if (response.data.message === 'Item removed from cart') {
            dispatch({ type: REMOVE_ITEM, payload: cartItemId });
            showToast("Item removed successfully", "success");
        } else {
            showToast("Error removing from cart", "error");
        }
    } catch (error) {
        showToast("Error removing from cart", "error");
    }
};
// Delete Cart
export const deleteCart = (userId) => async (dispatch) => {
    console.log({userId})
    try {
        await axios.delete(`${baseUrl}/api/cart`, {
            data: { userId }
          });        
        dispatch({ type: DELETE_CART,payload: [] }); 
    } catch (error) {
        console.error('Error deleting cart:', error);
    }
};
