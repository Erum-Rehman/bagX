import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions';
import IncDec from '../IncDec';
import { useNavigate } from "react-router-dom";
import './index.scss';
import ButnField from './../Button';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  if (!cart.items || !Array.isArray(cart.items)) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <>
      <h2 style={{marginTop: '30px'}}>Cart</h2>
      <div className="cart-container">
        <div className="checkout-left">
          <div className="billing-details">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
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
                {/* <IncDec
            onClickAdd={("/cart")}
            onClickRemove={"/cart"}
            count={item.count}
          /> */}

              </div>
            ))}
          </div>
        </div>
        <div className="checkout-right">
          {/* <div className="order-summary">  */}
            <h5 className="profile" style={{ marginBotton: '5px', textAlign: 'left' }}>ORDER NOTE</h5>
          {/* </div> */}
          <div className="contact-cell">
            <textarea
              name="message"
              className="contact-msg" rows="3"
            ></textarea>
          </div>
          <ButnField onClick={() => navigate("/checkout")} title="Proceed to Checkout" />
        </div>
      </div>
    </>
  );
};

export default Cart;







