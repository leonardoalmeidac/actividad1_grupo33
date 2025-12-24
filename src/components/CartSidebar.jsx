import React from 'react';
import Button from './Button';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose, cart, total, onRemove, onCheckout }) => {
    return (
        <aside className={`cart-sidebar ${isOpen ? 'cart-sidebar--open' : ''}`}>
            <div className="cart-sidebar__header">
                <h2>Tu Carrito</h2>
                <button className="cart-sidebar__close" onClick={onClose}>&times;</button>
            </div>
            <div className="cart-sidebar__content">
                {cart.length === 0 ? (
                    <p className="cart-sidebar__empty">El carrito está vacío.</p>
                ) : (
                    <ul className="cart-sidebar__list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="cart-item__info">
                                    <h4 className="cart-item__title">{item.title}</h4>
                                    <p className="cart-item__price">${item.price.toFixed(2)} x {item.quantity}</p>
                                </div>
                                <button className="cart-item__remove" onClick={() => onRemove(item.id)}>🗑️</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {cart.length > 0 && (
                <div className="cart-sidebar__footer">
                    <div className="cart-sidebar__total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <Button variant="primary" className="cart-sidebar__btn" onClick={onCheckout}>Ir al Checkout</Button>
                </div>
            )}
        </aside>
    );
};

export default CartSidebar;
