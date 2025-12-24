import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

import './Checkout.css';

const Checkout = () => {
    const { cart, total, clearCart } = useCart();
    const navigate = useNavigate();

    const handlePayment = () => {
        alert('Compra realizada con éxito.');
        clearCart();
        navigate('/home');
    };

    if (cart.length === 0) return <Layout><div className="checkout__empty">Carrito vacío</div></Layout>;

    return (
        <Layout>
            <div className="checkout">
                <h1>Resumen de compra</h1>
                <div className="checkout__container">
                    {cart.map(item => (
                        <div key={item.id} className="checkout__item">
                            <span>{item.title} (x{item.quantity})</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="checkout__total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <Button variant="primary" onClick={handlePayment} className="checkout__button">Pagar ahora</Button>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
