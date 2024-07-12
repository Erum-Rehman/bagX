import axios from 'axios';
import { SAVE_SHIPPING_ADDRESS, PLACE_ORDER } from '../constant/constant';

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
