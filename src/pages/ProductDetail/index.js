import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from "../../children/Review";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../../Components/Rating";
import ButnField from "../../Components/Button";
import { listProductDetails } from '../../store/actions/productAction';
import { addToCart } from '../../store/actions/cartActions';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { product } = productDetails;
    const navigate = useNavigate();

    const [qty, setQty] = useState(1);

    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [dispatch, id]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        navigate("/cart")
    };

    return (
        <>
            <div className="imgs-detail">
                <div className="product-bar">
                    <div className="side-imgs">
                        <button>
                            <img src={require("../../assets/whole_sale.png")} alt="product" />
                        </button>
                        <button>
                            <img src={require("../../assets/whole_sale.png")} alt="product" />
                        </button>
                        <button>
                            <img src={require("../../assets/whole_sale.png")} alt="product" />
                        </button>
                    </div>
                    <div className="product-imgs">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
                <div className="product-description">
                    <h3>{product.name}</h3>
                    <div className="review_div">
                        <div className="review-rating">
                            <br />
                            Rating (4.8)<br />
                            <Rating />
                        </div>
                        <div>
                            <br />Reviews <br />
                            <span style={{ fontSize: '27px', fontWeight: '500' }}>28</span>
                        </div>
                    </div>
                    <span style={{ fontSize: '18px' }}><s>Rs,{product.old_price}</s></span>
                    &ensp;<span style={{ fontSize: '18px' }}>Rs,{product.new_price}</span>
                    <p style={{ fontSize: '11px' }}>Shipping calculated at checkout</p>
                    <div className="details-btn">
                        <ButnField title="ADD TO CART" onClick={addToCartHandler} className="cart_btn" />
                    </div>
                    <p>PRODUCT DETAILS</p>
                    <ul className="product-info">
                        <li>
                            <span>Package Including: </span>3 Pcs bags as the picture show (Large Bag + Medium Shoulder Bag + Wallet).
                        </li>
                        <li>
                            <span>Structure: </span>Big Tote/Shoulder Bag: Large capacity can hold books, umbrellas, iPad, purses, and other things comfortably.
                        </li>
                        <li>
                            <span>Material: </span>High-Quality Faux Leather
                        </li>
                    </ul>
                    <p style={{ fontSize: '15px' }}>DESCRIPTION</p>
                    <p style={{ fontSize: '14px' }}>Keep your hands free while keeping all your belongings safe and secure in this ultra-roomy
                        3-piece bag. A must-have design for those who love minimalist style with maximum function,
                        this bag hits all the right notes. With an elegant wallet with a premium golden chain
                        attached for convenience and ease of access and to use as a cross-body, this handy carrier
                        is set to be your new daily staple. Berrybags designed it with dedication so you can pair it with all of your outfits,
                        from dresses to jeans, to look effortlessly gorgeous.</p>
                </div>
            </div>
            <h1 className="product-heading">Reviews</h1>
            <div className="details-container">
                <div className="product-detail">
                    <Review />
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
