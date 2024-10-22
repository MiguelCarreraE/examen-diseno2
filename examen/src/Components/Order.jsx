import React from 'react';
import '../styles/Order.css';

export const Order = ({ orderItems }) => {
    const calculateTotal = () => {
        let total = 0;
        orderItems.forEach(item => {
            total += item.price;
        });
        return total;
    };

    return (
        <div className="order-container">
            <h2>Orden</h2>
            {orderItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="order-card">
                    <h3>{item.id}.- {item.name}</h3>
                    <p>Precio: ${item.price}</p>
                </div>
            ))}
            <h3>Total: ${calculateTotal()}</h3>
        </div>
    );
};

export default Order;