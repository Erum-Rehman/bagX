import React, { useState } from "react";
import Login from "../../Components/RegistrationLogin/Login";
import Registration from '../../Components/RegistrationLogin/Register'
import { Route, Routes, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const LoginForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [userId, setUserId] = useState({})

    return (
        <>
            <ToastContainer />
            <div className="Login-page">
                <div className="login-btn">
                    <button className="butn-field" onClick={() => navigate("/register")}>Register</button>
                    <button className="butn-field" onClick={() => navigate("/login")}>Login</button>
                </div>
                {location.pathname === "/register" ? <Registration /> : <Login />}
            </div>
        </>
    )
}
export default LoginForm;



