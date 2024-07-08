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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useLocation, Link } from "react-router-dom";
import products from '../../mock/product';
import IncDec from '../IncDec';
import ClearIcon from '@mui/icons-material/Clear';
const drawerWidth = 180;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerRight({ handleCartClose, open }) {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

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
                            products.map((item, index) => (
                                <div key={item} className='bag-items'>
                                    <img src={`${window.location.origin}/${item.image}`} className="bag-image" />
                                    <div className='item-name'>
                                        <h5 className="product-title">{item.p_name}</h5>
                                        <div className='item-price'>
                                            <div className='bag-item-count'>
                                                <IncDec 
                                                onClickAdd={() => navigate("/cart")}
                                                    onClickRemove={() => navigate()}
                                                    count={item.count} 
                                                    />
                                            </div>
                                            <span className="new-price">{item.discountPrice}</span>
                                        </div>
                                    </div>                                    
                                </div>
                            ))
                        }
                        <p style={{textAlign: 'left', fontSize: '12px'}}>ORDER NOTE</p>
                        <div className="contact-cell">
                        <textarea
                            name="message"
                            className="contact-msg" rows="3"
                        ></textarea>
                    </div>
                        <p className='bag-total'>SUBTOTAL: <span>Rs, 4,500.00</span></p>
                        <p  style={{fontSize: '11px'}}>Shipping, taxes, and discount codes calculated at checkout.</p>
                        <div className='bag-btns'>
                            {/* <ButnField title="VIEW CART" onClick={() => navigate("/cart")} /> */}
                            <br />
                            <ButnField onClick={() => navigate("/checkout")} title="CHECK OUT" />
                        </div>
                    </div>
                </List>

                <Divider />
            </Drawer>
        </Box>
    );
}
