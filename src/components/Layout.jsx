import React, { useState } from 'react';
import Navbar from './Navbar';
import CartSidebar from './CartSidebar';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

import './Layout.css';

const Layout = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart, total, removeFromCart } = useCart();
    const navigate = useNavigate();

    const totalUnits = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <div className="layout">
            <Navbar cartCount={totalUnits} onCartClick={() => setIsCartOpen(true)} />
            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cart={cart}
                total={total}
                onRemove={removeFromCart}
                onCheckout={handleCheckout}
            />
            <main className="layout__content">
                {children}
            </main>
            <footer className="layout__footer">
                <p>&copy; 2025 Desarrollo Web Full Stack - ACTIVIDAD1 G33</p>
            </footer>
        </div>
    );
};

export default Layout;
