import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrders } from '../../store/actions/checkoutActions';

const Orders = () => {
    const dispatch = useDispatch();
    const { order, loading, error } = useSelector(state => state.order);
    const userInfo = useSelector((state) => state.user.userInfo);
    const userId = userInfo ? userInfo.id : null;

    console.log({order})
    
    useEffect(() => {
        if (userId) {
            dispatch(getUserOrders(userId)); 
        }
    }, [dispatch, userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Your Orders</h2>
            <ul>
                {order.map(order => (
                    <li key={order._id}>
                        <p>Order ID: {order._id}</p>
                        {/* Display other order details */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
