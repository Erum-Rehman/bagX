import React, { useState } from "react";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { registerUser } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegexExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/);
const RegistrationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Field required"),
    password: Yup.string()
        .min(8, "Less than limit")
        .max(20, "Exceeds the limit")
        .matches(RegexExp, "Wrong pattern")
        .required("Field required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required("Field required"),
    firstName: Yup.string().required("Field required"),
    lastName: Yup.string().required("Field required"),
    city: Yup.string().required("Field required"),
    contact: Yup.number().required("Field required"),
    address: Yup.string().required("Field required"),
    country: Yup.string().required("Field required")
});

const Registration = () => {
    const dispatch = useDispatch();
    const [passwordType, setPasswordType] = useState("password");
    const [ConfrmpasswordType, setConfrmpasswordType] = useState("password");

    const togglePassword = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }

    const toggleConfrmPassword = () => {
        setConfrmpasswordType(ConfrmpasswordType === "password" ? "text" : "password");
    }

    const handleRegistration = async (values, { resetForm }) => {
        dispatch(registerUser(values));
        toast.success('User Registered successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        resetForm();
    }

    return (
        <>
            <ToastContainer />
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    city: "",
                    contact: "",
                    address: "",
                    country: "",
                    password: "",
                    email: "",
                    confirmPassword: "",
                }}
                validationSchema={RegistrationSchema}
                onSubmit={handleRegistration}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form className="login-container" onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Register Your Account</h2>

                        <div className="contact-cell">
                            <label>First Name *</label><br />
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="Your first name"
                                className="contact-field"
                            />
                            <ErrorMessage name="firstName" component="div" className="error" />
                        </div>
                        <div className="contact-cell">
                            <label>Last Name *</label><br />
                            <Field
                                type="text"
                                name="lastName"
                                placeholder="Your Last name"
                                className="contact-field"
                            />
                            <ErrorMessage name="lastName" component="div" className="error" />
                        </div>
                        <div className="contact-cell">
                            <label>Email *</label><br />
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="contact-field"
                            />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="contact-cell">
                            <label>Contact *</label><br />
                            <Field
                                type="number"
                                name="contact"
                                placeholder="XX-"
                                className="contact-field"
                            />
                            <ErrorMessage name="contact" component="div" className="error" />
                        </div>

                        <div className="contact-cell">
                            <label>Address *</label><br />
                            <Field
                                type="text"
                                name="address"
                                placeholder="Enter your address"
                                className="contact-field"
                            />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>

                        <div className="contact-cell">
                            <label>City *</label><br />
                            <Field as="select" name="city" className="contact-field">
                                <option value="">Town/City</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Islamabad">Islamabad</option>
                            </Field>
                            <ErrorMessage name="city" component="div" className="error" />
                        </div>

                        <div className="contact-cell">
                            <label>Country *</label><br />
                            <Field as="select" name="country" className="contact-field">
                                <option value="">Select Country</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="India">India</option>
                                <option value="America">America</option>
                                <option value="London">London</option>
                            </Field>
                            <ErrorMessage name="country" component="div" className="error" />
                        </div>

                        <div className="contact-cell">
                            <label>Password *</label><br />
                            <Field
                                type={passwordType}
                                name="password"
                                placeholder="***********"
                                className="contact-field"
                            />
                            <button type="button" className="password-login" onClick={togglePassword}>
                                {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                            </button>
                            <ErrorMessage name="password" component="p" className="error" />
                        </div>

                        <div className="contact-cell">
                            <label>Confirm Password *</label><br />
                            <Field
                                type={ConfrmpasswordType}
                                name="confirmPassword"
                                placeholder="***********"
                                className="contact-field"
                            />
                            <button type="button" className="password-login" onClick={toggleConfrmPassword}>
                                {ConfrmpasswordType === "password" ? <FiEyeOff /> : <FiEye />}
                            </button>
                            <ErrorMessage name="confirmPassword" component="p" className="error" />
                        </div>

                        <div className="contact-cell">
                            <input type="checkbox" style={{ marginRight: '15px' }} />
                            <label style={{ color: "#505050", fontSize: '17px', fontWeight: '500' }}>
                                I agree to the Terms &amp; Policy
                            </label>
                        </div>
                        <ButnField title="CREATE AN ACCOUNT" type="submit" />
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Registration;
