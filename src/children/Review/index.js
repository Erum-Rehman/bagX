import React, { Component } from "react";
import './index.scss';
import { AiOutlineLike, AiOutlineHeart } from "react-icons/ai";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from "../../Components/Rating";

const Review = () => {
    return (
        <>
            <div className="reviews_bar">
                <div className="review-container">
                    <div className="review-header">
                        {/* <img src={require("../../images/profile.jpg")} /> */}
                        <img src={require("../../assets/profile.jpg")} />

                        <div className="comment-head">
                            <div className="dispaly_flex" >
                            <h6> Jenny Wilson</h6>
                            <span> - 8th Jan 2021</span>
                            </div>
                            <Rating/>
                        </div>
                    </div>
                    <p>
                        Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenatis leo et dictum finibus.
                        Nulla vulputate dolor sit amet tristique dapibus. Gochujang ugh viral, butcher pabst put a bird on it
                        meditation  austin.
                    </p>
                    <div className="review-icon">
                        <AiOutlineLike />
                        <AiOutlineHeart className="heart" />
                        <span>Reply</span>
                    </div>
                </div>
                <div className="review-container">
                <div className="review-header">
                        <img src={require("../../assets/profile.jpg")} />
                        <div className="comment-head">
                            <div className="dispaly_flex" >
                            <h6> Jenny Wilson</h6>
                            <span> - 8th Jan 2021</span>
                            </div>
                            <Rating/>
                        </div>
                    </div>
                    <p>
                        Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenatis leo et dictum finibus.
                        Nulla vulputate dolor sit amet tristique dapibus. Gochujang ugh viral, butcher pabst put a bird on it
                        meditation  austin.
                    </p>
                    <div className="review-icon">
                        <AiOutlineLike />
                        <AiOutlineHeart className="heart" />
                        <span>Reply</span>
                    </div>
                </div>
                <div className="review-form">
                    <h4>Leave A Comment </h4>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <div className="contact-cell">
                        <label>Your Name</label><br />
                        <input type="text" placeholder="enter your name" className="contact-field" />
                    </div>
                    <div className="contact-cell">
                        <label>Your Email</label><br />
                        <input type="email" placeholder="enter your email" className="contact-field" />
                    </div>
                    <div className="contact-cell">
                        <textarea className="contact-msg" rows="3"></textarea>
                    </div>
                    <p className="rating">Your Rating</p>
                    <div className="rating-div">
                        <Rating />
                    </div>

                    <Button id="button-addon2" className='msg-btn'>
                        Post Comment
                    </Button>
                </div>


            </div>

        </>
    )
}
export default Review;