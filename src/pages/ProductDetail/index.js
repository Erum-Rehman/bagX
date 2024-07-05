import React, { useState } from "react";
import './index.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from "../../children/Description";
import Review from "../../children/Review";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Rating from "../../Components/Rating";
import IncDec from "../../Components/IncDec/index";

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div className="imgs-detail">
                <div className="product-bar">
                    <div className="side-imgs">
                        <button >
                            <img src={require("../../assets/whole_sale.png")} />
                        </button>
                        <button>
                            <img src={require("../../assets/whole_sale.png")} />

                        </button>
                        <button>
                            <img src={require("../../assets/whole_sale.png")} />

                        </button>
                    </div>
                    <div className="product-imgs">
                        {/* <img src={image} /> */}
                        <img src={require("../../assets/whole_sale.png")} />

                    </div>
                </div>

                <div className="product-description">
                <h3>name</h3>

                    <div className="review-rating">
                    <br/>
                        <Rating />
                        <span className="review">(32 Review)</span>
                    </div>
                    <h4>discountedPrice</h4>
                    <p>description</p>
                    <div className="details-btn">
                        <div className="product-inc">
                            <IncDec
                                onClickAdd={() => navigate("/cart")}
                                onClickRemove={() => navigate()}
                            // count={item.count}
                            />
                        </div>
                        <Button id="button-addon2" className='msg-btn' onClick={() => navigate("/cart")}>
                            button
                        </Button>
                    </div>

                    <ul className="product-info">
                        <li>
                            <span>Product Type: </span>Organic
                        </li>
                        <li>
                            <span>MFG: </span>July 4.2021
                        </li>
                        <li>
                            <span>Life: </span>05 Days
                        </li>
                        <li>
                            <span>Category: </span>Grocery &amp; Staples
                        </li>
                    </ul>
                </div>
            </div>

            <h1 className="product-heading">Product Details</h1>
            <div className="details-container">
                <div className="product-detail">
                    <div className="product-detail-btn">
                        <Button id="button-addon2" className='detail-butn2' onClick={() => navigate("/description")}>
                            Description
                        </Button>
                        <Button id="button-addon2" className='detail-butn2' onClick={() => navigate("/review")}>
                            Our Review (2)
                        </Button>
                    </div>
                    {location.pathname === "/description" ? <Description />
                        : <Review />}
                </div>
            </div>
        </>
    )
}
export default ProductDetails