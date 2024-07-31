import axios from 'axios';
import { SAVE_SHIPPING_ADDRESS, PLACE_ORDER, GET_USER_ORDERS_SUCCESS, GET_USER_ORDERS_FAILURE } from '../constant/constant';
import { showToast } from '../../utils/toastUtils';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: data
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const placeOrder = (order) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${baseUrl}/api/orders`, order);

    dispatch({
      type: PLACE_ORDER,
      payload: data
    });
    showToast("Order placed successfully", "success");

    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  } catch (error) {
    showToast('Error placing order:', error);
  }
};

export const getUserOrders = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/api/orders/items/${userId}`);
    dispatch({ type: GET_USER_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_USER_ORDERS_FAILURE, error: 'Failed to fetch orders' });
  }
};