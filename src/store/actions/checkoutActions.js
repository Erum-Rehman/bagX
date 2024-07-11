import axios from 'axios';
import { SAVE_SHIPPING_ADDRESS, PLACE_ORDER } from '../constant/constant';

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: data
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const placeOrder = (order) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://192.168.0.34:5000/api/orders', order);

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
