import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrders } from '../../store/actions/checkoutActions';
import './index.scss';

const Orders = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user.userInfo);
    const userId = userInfo ? userInfo.id : null;

    const { order, loading, error } = useSelector(state => state.order);

    console.log({ order })
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h2 style={{ margin: '30px 0' }}>Your Orders</h2>
            <div className="order-container">
                <div className="order-left">
                        {order.map(order => (
                            <div >
                                <p key={order._id}>
                                    <p style={{ textAlign: 'left' }}>Order ID: {order._id}</p>
                                    {order.items.map(item => (
                                        <div key={item._id} className="order-item">
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={item.image} alt={item.name} className="order-image" />
                                                <p className="Order-title">{item.name}</p>
                                            </div>
                                            <div className='order-name'>
                                                <span style={{ fontSize: '15px', fontWeight: 600 }}>Rs, {item.new_price}</span>
                                                <span className="new-price">Qty:  {item.quantity}</span>
                                            </div>
                                        </div>
                                    ))}
                                    <p style={{ textAlign: 'right', fontWeight: '600' }}>SUBTOTAL:    Rs: {order.subtotal}</p>
                                </p>
                            </div>
                        ))}
                </div>
                <div className="order-right">
                    <h5 className="profile" style={{ marginBottom: '5px', textAlign: 'left' }}>DELIVERY</h5>
                    {order.map(order => (
                        <div >
                            <p key={order._id}>
                                <div>
                                    <p>Name: {order.userDetails.fullName}</p>
                                    <p>Address: {order.userDetails.address}</p>
                                    <p>Phone: {order.userDetails.phoneNumber}</p>
                                </div>
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default Orders;
