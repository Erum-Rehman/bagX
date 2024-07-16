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

export const fetchCartItems = () => async (dispatch) => {
    dispatch({ type: CART_ITEMS_FETCH_REQUEST });

    try {
        const { data } = await axios.get(`${baseUrl}/api/cart`);
        console.log("Base URL:", baseUrl);
        dispatch({ type: CART_ITEMS_FETCH_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CART_ITEMS_FETCH_FAILURE, payload: error.message });
    }
};

export const addToCart = (productId, qty) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/cart`, { productId, qty });
        console.log(productId, "pro",data)
        dispatch({ type: CART_ITEM_ADD_SUCCESS, payload: data?.cartItem });
        showToast("Item added to cart successfully", "success")
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
};
export const updateCartItemQty = (productId, qty) => async (dispatch) => {
    try {
        const { data } = await axios.put(`${baseUrl}/api/cart/${productId}`, { qty });
        dispatch({ type: UPDATE_CART_ITEM_QTY, payload: data });
    } catch (error) {
        showToast('No more stock available', "error")
        // console.error('No more stock available', "error");
    }
};
export const removeFromCart = (productId) => async (dispatch) => {
    try {
        await axios.delete(`${baseUrl}/api/cart/${productId}`);
        dispatch({ type: CART_ITEM_REMOVE_SUCCESS, payload: productId });
        showToast("Item Removed from successfully", "success")
    } catch (error) {
        showToast("Error removing from cart", "error")        
    }
};

export const removeItem = (productId) => async (dispatch) => {
    console.log(productId,'dsdsds')
    try {
        await axios.delete(`${baseUrl}/api/cart/item/${productId}`);
        dispatch({ type: REMOVE_ITEM, payload: productId });
        showToast("Item Removed successfully", "success")

    } catch (error) {
        showToast("Error removing from cart", "error")
    }
};
export const deleteCart = () => async (dispatch) => {
    try {
        await axios.delete(`${baseUrl}/api/cart`);
        dispatch({ type: DELETE_CART }); 
    } catch (error) {
        console.error('Error deleting cart:', error);
    }
};