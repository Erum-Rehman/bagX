import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IncDec from '../IncDec';
import { useNavigate, Link } from "react-router-dom";
import './index.scss';
import ButnField from './../Button';
import { fetchCartItems, updateCartItemQty, removeFromCart, removeItem } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from '../../utils/toastUtils';
import { CART_ITEMS_FETCH_SUCCESS } from '../../store/constant/constant';

const Cart = () => {
    const { cartItems, loading, error } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user.userInfo);
    const userId = userInfo ? userInfo.id : null;

    useEffect(() => {
        // if (userId) {
        retrievedData()
        // dispatch(fetchCartItems(userId)); 
        // }
    }, [dispatch,]);
    const retrievedData = async () => {
        const cartItem = await localStorage.getItem('cartItem');
        await dispatch({ type: CART_ITEMS_FETCH_SUCCESS, payload: JSON.parse(cartItem) });
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!cartItems || cartItems.length === 0) {
        return <div>No items in the cart</div>;
    }

    const handleIncrement = async (itemId, currentQty, productQty) => {
        let alreadyHaveInCart = cartItems.findIndex((val) => val._id == itemId)
        if (currentQty < productQty) {
            if (cartItems[alreadyHaveInCart].qty < productQty) {
                cartItems[alreadyHaveInCart].qty = cartItems[alreadyHaveInCart].qty + 1
                await localStorage.setItem('cartItem', JSON.stringify(cartItems));
                await dispatch({ type: CART_ITEMS_FETCH_SUCCESS, payload: cartItems });
            }
        } else {
            showToast('No more stock available', "error")
        }
    };

    const handleDecrement = async (itemId, currentQty) => {
        let alreadyHaveInCart = cartItems.findIndex((val) => val._id == itemId)
        if (currentQty > 1) {
            if (cartItems[alreadyHaveInCart].qty > 1) {
                cartItems[alreadyHaveInCart].qty = cartItems[alreadyHaveInCart].qty - 1
                await localStorage.setItem('cartItem', JSON.stringify(cartItems));
                await dispatch({ type: CART_ITEMS_FETCH_SUCCESS, payload: cartItems });
            }
        } else {
            // dispatch(removeFromCart(itemId, userId));
            removeItems(itemId)
        }
    };

    const removeItems = async (productId) => {
        let alreadyHaveInCart = cartItems.findIndex((val) => val._id == productId)
        cartItems.splice(alreadyHaveInCart, 1)
        await localStorage.setItem('cartItem', JSON.stringify(cartItems));
        await dispatch({ type: CART_ITEMS_FETCH_SUCCESS, payload: cartItems });
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item?.new_price * item?.qty, 0);
    };

         return (
        <>
            <ToastContainer />
            <h2 style={{ marginTop: '30px' }}>Cart</h2>
            <p ><Link className="continue" to="/summerSale">Continue shopping</Link></p>
            <div className="cart-container">
                <div className="cart-left">
                    <div className="billing-details">
                        {cartItems.map((item, index) => (
                            <div key={item?._id || index.toString()}>
                                {item && (
                                    <div className="cart-item">
                                        <img src={item?.image} alt={item?.name} className="cart-image" />
                                        <div className='item-name'>
                                            <h5 className="product-title">{item?.name}</h5>
                                            <div className='item-price'>
                                                <div className='bag-item-count'>
                                                    <IncDec
                                                        count={item?.qty}
                                                        onClickAdd={() => handleIncrement(item?._id, item?.qty, item?.quantity)}
                                                        onClickRemove={() => handleDecrement(item?._id, item?.qty)}
                                                    />
                                                </div>
                                                <span className="new-price">Rs, {item?.new_price}</span>
                                            </div>
                                            <p onClick={() => removeItems(item?._id)} className='remove'>Remove</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="checkout-right">
                    <h5 className="profile" style={{ marginBottom: '5px', textAlign: 'left' }}>ORDER NOTE</h5>
                    <div className="contact-cell">
                        <textarea
                            name="message"
                            className="contact-msg" rows="3"
                        ></textarea>
                    </div>
                    <p className='bag-total'>SUBTOTAL: <span>Rs, {calculateSubtotal()}</span></p>
                    <p style={{ fontSize: '11px' }}>Shipping, taxes, and discount codes calculated at checkout.</p>
                    <ButnField onClick={() => navigate("/checkout")} title="Proceed to Checkout" />
                </div>
            </div>
        </>
    );
};

export default Cart;
