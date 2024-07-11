import React, { useState } from 'react';
import './index.scss';
import PersistentDrawerLeft from '../Sidebar';
import PersistentDrawerRight from '../CartBag';
import MenuIcon from '@mui/icons-material/Menu';
import { width } from '@mui/system';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import Home from '../../pages/Home/Home';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import FadeMenu from '../MenuItem';
// import Orders from '../../pages/Orders';
import Order from '../../children/Order';

const PageNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [iscartBag, setIsCartBag] = useState(false)
    const navigate = useNavigate();
    const { cart: { totalPrice, products, quantity } } = useSelector(state => state);
    const user = useSelector((state) => state.user.user);

    const handleDrawerClose = () => {
        setIsOpen(!isOpen)
    }
    const handleCartClose = () => {
        setIsCartBag(!iscartBag)
    }
    return (
        <>
            <PersistentDrawerLeft open={isOpen} handleMenuClose={handleDrawerClose} />
            <PersistentDrawerRight open={iscartBag} handleCartClose={handleCartClose} />
            <div className="page-header">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={require("../../images/logo-2.png")} alt="" style={{ width: 129, height: 34 }} className='logo' /></Link>
                </div>
                <div className='product-search'>
                    <InputGroup className="mb-3 nav-input">
                        <FormControl
                            placeholder="Search Product"
                            aria-label="Search Product"
                            aria-describedby="basic-addon2"
                        />
                        <Button id="button-addon2" className='nav-butn'>
                            Search
                        </Button>
                    </InputGroup>
                </div>
                <div className='icon-bar'>
                    {user ?
                         <FadeMenu MenuTitle={user.name} classname="pagenav" options={[{ name: "Log Out" }, { name: "Account", href_link: "/account" },{name:"Order", href_link: "/order"}]} />
                        :<AiOutlineUser className="nav-icons" onClick={() => navigate("/login")} />
                    }
                    <MenuIcon className="nav-icons" onClick={handleDrawerClose} />
                    <div>
                        <AiOutlineShoppingCart className="nav-icons" onClick={handleCartClose} />
                        <div className='cart-count-2'>{quantity}</div>
                    </div>
                </div>
                <div className="nav-contact">

                    <BiPhoneCall className='nav-phone' />
                    <div className='numbers'>
                        <span className="line-number">Hot Line Number</span>
                        <p style={{ color: 'black', fontSize: '14px', fontWeight: '600' }}>+880 176 1111 456</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageNavbar;
