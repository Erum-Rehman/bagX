//cartreducers
import {
    CART_ITEMS_FETCH_REQUEST,
    CART_ITEMS_FETCH_SUCCESS,
    CART_ITEMS_FETCH_FAILURE,
    CART_ITEM_ADD_SUCCESS,
    CART_ITEM_REMOVE_SUCCESS,
    UPDATE_CART_ITEM_QTY,
    DELETE_CART,
    REMOVE_ITEM
} from '../constant/constant';

const initialState = {
    cartItems: [],
    loading: false,
    error: null,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ITEMS_FETCH_REQUEST:
            return { ...state, loading: true };
        case CART_ITEMS_FETCH_SUCCESS:
            return { ...state, loading: false, cartItems: action.payload };
        case CART_ITEMS_FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CART_ITEM_ADD_SUCCESS:
            // return { ...state, cartItems: [...state.cartItems, action.payload] };
            const item = action.payload;
                const existItem = state.cartItems.find(x => x.product === item.product);
    
                if (existItem) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                    };
                } else {
                    return {
                        ...state,
                        cartItems: [...state.cartItems, item]
                    };
                }
                
        case CART_ITEM_REMOVE_SUCCESS:
            return { ...state, cartItems: state.cartItems.filter(item => item._id !== action.payload) };
        case REMOVE_ITEM:
            return { ...state,  cartItems: state.cartItems.filter(item => item._id !== action.payload), };
        case UPDATE_CART_ITEM_QTY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item._id === action.payload._id ? { ...item, qty: action.payload.qty } : item
                )
            };
        case DELETE_CART:
            return { ...state, cartItems: [] };
        default:
            return state;
    }
};
