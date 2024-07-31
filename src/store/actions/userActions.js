// cartActions.js

import axios from 'axios';
import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS
} from '../constant/constant';
import { showToast } from '../../utils/toastUtils';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const registerUser = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_USER_REQUEST });
    try {
        const { data } = await axios.post(`${baseUrl}/api/user`, userData);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
        showToast("Registration successful.", "success")
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.message })
        showToast("Registration failed.", "error")
    }
};

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/api/user/login`,  email, password );
        if (response.data.success) {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.data.user });
            localStorage.setItem('userInfo', JSON.stringify(response.data.data.user));
            showToast("Login Successfully", "success")
        } else {
            console.log(response.data.message, 'msg');
        }
    } catch (error) {
        showToast("Invalid Credentials.", "error")
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_USER_SUCCESS });
        localStorage.removeItem('userInfo'); 
        showToast("Logged Out Successfully", "success")
    } catch (error) {
        showToast("Logout failed:", "error");
        throw error; 
    }
};