import React, { useEffect, useState } from "react";
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from "formik";
import { saveShippingAddress, placeOrder } from '../../store/actions/checkoutActions';
import { fetchCartItems, deleteCart, updateCartItemQty, removeFromCart } from '../../store/actions/cartActions';
import IncDec from '../../Components/IncDec';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { cartItems = [] } = cart;

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const [formData, setFormData] = useState({
        fullName: '',
        country: 'Pakistan',
        address: '',
        city: '',
        postCode: '',
        phoneNumber: '',
        email: '',
        paymentMethod: 'Cash on delivery',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(saveShippingAddress(formData));
        await dispatch(placeOrder({ cartItems, shippingAddress: formData, paymentMethod: formData.paymentMethod }));
        toast.success('Order placed successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        await dispatch(deleteCart());

        setFormData({
            fullName: '',
            country: 'Pakistan',
            address: '',
            city: '',
            postCode: '',
            phoneNumber: '',
            email: '',
            paymentMethod: 'Cash on delivery',
        });
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item?.product?.new_price * item?.qty, 0);
    };
    const handleIncrement = (itemId, currentQty) => {
        dispatch(updateCartItemQty(itemId, currentQty + 1));
    };

    const handleDecrement = (itemId, currentQty) => {
        if (currentQty > 1) {
            dispatch(updateCartItemQty(itemId, currentQty - 1));
        } else {
            dispatch(removeFromCart(itemId));
        }
    };
    return (
        <>
         <ToastContainer />
            <Formik
                initialValues={{
                    fullName: '',
                    country: '',
                    address: '',
                    city: '',
                    postCode: '',
                    phoneNumber: '',
                    email: '',
                }}
            >
                {({ errors, handleSubmit, touched }) =>
                    <>
                        <div style={{ borderTop: '1PX solid #eee ' }}>
                            <form className="checkout-container" onSubmit={submitHandler}>
                                <div className="checkout-left">
                                    <div className="billing-details">
                                        <h5 className="profile" style={{ marginBotton: '5px' }}>Billing Details</h5>
                                        <div className="contact-cell">
                                            <input type="text"
                                                value={formData.fullName}
                                                onChange={handleChange} required
                                                name="fullName"
                                                placeholder="Full name"
                                                className="contact-field"
                                            />
                                        </div>
                                        <div className="contact-cell">
                                            <label>Country / Region</label><br />
                                            <select className="contact-field"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}>
                                                <option className="dropdown">Country</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="India">India</option>
                                            </select>
                                        </div>
                                        <div className="contact-cell">
                                            <input
                                                type="text" name="address"
                                                placeholder="Address"
                                                value={formData.address}
                                                className="contact-field"
                                                onChange={handleChange} required />
                                        </div>
                                        <div className="contact-cell">
                                            <input
                                                type="text" name="city"
                                                placeholder="City"
                                                value={formData.city}
                                                className="contact-field"
                                                onChange={handleChange} />
                                        </div>
                                        <div className="contact-cell">
                                            <input
                                                placeholder="Post Code"
                                                className="contact-field"
                                                type="text" name="postCode"
                                                value={formData.postCode}
                                                onChange={handleChange} required />
                                        </div>
                                        <div className="contact-cell">
                                            <label>Additional Information </label><br />
                                            <input type="number" name="phoneNumber"
                                                placeholder="Your Phone Number"
                                                value={formData.phoneNumber}
                                                className="contact-field"
                                                onChange={handleChange} />
                                        </div>
                                        <div className="contact-cell">
                                            <input type="email" name="email"
                                                value={formData.email}
                                                onChange={handleChange} required
                                                placeholder="Your Email Address"
                                                className="contact-field"
                                            />
                                        </div>

                                    </div>

                                </div>
                                <div style={{ borderRight: '1PX solid #eee ' }}></div>
                                <div className="checkout-right">
                                    <div className="order-summary">
                                        <h5 className="profile" style={{ marginBotton: '5px' }}>Order Summary</h5>
                                    </div>
                                    {/* {cartItems.map(({ _id, product, qty }) => ( */}
                                    {cartItems.map((item,index) => (
                                        <div key={item?._id||index.toString()} className="order-side">
                                            {item?.product && (
                                                <div className="order-side">
                                                    <img src={item?.product?.image} alt={item?.product?.name} className="bag-image" />
                                                    <div className='item-name'>
                                                        <h5 className="product-title">{item?.product?.name}</h5>
                                                        <div className='item-price'>
                                                            <div className='bag-item-count'>
                                                                <IncDec
                                                                    count={item?.qty}
                                                                    onClickAdd={() => handleIncrement(item?._id, item?.qty)}
                                                                    onClickRemove={() => handleDecrement(item?._id, item?.qty)}
                                                                />
                                                            </div>
                                                            <span className="new-price">Rs, {item?.product?.new_price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className="subtotal">
                                        <div className="tax">
                                            <h6>Subtotal</h6>
                                            <span>Rs,{calculateSubtotal()}</span>
                                        </div>
                                        <div className="tax">
                                            <span>Shipping Fee</span>
                                            <span>Rs,200</span>
                                        </div>
                                    </div>
                                    <div className="subtotal">
                                        <div className="tax">
                                            <h6>Total</h6>
                                            <span>Rs,{calculateSubtotal() + 200}</span>
                                        </div>
                                    </div>
                                    <div className="order-summary">
                                        <h5 className="profile" style={{ marginBotton: '5px' }}>Payment</h5>
                                        <div className="payment-method">
                                            <input type="radio" id="cod" name="paymentMethod" value="Cash on delivery"
                                                checked={formData.paymentMethod === 'Cash on delivery'}
                                                onChange={handleChange} />
                                            <label style={{ marginLeft: '8px' }} htmlFor="cod">Cash on delivery</label>
                                            <p>
                                                Pay with cash upon delivery.
                                            </p>
                                        </div>
                                        <div className="payment-method2">
                                            <input type="checkbox" style={{ marginRight: '15px' }} required />
                                            <label style={{ color: "#505050", fontSize: '15px', fontWeight: '400' }}>
                                                I have read and agree to the website</label>
                                        </div>
                                        <a className="conditions" href="/terms">Terms and Conditions</a>
                                    </div>
                                    <br />
                                    <button className="order-btn" type="submit">Complete Order</button>
                                </div>
                            </form>
                        </div>
                    </>
                }
            </Formik>
        </>
    )
}

export default Checkout;
