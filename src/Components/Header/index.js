import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SlideshowBar from '../SlideshowBar/slideshowBar';
import PersistentDrawerRight from '../CartBag';

const Header = () => {
  const [iscartBag, setIsCartBag] = useState(false);
  const handleCartClose = () => {
    setIsCartBag(!iscartBag);
  };
  return (
    <>
      <PersistentDrawerRight open={iscartBag} handleCartClose={handleCartClose} />
      <div className='header'>
        <div className='announcement_bar'>
          <p>SUMMER SALE IS LIVE, LIMITED STOCK LEFT</p>
        </div>
        <div className='scrolling_bar'>
          <marquee direction="left" scrollamount="6" onmouseover="this.stop();" onmouseout="this.start();">
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
          </marquee>
        </div>
        <div className='main_header'>
          <div>
            <img src={require("../../assets/logo_shop.avif")} alt="Logo" className='logo' />
          </div>
          <ul className="nav-items">
            <li><Link to="/">SUMMER SALE</Link></li>
            <li><Link to="/bags">ALL BAGS</Link></li>
            <li><Link to="/newArrivals">NEW ARRIVALS</Link></li>
            <li><Link to="/customerReviews">CUSTOMER REVIEWS</Link></li>
            <li><Link to="/affiliateProgramme">AFFILIATE PROGRAMME</Link></li>
            <li><Link to="/wholeSale">WHOLE SALE</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
          <ul className='header_icons'>
            <li><LocalShippingOutlinedIcon className="nav-icons" /></li>
            <li><SearchOutlinedIcon className="nav-icons" /></li>
            <li><ShoppingBagOutlinedIcon className="nav-icons" onClick={handleCartClose} /></li>
          </ul>
        </div>
        <SlideshowBar />
      </div>
    </>
  );
};
export default Header;
