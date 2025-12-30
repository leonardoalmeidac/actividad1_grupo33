import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

import './Checkout.css';

const Checkout = () => {
    const { cart, total, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePayment = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.address) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        alert(`¡Gracias ${formData.name}! Tu pedido se ha realizado con éxito. Te hemos enviado un correo a ${formData.email}.`);
        clearCart();
        navigate('/home');
    };

    if (cart.length === 0) {
        return (
            <Layout>
                <div className="checkout__empty">
                    <h2>Tu carrito está vacío</h2>
                    <Button onClick={() => navigate('/home')}>Volver a la tienda</Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="checkout">
                <h1 className="checkout__title">Finalizar su compra</h1>

                <div className="checkout__grid">
                    <section className="checkout__section">
                        <h2 className="checkout__subtitle">Datos de envío</h2>
                        <form className="checkout__form" onSubmit={handlePayment}>
                            <div className="checkout__field">
                                <label className="checkout__label">Nombre completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="checkout__input"
                                    placeholder="Ej: Juan Pérez"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="checkout__field">
                                <label className="checkout__label">Correo electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="checkout__input"
                                    placeholder="ejemplo@correo.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="checkout__field">
                                <label className="checkout__label">Dirección de entrega</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="checkout__input"
                                    placeholder="Calle, número, ciudad..."
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <Button type="submit" variant="primary" className="checkout__submit-btn">
                                Confirmar y Pagar (${total.toFixed(2)})
                            </Button>
                        </form>
                    </section>

                    <aside className="checkout__summary">
                        <h2 className="checkout__subtitle">Resumen del pedido</h2>
                        <div className="checkout__items">
                            {cart.map(item => (
                                <div key={item.id} className="checkout__item">
                                    <div className="checkout__item-info">
                                        <span className="checkout__item-title">{item.title}</span>
                                        <span className="checkout__item-qty">x{item.quantity}</span>
                                    </div>
                                    <span className="checkout__item-price">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="checkout__total">
                            <span>Total a pagar:</span>
                            <span className="checkout__total-amount">${total.toFixed(2)}</span>
                        </div>
                    </aside>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;

