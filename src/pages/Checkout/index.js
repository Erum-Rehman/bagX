import React, { useState } from "react";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from "formik";

const Checkout = () => {

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
                {({ errors, handleChange, handleSubmit, setFieldValue, touched }) =>
                    <>
                        <form className="checkout-container" onSubmit={handleSubmit}>
                            <div className="checkout-left">
                                <div className="billing-details">
                                    <div className="profile-checkout">
                                        <input type="checkbox" style={{ marginRight: '15px' }}
                                        />
                                        <label style={{ color: "#505050", fontSize: '17px', fontWeight: '600' }}>
                                            Continue with the Profile Data</label>
                                    </div>
                                    <h5 className="profile" style={{ marginBotton: '5px' }}>Billing Details</h5>
                                    <div className="contact-cell">
                                        <label>Full Name </label><br />
                                        <input type="text"
                                            disabled
                                            name="name"
                                            placeholder="Your Full name"
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <label>Country / Region</label><br />
                                        <select className="contact-field"
                                            name="country"
                                            disabled
                                            onChange={handleChange}>
                                            <option className="dropdown">Country </option>
                                            <option value="Pakistan" >Pakistan </option>
                                            <option value="India" >India </option>
                                            <option value="America">America</option>
                                            <option value="London">London</option>
                                        </select>
                                    </div>
                                    <div className="contact-cell">
                                        <label>Street Address</label><br />
                                        <input type="text"
                                            name="street"
                                            placeholder="House and street name"
                                            // value={values.street}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <label>Address </label><br />
                                        <input
                                            type="text" name="address"
                                            disabled
                                            placeholder="enter your address"
                                            // value={values.address}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <select className="contact-field"
                                            disabled
                                            name="city"
                                            onChange={handleChange}
                                        >
                                            <option className="dropdown">Town/City </option>
                                            <option value="Karachi" >Karachi </option>
                                            <option value="Lahore">Lahore</option>
                                            <option value="Islamabad">Islamabad</option>

                                        </select>
                                    </div>
                                    <div className="contact-cell">
                                        <input type="Number" name="code"
                                            placeholder="Post Code"
                                            // value={values.code}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <label>Additional Information </label><br />
                                        <input type="number" name="contact"
                                            disabled
                                            placeholder="Your Phone Number"
                                            // value={values.contact}
                                            className="contact-field"
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <input type="email" name="email"
                                            disabled
                                            placeholder="Your Email Address"
                                            className="contact-field"
                                            // value={values.email}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="contact-cell">
                                        <textarea
                                            className="contact-msg"
                                            rows="6"
                                            // value={values.msg}
                                            onChange={handleChange}
                                            name="msg"
                                            placeholder="Order Notes (optional)"></textarea>
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