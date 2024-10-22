import React, { useState } from 'react';
import '../styles/Payment.css';

export const Payment = ({ orderItems, clearOrder }) => {
    const [paymentComplete, setPaymentComplete] = useState(false);

    const handlePayment = () => {
        clearOrder();
        setPaymentComplete(true);
    };

    return (
        <div className="payment-container">
            <h2>Pago</h2>
            {paymentComplete ? (
                <p className="payment-message">Pago realizado</p>
            ) : (
                <button className="payment-button" onClick={handlePayment}>Pagar</button>
            )}
        </div>
    );
};

