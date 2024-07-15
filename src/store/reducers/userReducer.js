import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS
} from '../constant/constant';

const initialState = {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
    loading: false,
    error: null,
    isAuthenticated: JSON.parse(localStorage.getItem('userInfo')) ? true : false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case REGISTER_USER_FAIL:
            return { ...state, loading: false, error: action.payload, userInfo: null };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                isAuthenticated: true,
                loading: false,
                error: null,
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                userInfo: null,
                isAuthenticated: false,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};
