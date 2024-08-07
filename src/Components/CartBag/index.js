import React, { useEffect, useRef } from "react";
import './index.scss';
import ButnField from './../Button';
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, updateCartItemQty, removeFromCart } from '../../store/actions/cartActions';
import IncDec from '../IncDec';
import { CART_ITEMS_FETCH_SUCCESS } from '../../store/constant/constant';
import { showToast } from '../../utils/toastUtils';

const drawerWidth = 180;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerRight({ handleCartClose, open }) {
    const theme = useTheme();
    const { cartItems, loading, error } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const drawerRef = useRef(null);
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
        return <div></div>;
    }

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item?.new_price * item?.qty, 0);
    };

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
    return (
        <Box sx={{ display: 'flex' }} >
            <Drawer
                ref={drawerRef}
                sx={{
                    width: 365,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 365,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader style={{ marginTop: '30px' }}>
                    <p className='bag-heading'>CART</p>
                    <IconButton onClick={handleCartClose} className="cart-button">
                        {theme.direction === 'ltr' ? <ClearIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <div className='shopping-bag-body'>
                        {cartItems?.length > 0 && cartItems?.map((item, index) => {
                            return (
                                <div key={item?._id || index.toString()} >
                                    {item && (
                                        <div className="bag-item">
                                            <img src={item?.image} alt={item?.name} className="bag-image" />
                                            <div className='item-name'>
                                                <h5 className="product-title">{item?.name}</h5>
                                                <div className='item-price'>
                                                    <div className='bag-item-count'>
                                                        <IncDec
                                                            count={item?.qty}
                                                            onClickAdd={() => handleIncrement(item?._id, item?.qty)}
                                                            onClickRemove={() => handleDecrement(item?._id, item?.qty)}
                                                        />
                                                    </div>
                                                    <span className="new-price">Rs, {item?.new_price}</span>
                                                </div>
                                            <p onClick={() => removeItems(item?._id)} className='removed'>Remove</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                        <p style={{ textAlign: 'left', fontSize: '12px' }}>ORDER NOTE</p>
                        <div className="contact-cell">
                            <textarea
                                name="message"
                                className="contact-msg" rows="3"
                            ></textarea>
                        </div>
                        <p className='bag-total'>SUBTOTAL: <span>Rs, {calculateSubtotal()}</span></p>
                        <p style={{ fontSize: '11px' }}>Shipping, taxes, and discount codes calculated at checkout.</p>
                        <div className='bag-btns'>
                            <br />
                            <ButnField onClick={() => navigate("/cart")} title="CART" />
                            <br />
                            <ButnField onClick={() => navigate("/checkout")} title="CHECK OUT" />
                        </div>
                    </div>
                </List>
            </Drawer>
        </Box>
    );
}
