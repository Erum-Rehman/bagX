import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <>
            <div className="products"  >
                <div className='tag'>Sale</div>
                <Link to={`/product/${product._id}`}>
                <div className="product-img">
                    <img src={product.image} alt={product.name} />
                </div>
                </Link>
                <p className="product-title">{product.name}</p>
                <span className="price"><s>Rs.{product.old_price}</s></span>
                &ensp;<span className="price">Rs.{product.new_price}</span>
            </div>
        </>
    );
};
export default Product;