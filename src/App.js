import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { loadCartFromLocalStorage } from './store/actions/cartActions';
import Header from './Components/Header';
import ScreenFooter from './Components/Footer/ScreenFooter';
import SummerSale from './pages/Collection/SummerSale';
import Contact from './pages/Contact';
import WholeSale from './pages/WholeSale';
import ProductDetail from './pages/ProductDetail';
import AffiliateProgram from './pages/AffiliateProgram/index';
import CustomerReviews from './pages/CustomerReviews';
import Bags from './pages/Collection/Bags';
import NewArrivals from './pages/Collection/NewArrivals';
import { Route, Routes } from "react-router-dom";
import Checkout from './pages/Checkout';
import Cart from './Components/Cart';
import Home from './pages/Home/Home';
import Login from './pages/LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from './Components/Orders';
import ChatbotComponent from './chatbot/ChatbotComponent';
function App() {
  return (
    <div className="App"> 
     <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/summerSale" element={<SummerSale />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/wholeSale" element={<WholeSale />}></Route>
        <Route path="/affiliateProgramme" element={<AffiliateProgram />}></Route>
        <Route path="/customerReviews" element={<CustomerReviews />}></Route>
        <Route path="/bags" element={<Bags />}></Route>
        <Route path="/newArrivals" element={<NewArrivals />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
        <Route path="/register" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <ChatbotComponent/>
      <ScreenFooter /> 
    </div>
  ); 
}

export default App;
                                                