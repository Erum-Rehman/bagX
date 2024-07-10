import * as React from 'react';
import './index.scss';
import { TiTimes } from "react-icons/ti";
import ButnField from './../Button';
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import products from '../../mock/product';
import IncDec from '../IncDec';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector, useDispatch } from 'react-redux';
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
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    if (!cart.items || !Array.isArray(cart.items)) {
        return ;
      }
    const calculateSubtotal = () => {
        if (!cart.items || cart.items.length === 0) {
            return 0; // Return 0 if cart is empty
        }
       
        let subtotal = 0;
        cart.items.forEach(item => {
            if (item.new_price && item.count) {
                subtotal += item.new_price * item.count;
            }
        });
    
        return subtotal;
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
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
                    <IconButton onClick={handleCartClose}>
                        {theme.direction === 'ltr' ? <ClearIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <div className='shopping-bag-body'>
                        {
                            cart.items.map((item) => (
                                <div key={item.id} className='bag-items'>
                                    <img src={item.image} alt={item.name} className="bag-image" />
                                    <div className='item-name'>
                                        <h5 className="product-title">{item.name}</h5>
                                        <div className='item-price'>
                                            <div className='bag-item-count'>
                                                <IncDec
                                                    onClickAdd={() => navigate("/cart")}
                                                    onClickRemove={() => navigate()}
                                                    count={item.count}
                                                />
                                            </div>
                                            <span className="new-price">Rs,{item.new_price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <p style={{ textAlign: 'left', fontSize: '12px' }}>ORDER NOTE</p>
                        <div className="contact-cell">
                            <textarea
                                name="message"
                                className="contact-msg" rows="3"
                            ></textarea>
                        </div>
                        <p className='bag-total'>SUBTOTAL: <span>Rs, {calculateSubtotal().toFixed(2)}</span></p>
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
