import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SlideshowBar from '../SlideshowBar/slideshowBar';
import PersistentDrawerRight from '../CartBag';
import { useLocation } from "react-router-dom";
import PersistentDrawerLeft from './PageNavbar';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, searchProducts } from '../../store/actions/productAction';

const Header = () => {
  const [isCartBag, setIsCartBag] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [width, setWidth] = useState(window.screen.width);
  const location = useLocation();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, filteredProducts } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    dispatch(searchProducts(searchQuery));
  }, [dispatch, searchQuery]);

  const handleCartClose = () => {
    setIsCartBag(!isCartBag);
  };

  const handleMenuClose = () => {
    setIsNavbar(!isNavbar);
  };

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchQuery('')
  };

  const updateDimensions = () => {
    setWidth(window.screen.width);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <PersistentDrawerRight open={isCartBag} handleCartClose={handleCartClose} />
      <PersistentDrawerLeft open={isNavbar} handleMenuClose={handleMenuClose} />
      <div className='header'>
        <div className='announcement_bar'>
          <p>SUMMER SALE IS LIVE, LIMITED STOCK LEFT</p>
        </div>
        <div className='scrolling_bar'>
          <marquee direction="left" scrollamount="6">
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
            <p> Summer Sale is Live - Upto 70% Off</p>
          </marquee>
        </div>
        <div className='main_header'>
          {isSearchVisible ? (
            <div className='search-bar'>
              <SearchOutlinedIcon className="nav-icons" onClick={handleSearchToggle} />
              <input
                type="text"
                placeholder="Search our store"
                value={searchQuery}
                onChange={handleSearchInput}
              />
              <button onClick={handleSearchToggle}>X</button>
            </div>
          ) : (
            <>
              <div>
                <img src={require("../../assets/logo_shop.avif")} alt="Logo" className='logo' />
              </div>
              {width >= 767 ?
                <ul className="nav-items">
                  <li><Link to="/summerSale">SUMMER SALE</Link></li>
                  <li><Link to="/bags">ALL BAGS</Link></li>
                  <li><Link to="/customerReviews">CUSTOMER REVIEWS</Link></li>
                  <li><Link to="/affiliateProgramme">AFFILIATE PROGRAMME</Link></li>
                  <li><Link to="/wholeSale">WHOLE SALE</Link></li>
                  <li><Link to="/contact">CONTACT US</Link></li>
                </ul>
                :
                <MenuIcon className="menu-icon" onClick={handleMenuClose} />
              }

              <ul className='header_icons'>
                <li><LocalShippingOutlinedIcon className="nav-icons" /></li>
                <li><SearchOutlinedIcon className="nav-icons" onClick={handleSearchToggle} /></li>
                <li><ShoppingBagOutlinedIcon className="nav-icons" onClick={handleCartClose} /></li>
              </ul>
            </>
          )}
        </div>
        {location.pathname !== "/checkout" && !isSearchVisible && <SlideshowBar />}
      </div>
      <div className="product-list">
      {searchQuery && filteredProducts && filteredProducts.map(item => (
          <div key={item.id} className="product-item">
                <div className='tag'>Sale</div>
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-details">
              <h2>{item.name}</h2>
              <span className="price"><s>Rs.{item.old_price}</s></span>
                &ensp;<span className="price">Rs.{item.new_price}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
