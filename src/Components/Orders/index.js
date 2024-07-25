import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrders } from '../../store/actions/checkoutActions';
import './index.scss';

const Orders = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user.userInfo);
    const userId = userInfo ? userInfo.id : null;

    const { order, loading, error } = useSelector(state => state.order);

    useEffect(() => {
        if (userId) {
            dispatch(getUserOrders(userId));
        }
    }, [dispatch, userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const deliveryInfo = order.length > 0 ? order[0].userDetails : {};

    return (
        <>
            <h2 style={{ margin: '30px 0' }}>Your Orders</h2>
            <div className="order-container">
                <div className="order-left">
                    {order.map(order => (
                        <div key={order._id}>
                            <p>
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
                                <p style={{ textAlign: 'right', fontWeight: '600', color: '#854a69' }}>SUBTOTAL:    Rs: {order.subtotal}</p>
                            </p>
                        </div>
                    ))}
                </div>
                <div className="order-right">
                    {order.length > 0 && (
                        <div>
                            <h5 className="profile" style={{ marginBottom: '5px', textAlign: 'left' }}>DELIVERY</h5>
                            <p>Name: {deliveryInfo.fullName}</p>
                            <p>Address: {deliveryInfo.address}</p>
                            <p>Phone: {deliveryInfo.phoneNumber}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Orders;
