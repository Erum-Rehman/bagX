import React, { useState } from 'react'
import './index.scss'
import reviews from '../../mock/review';

const CustomerReviews = () => {
    return (
        <>
        <div className="body">
                <div className="product-container">
                    {
                reviews.map((item) => (
                    <div className="reviews" key={item.id} >
                        {<div className="review_img">
                            <img src={`${window.location.origin}/${item.image}`} />
                        </div>}
                    </div>
                    ))
            }
                </div>
            </div>
           
        </>
    )
}
export default CustomerReviews;