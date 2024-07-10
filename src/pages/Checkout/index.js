import React, { useState } from "react";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
// import { clearCart } from '../../store/actions/cartActions';

const Checkout = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState({
        email: '',
        name: '',
        country: '',
        address: '',
        city: '',
        phone: '',
        postalCode: '',
    });

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = {
            items: cart.items,
            userDetails,
        };
        // Send order to the backend
        await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        // dispatch(clearCart());
        // alert('Order placed successfully!');
    };

    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    city: "",
                    street: "",
                    contact: "",
                    code: "",
                    address: "",
                    country: "",
                    email: "",
                    msg: "",
                }}
            >
                {({ errors, handleSubmit, setFieldValue, touched }) =>
                    <>
                        <form className="checkout-container" onSubmit={handleSubmit}>
                            <div className="checkout-left">
                                <div className="billing-details">
                                    <h5 className="profile" style={{ marginBotton: '5px' }}>Billing Details</h5>
                                    <div className="contact-cell">
                                        <input type="text"
                                            value={userDetails.name} 
                                            onChange={handleChange} required
                                            name="name"
                                            placeholder="Full name"
                                            className="contact-field"
                                        />
                                    </div>
                                    <div className="contact-cell">
                                        <label>Country / Region</label><br />
                                        <select className="contact-field"
                                            name="country"
                                            onChange={handleChange}>
                                            <option className="dropdown">Country </option>
                                            <option value="Pakistan" >Pakistan </option>
                                            <option value="India" >India </option>
                                        </select>
                                    </div>
                                    <div className="contact-cell">
                                        <input
                                            type="text" name="address"
                                            placeholder="Address"
                                            value={userDetails.address}
                                            className="contact-field"
                                            onChange={handleChange} required/>
                                    </div>
                                    <div className="contact-cell">
                                        <input
                                            type="text" name="city"
                                            placeholder="City"
                                            value={userDetails.city}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <input
                                            placeholder="Post Code"
                                            className="contact-field"
                                            type="text" name="postalCode"
                                            value={userDetails.postalCode}
                                            onChange={handleChange} required />
                                    </div>
                                    <div className="contact-cell">
                                        <label>Additional Information </label><br />
                                        <input type="number" name="phone"
                                            placeholder="Your Phone Number"
                                            value={userDetails.phone}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <input type="email" name="email"
                                            value={userDetails.email} 
                                            onChange={handleChange} required
                                            placeholder="Your Email Address"
                                            className="contact-field"
                                        />
                                    </div>

                                </div>

                            </div>
                            <div className="checkout-right">
                                <div className="order-summary">
                                    <h5 className="profile" style={{ marginBotton: '5px' }}>Order Summary</h5>
                                </div>
                                <div className="subtotal">
                                    <div className="tax">
                                        <h6>Subtotal</h6>
                                        <span>$4300</span>
                                    </div>
                                    <div className="tax">
                                        <span>Tax</span>
                                        <span>$5</span>
                                    </div>
                                    <div className="tax-inc">
                                        <span style={{ fontWeight: '400' }}>Total ( tax incl. )</span>
                                        <span style={{ color: 'black' }}>$4300</span>
                                    </div>
                                </div>
                                <div className="subtotal">
                                    <div className="tax">
                                        <h6>Total</h6>
                                        <span>$4300</span>
                                    </div>
                                </div>
                                <div className="order-summary">
                                    <h5 className="profile" style={{ marginBotton: '5px' }}>Payment</h5>
                                    <div className="payment-method">
                                        <input type="radio" />
                                        <label style={{ marginLeft: '8px' }}>Cash on delivery</label>
                                        <p>
                                            Pay with cash upon delivery.
                                        </p>
                                    </div>
                                    <div className="payment-method2">
                                        <input type="checkbox" style={{ marginRight: '15px' }} />
                                        <label style={{ color: "#505050", fontSize: '15px', fontWeight: '400' }}>
                                            I have read and agree to the website</label>
                                    </div>
                                    <a className="conditions">Terms and Conditions</a>
                                </div>
                                <br/>
                                <button className="order-btn" type="submit">Complete Order</button>
                            </div>
                        </form>
                    </>
                }
            </Formik>
        </>
    )
}
export default Checkout