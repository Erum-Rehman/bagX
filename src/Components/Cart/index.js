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

const Cart = () => {
    const { cartItems, loading, error } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user.userInfo);
    const userId = userInfo ? userInfo.id : null;

    useEffect(() => {
        if (userId) {
            dispatch(fetchCartItems(userId)); 
        }
    }, [dispatch, userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!cartItems || cartItems.length === 0) {
        return <div>No items in the cart</div>;
    }

    const handleIncrement = (itemId, currentQty, productQty) => {
        if (currentQty < productQty) {
            dispatch(updateCartItemQty(itemId, currentQty + 1, userId));
        } else {
        // showToast('No more stock available', "error")
            toast.error('No more stock available');
        }
    };

    const handleDecrement = (itemId, currentQty) => {
        if (currentQty > 1) {
            dispatch(updateCartItemQty(itemId, currentQty - 1, userId));
        } else {
            dispatch(removeFromCart(itemId, userId));
        }
    };

    const removeItems = (productId) => {
        dispatch(removeItem(productId, userId));
        console.log({userId})
        toast.success('Item Removed successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item?.product?.new_price * item?.qty, 0);
    };

    return (
        <>
            <ToastContainer />
            <h2 style={{ marginTop: '30px' }}>Cart</h2>
            <p style={{ fontSize: '11px', color: 'black!important' }}><Link to="/summerSale">Continue shopping</Link></p>
            <div className="cart-container">
                <div className="cart-left">
                    <div className="billing-details">
                        {cartItems.map((item, index) => (
                            <div key={item?._id || index.toString()}>
                                {item?.product && (
                                    <div className="cart-item">
                                        <img src={item?.product?.image} alt={item?.product?.name} className="cart-image" />
                                        <div className='item-name'>
                                            <h5 className="product-title">{item?.product?.name}</h5>
                                            <div className='item-price'>
                                                <div className='bag-item-count'>
                                                    <IncDec
                                                        count={item?.qty}
                                                        onClickAdd={() => handleIncrement(item?._id, item?.qty, item?.product?.quantity)}
                                                        onClickRemove={() => handleDecrement(item?._id, item?.qty)}
                                                    />
                                                </div>
                                                <span className="new-price">Rs, {item?.product?.new_price}</span>
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
