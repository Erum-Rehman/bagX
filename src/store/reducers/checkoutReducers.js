import {
  SAVE_SHIPPING_ADDRESS, PLACE_ORDER, GET_USER_ORDERS_SUCCESS
} from '../constant/constant';

const initialState = {
  order: [],
  shippingAddress: null,
  loading: false,
  error: null,
  // isAuthenticated: JSON.parse(localStorage.getItem('userInfo')) ? true : false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case PLACE_ORDER:
      return { ...state, order: action.payload };
    case GET_USER_ORDERS_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    default:
      return state;
  }
};
