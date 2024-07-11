import { SAVE_SHIPPING_ADDRESS, PLACE_ORDER } from '../constant/constant';

export const shippingAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    default:
      return state;
  }
};

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return { ...state, order: action.payload };
    default:
      return state;
  }
};
