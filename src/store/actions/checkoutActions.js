import axios from 'axios';
import { SAVE_SHIPPING_ADDRESS, PLACE_ORDER, USER_ORDER_FETCH_SUCCESS } from '../constant/constant';

const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

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

    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  } catch (error) {
    console.error('Error placing order:', error);
  }
};

export const getUserOrder = (id) => async (dispatch) => {
  try {
      const { data } = await axios.get(`${baseUrl}/api/order/${id}`);
      console.log("Base URL:", baseUrl);
      dispatch({ type: USER_ORDER_FETCH_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error finding order:', error);
  }
};