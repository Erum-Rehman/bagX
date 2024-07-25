import React, { useState } from "react";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginUser } from '../../store/actions/userActions';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Field required"),
    password: Yup.string()
        .required("Field required")
});

const Login = () => {
    const dispatch = useDispatch();
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    };
    const handleLogin = async (values, { resetForm }) => {
        dispatch(loginUser(values));
        resetForm();
    };

    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={handleLogin}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <Form className="login-container" onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login Your Account</h2>
                        <div className="contact-cell">
                            <label>Email</label><br />
                            <Field
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                className="contact-field"
                            />
                            <ErrorMessage name="email" component="div" className="error" />
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
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <span style={{ textAlign: 'end', color: '#854a69' }}>Forgot Password?</span>

                        <div className="checkbox-div">
                            <Field type="checkbox" name="rememberMe" style={{ marginRight: '15px' }} />
                            <label style={{ color: "#505050", fontSize: '17px', fontWeight: '500' }}>Remember Me</label>
                        </div>
                        <ButnField title="LOGIN ACCOUNT" type="submit" />
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Login;
