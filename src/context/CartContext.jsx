import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('relatos_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [notification, setNotification] = useState(null);

    useEffect(() => {
        localStorage.setItem('relatos_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (book) => {
        setCart((prevCart) => {
            const existingBook = prevCart.find(item => item.id === book.id);
            if (existingBook) {
                return prevCart.map(item =>
                    item.id === book.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                );
            }
            return [...prevCart, { ...book, quantity: 1 }];
        });

        setNotification(`"${book.title}" añadido al carrito`);
        setTimeout(() => setNotification(null), 3000);
    };

    const removeFromCart = (bookId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== bookId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const total = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, notification }}>
            {children}
            {notification && (
                <div className="cart-notification">
                    {notification}
                </div>
            )}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
